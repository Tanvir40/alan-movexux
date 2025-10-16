// sanity/schemas/seoSettings.ts
import { defineType, defineField } from "sanity";

export const seoSettings = defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  fields: [
    // ✅ Global SEO Defaults
    defineField({
      name: "defaultTitle",
      title: "Default Site Title",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
      description: "Default title for pages without custom SEO title (max 60 chars)",
      initialValue: "MovexOS - Professional International Moving Services",
    }),
    
    defineField({
      name: "defaultDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
      description: "Default meta description (max 160 chars)",
      initialValue: "Professional moving services across Europe. Get instant quotes for international and domestic relocations. Trusted by thousands of happy customers.",
    }),

    defineField({
      name: "titleTemplate",
      title: "Title Template",
      type: "string",
      description: "Template for page titles. Use {title} as placeholder",
      initialValue: "{title} | MovexOS",
    }),

    // ✅ Open Graph Defaults
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Default image for social media sharing (1200x630px recommended)",
    }),

    defineField({
      name: "ogType",
      title: "Open Graph Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
          { title: "Business", value: "business" },
        ],
      },
      initialValue: "website",
    }),

    // ✅ Branding
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "MovexOS",
    }),

    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Site favicon (32x32px recommended)",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Main site logo",
    }),

    // ✅ Analytics & Tracking
    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics ID",
      type: "string",
      description: "GA4 Measurement ID (e.g., G-XXXXXXXXXX)",
    }),

    defineField({
      name: "googleTagManagerId",
      title: "Google Tag Manager ID",
      type: "string",
      description: "GTM Container ID (e.g., GTM-XXXXXXX)",
    }),

    defineField({
      name: "facebookPixelId",
      title: "Facebook Pixel ID",
      type: "string",
      description: "Facebook Pixel tracking ID",
    }),

    // ✅ Verification
    defineField({
      name: "googleSiteVerification",
      title: "Google Site Verification",
      type: "string",
      description: "Google Search Console verification code",
    }),

    defineField({
      name: "bingVerification",
      title: "Bing Webmaster Verification",
      type: "string",
      description: "Bing Webmaster Tools verification code",
    }),

    // ✅ Social Media Links
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "Twitter/X" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "youtube", type: "url", title: "YouTube" },
      ],
    }),

    // ✅ Structured Data
    defineField({
      name: "organizationSchema",
      title: "Organization Schema",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "Company Name", initialValue: "MovexOS" },
        { name: "legalName", type: "string", title: "Legal Name" },
        { name: "url", type: "url", title: "Website URL", initialValue: "https://movexos.com" },
        { name: "logo", type: "url", title: "Logo URL" },
        { name: "email", type: "string", title: "Contact Email" },
        { name: "phone", type: "string", title: "Contact Phone" },
        { 
          name: "address", 
          type: "object", 
          title: "Address",
          fields: [
            { name: "street", type: "string", title: "Street Address" },
            { name: "city", type: "string", title: "City" },
            { name: "postalCode", type: "string", title: "Postal Code" },
            { name: "country", type: "string", title: "Country" },
          ],
        },
      ],
    }),

    // ✅ Robots & Indexing
    defineField({
      name: "robotsSettings",
      title: "Robots Settings",
      type: "object",
      fields: [
        { 
          name: "index", 
          type: "boolean", 
          title: "Allow Indexing",
          initialValue: true,
          description: "Allow search engines to index the site",
        },
        { 
          name: "follow", 
          type: "boolean", 
          title: "Allow Following Links",
          initialValue: true,
          description: "Allow search engines to follow links",
        },
      ],
    }),

    // ✅ Sitemap Settings
    defineField({
      name: "sitemapUrl",
      title: "Sitemap URL",
      type: "url",
      description: "URL to sitemap.xml",
      initialValue: "https://movexos.com/sitemap.xml",
    }),
  ],
});