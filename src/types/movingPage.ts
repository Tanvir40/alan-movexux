// src/types/movingPage.ts
export interface RouteImage {
  url: string;
  alt: string;
  photographer?: string;
}

export interface MovingPageData {
  slug: string;
  from: string;
  to: string;
  title?: string;
  description?: string;
  content: string[]; // Array of content sections
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
  cachedImages?: RouteImage[];
  lastUpdated: string;
  searchVolume?: number;
  isAIGenerated?: boolean;
}