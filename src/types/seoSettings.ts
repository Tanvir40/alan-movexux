// src/types/seoSettings.ts
export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface OrganizationAddress {
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export interface OrganizationSchema {
  name: string;
  legalName?: string;
  url: string;
  logo?: string;
  email?: string;
  phone?: string;
  address?: OrganizationAddress;
}

export interface RobotsSettings {
  index: boolean;
  follow: boolean;
}

export interface SEOSettings {
  defaultTitle: string;
  defaultDescription: string;
  titleTemplate?: string;
  defaultOgImage?: string;
  ogType?: string;
  siteName: string;
  favicon?: string;
  logo?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  googleSiteVerification?: string;
  bingVerification?: string;
  socialLinks?: SocialLinks;
  organizationSchema?: OrganizationSchema;
  robotsSettings?: RobotsSettings;
  sitemapUrl?: string;
}