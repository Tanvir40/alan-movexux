// src/lib/seo.ts
import type { Metadata } from "next";
import { generateUnsplashImagesForRoute } from "@/lib/unsplashClient"; // ✅ BYTT: Unsplash istället för imageClient
import { getOrCreateMovePage, MovePage } from "@/lib/sanityClient";

// Dynamisk SEO-generator för flyttsidor
export async function generateMoveMetadata(from: string, to: string): Promise<Metadata> {
  const pageData: MovePage = await getOrCreateMovePage(from, to);
  const images = await generateUnsplashImagesForRoute(from, to); // ✅ BYTT: Unsplash istället

  return {
    title: pageData.seoTitle || pageData.title || `Moving from ${from} to ${to} | MovexOS`,
    description: pageData.seoDescription || pageData.description || `Professional moving services from ${from} to ${to}. Get free quote for your relocation.`,
    openGraph: {
      title: pageData.seoTitle || pageData.title || `Moving from ${from} to ${to} | MovexOS`,
      description: pageData.seoDescription || pageData.description || `Professional moving services from ${from} to ${to}. Get free quote for your relocation.`,
      images:
        images.length > 0
          ? images.map((img) => ({ 
              url: img.url,
              alt: img.alt 
            }))
          : pageData.seoImage
          ? [{ 
              url: `https://cdn.sanity.io/images/${pageData.seoImage.asset._ref}`,
              alt: `Moving from ${from} to ${to}`
            }]
          : [
              {
                url: "https://movexos.com/images/seo-placeholder.jpg",
                alt: `Moving from ${from} to ${to} - MovexOS`
              }
            ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.seoTitle || pageData.title || `Moving from ${from} to ${to} | MovexOS`,
      description: pageData.seoDescription || pageData.description || `Professional moving services from ${from} to ${to}. Get free quote for your relocation.`,
      images: images.length > 0 ? [images[0].url] : ['https://movexos.com/images/seo-placeholder.jpg'],
    },
  };
}

// JSON-LD generator för strukturerad data (SEO)
export const generateMoveJSONLD = (pageData: MovePage, from: string, to: string) => ({
  "@context": "https://schema.org",
  "@type": "MovingService",
  name: pageData.seoTitle || pageData.title || `Moving from ${from} to ${to}`,
  description: pageData.seoDescription || pageData.description || `Professional moving services from ${from} to ${to}`,
  url: `https://movexos.com/movings/${from}-${to}`,
  image: pageData.seoImage 
    ? `https://cdn.sanity.io/images/${pageData.seoImage.asset._ref}`
    : "https://movexos.com/images/seo-placeholder.jpg",
  provider: {
    "@type": "Organization",
    name: "MovexOS",
    url: "https://movexos.com",
  },
  areaServed: {
    "@type": "Place",
    name: `${from} to ${to}`,
  }
});