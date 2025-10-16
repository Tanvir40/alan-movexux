// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";
import { generateAIContent } from "@/lib/aiClient";
import type { AIContentParams, AIContentResponse } from "@/types/aiResponses";

// ---------------------------
// Sanity Client
// ---------------------------
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID");
}
if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET");
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-04",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// ---------------------------
// Typdefinitioner
// ---------------------------
export interface SeoImage {
  asset: { _ref: string };
}

export interface RouteImage {
  url: string;
  alt: string;
  photographer?: string;
}

export interface MovePage {
  from: string;
  to: string;
  slug: { current: string };
  title?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  content: string[];
  seoImage?: SeoImage | null;
  cachedImages?: RouteImage[];
  lastUpdated: string;
  h1?: string;
}

// ---------------------------
// Hämta data från Sanity
// ---------------------------
export async function getSanityData(routeKey: string): Promise<MovePage | null> {
  try {
    const query = `*[_type == "movingPage" && slug.current == $routeKey][0]{
      from,
      to,
      slug,
      title,
      description,
      seoTitle,
      seoDescription,
      seoImage,
      content,
      cachedImages,
      lastUpdated,
      h1
    }`;
    const data: MovePage | null = await sanityClient.fetch(query, { routeKey });

    if (data && !Array.isArray(data.content)) {
      data.content = [];
    }

    return data || null;
  } catch (error) {
    console.error("🚨 Sanity fetch error:", error);
    return null;
  }
}

// ---------------------------
// Spara data i Sanity
// ---------------------------
export async function saveToSanity(routeKey: string, pageData: MovePage): Promise<MovePage | null> {
  try {
    const doc = {
      _type: "movingPage",
      _id: `movingPage.${routeKey}`,
      ...pageData,
      slug: pageData.slug?.current
        ? pageData.slug
        : { _type: "slug", current: routeKey },
    };
    
    if (!process.env.SANITY_API_TOKEN) {
      console.warn("⚠️ No Sanity write token, skipping save");
      return pageData;
    }
    
    const result: MovePage = await sanityClient.createOrReplace(doc);
    return result;
  } catch (error) {
    console.error("🚨 Sanity save error - continuing without save:", error);
    return pageData;
  }
}

// ---------------------------
// Helper function för image hantering
// ---------------------------
function safeImageHandler(seoImage: string | { asset?: { _ref?: string } } | null | undefined): SeoImage | null {
  if (!seoImage) return null;
  
  if (typeof seoImage === "string" && seoImage.startsWith("image-")) {
    return { asset: { _ref: seoImage } };
  }
  
  if (typeof seoImage === "object" && seoImage?.asset?._ref && seoImage.asset._ref.startsWith("image-")) {
    return { asset: { _ref: seoImage.asset._ref } };
  }
  
  return null;
}

// ---------------------------
// Spara cachade bilder
// ---------------------------
export async function saveCachedImages(routeKey: string, images: RouteImage[]): Promise<void> {
  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.warn("⚠️ No Sanity write token, skipping image cache");
      return;
    }
    
    await sanityClient
      .patch(`movingPage.${routeKey}`)
      .set({ cachedImages: images })
      .commit();
    console.log(`✅ Cached images saved for ${routeKey}`);
  } catch (error) {
    console.error("🚨 Failed to save cached images - continuing:", error);
  }
}

// ---------------------------
// Hämtar eller skapar sidan dynamiskt
// ---------------------------
export async function getOrCreateMovePage(
  from: string,
  to: string,
  query?: string
): Promise<MovePage> {
  if (!from || !to) {
    throw new Error("Missing 'from' or 'to' in getOrCreateMovePage()");
  }
  
  const routeKey = `${from}-${to}`;

  // 1️⃣ Försök hämta från Sanity
  let pageData = await getSanityData(routeKey);

  // ♻️ Om sidan finns – kolla om den behöver uppdateras
  if (pageData) {
    const daysSinceUpdate = Math.floor(
      (Date.now() - new Date(pageData.lastUpdated).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    if (pageData.cachedImages && pageData.cachedImages.length > 0) {
      console.log(`🔄 Using cached images for ${routeKey}`);
    } 
    else if (daysSinceUpdate > 30) {
      console.log(`♻️ Refreshing AI content for ${routeKey}`);
      const aiData = await generateAIContent({ from, to, query });

      pageData.content = Array.isArray(aiData.content)
        ? aiData.content
        : [aiData.content ?? ""];

      pageData.lastUpdated = new Date().toISOString();
      pageData.title = aiData.title;
      pageData.description = aiData.description;
      pageData.seoTitle = aiData.seoTitle;
      pageData.seoDescription = aiData.seoDescription;
      pageData.seoImage = safeImageHandler(aiData.seoImage);

      await saveToSanity(routeKey, pageData);
    }

    return pageData;
  }

  // 2️⃣ Skapa AI-genererat innehåll om sidan inte finns
  const aiParams: AIContentParams = { from, to, query };
  const aiData: AIContentResponse = await generateAIContent(aiParams);

  const seoImage = safeImageHandler(aiData.seoImage);

  pageData = {
    from,
    to,
    slug: { current: routeKey },
    title: aiData.title,
    description: aiData.description,
    seoTitle: aiData.seoTitle,
    seoDescription: aiData.seoDescription,
    content: Array.isArray(aiData.content)
      ? aiData.content
      : [aiData.content ?? ""],
    seoImage,
    cachedImages: [],
    lastUpdated: new Date().toISOString(),
    h1: aiData.title,
  };

  await saveToSanity(routeKey, pageData);
  return pageData;
}