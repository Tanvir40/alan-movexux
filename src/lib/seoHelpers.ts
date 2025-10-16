// src/lib/seoHelpers.ts
import { sanityClient } from "./sanityClient";
import type { SEOSettings } from "@/types/seoSettings";

// ✅ Hämta SEO settings (singleton)
export async function getSEOSettings(): Promise<SEOSettings | null> {
  try {
    const query = `*[_type == "seoSettings"][0]{
      defaultTitle,
      defaultDescription,
      titleTemplate,
      "defaultOgImage": defaultOgImage.asset->url,
      ogType,
      siteName,
      "favicon": favicon.asset->url,
      "logo": logo.asset->url,
      googleAnalyticsId,
      googleTagManagerId,
      facebookPixelId,
      googleSiteVerification,
      bingVerification,
      socialLinks,
      organizationSchema,
      robotsSettings,
      sitemapUrl
    }`;
    
    return await sanityClient.fetch(query);
  } catch (error) {
    console.error("Error fetching SEO settings:", error);
    return null;
  }
}

// ✅ Generate page title med template
export function generatePageTitle(pageTitle: string, settings: SEOSettings): string {
  if (!settings.titleTemplate) {
    return pageTitle;
  }
  return settings.titleTemplate.replace("{title}", pageTitle);
}

// ✅ Generate robots meta tag
export function generateRobotsTag(settings: SEOSettings): string {
  const { index = true, follow = true } = settings.robotsSettings || {};
  const indexValue = index ? "index" : "noindex";
  const followValue = follow ? "follow" : "nofollow";
  return `${indexValue}, ${followValue}`;
}