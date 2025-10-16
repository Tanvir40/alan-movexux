// src/types/faqPage.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPage {
  slug: string;
  title: string;
  faqs: FAQItem[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: string;
}
