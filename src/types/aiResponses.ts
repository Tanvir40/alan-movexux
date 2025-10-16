// src/types/aiResponses.ts
export interface AIContentParams {
  from: string;
  to: string;
  query?: string;
}

export interface AIContentResponse {
  slug: string;
  title?: string;
  description?: string;
  content: string | string[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string | null;
}