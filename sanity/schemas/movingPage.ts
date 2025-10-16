// sanity/schemas/movingPage.ts
import { defineType, defineField } from "sanity";

// ✅ Lokal type för Sanity document
interface MovingPageDocument {
  from?: string;
  to?: string;
  [key: string]: unknown;
}
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

export const movingPage = defineType({
  name: "movingPage",
  title: "Moving Page",
  type: "document",
  fields: [
    // ✅ Route Information
    defineField({
      name: "from",
      title: "From City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: "to",
      title: "To City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: MovingPageDocument) => `${doc.from}-${doc.to}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Content
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Main H1 title for the page",
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief intro text",
    }),

    defineField({
      name: "content",
      title: "Main Content",
      type: "array",
      of: [{ type: "string" }],
      description: "AI-generated content sections (array of paragraphs)",
    }),

    // ✅ SEO Fields
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom SEO title (defaults to 'Moving from {from} to {to}')",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 3,
      description: "Meta description for search engines",
    }),

    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Open Graph image for social sharing",
    }),

    // ✅ Cached Images (från Unsplash)
    defineField({
      name: "cachedImages",
      title: "Cached Route Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "Image URL" },
            { name: "alt", type: "string", title: "Alt Text" },
            { name: "photographer", type: "string", title: "Photographer" },
          ],
        },
      ],
      description: "Cached images from Unsplash for this route",
    }),

    // ✅ Metadata
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "searchVolume",
      title: "Monthly Search Volume",
      type: "number",
      description: "From Google Search Console data",
    }),

    defineField({
      name: "isAIGenerated",
      title: "AI Generated",
      type: "boolean",
      initialValue: true,
      description: "Mark if content is AI-generated",
    }),
  ],

  // ✅ Preview i Sanity Studio
  preview: {
    select: {
      from: "from",
      to: "to",
      volume: "searchVolume",
      updated: "lastUpdated",
    },
    prepare({ from, to, volume, updated }) {
      const date = updated ? new Date(updated).toLocaleDateString() : "N/A";
      return {
        title: `${from} → ${to}`,
        subtitle: `🔍 ${volume || 0} searches/mo | Updated: ${date}`,
      };
    },
  },
});