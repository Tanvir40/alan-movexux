// sanity/schemas/cityPage.ts
import { defineType, defineField } from "sanity";

export const cityPage = defineType({
  name: "cityPage",
  title: "City Page",
  type: "document",
  fields: [
    // ✅ Basic info
    defineField({
      name: "name",
      title: "City Name", 
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // ✅ Location data (viktigt för SEO)
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "countryCode",
      title: "Country Code", // "DE", "FR", "SE" - för automatisering
      type: "string",
      options: {
        list: [
          { title: "Germany", value: "DE" },
          { title: "France", value: "FR" },
          { title: "Sweden", value: "SE" },
          { title: "United Kingdom", value: "GB" },
          { title: "Spain", value: "ES" },
          { title: "Italy", value: "IT" },
          { title: "Netherlands", value: "NL" },
          { title: "Norway", value: "NO" },
          { title: "Denmark", value: "DK" },
          { title: "Poland", value: "PL" },
          { title: "Portugal", value: "PT" },
        ],
      },
    }),
    
    // ✅ Rich content för bättre SEO
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "Short description for meta tags and previews",
    }),
    defineField({
      name: "content",
      title: "Main Content", 
      type: "array",
      of: [{ type: "block" }],
      description: "Full content about moving to this city",
    }),
    
    // ✅ Moving-specific information
    defineField({
      name: "movingTips",
      title: "Moving Tips",
      type: "array",
      of: [{ type: "string" }],
      description: "City-specific moving tips and advice",
    }),
    defineField({
      name: "popularRoutes",
      title: "Popular Moving Routes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "fromCity", type: "string", title: "From City" },
            { name: "toCity", type: "string", title: "To City" },
            { name: "searchVolume", type: "number", title: "Search Volume" },
          ],
        },
      ],
      description: "Most popular routes to/from this city",
    }),
    
    // ✅ SEO Optimization
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom SEO title (defaults to 'Moving to {City} | MovexOS')",
    }),
    defineField({
      name: "seoDescription", 
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Custom meta description",
    }),
    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image for social media sharing",
    }),
    
    // ✅ Visuals
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    
    // ✅ Statistics (för trovärdighet)
    defineField({
      name: "moversCount",
      title: "Monthly Movers",
      type: "number",
      description: "Approximate number of people moving to this city monthly",
    }),
  ],
  
  // ✅ Preview i Sanity Studio
  preview: {
    select: {
      title: "name",
      country: "country",
      media: "heroImage",
    },
    prepare({ title, country, media }) {
      return {
        title: title,
        subtitle: country,
        media: media,
      };
    },
  },
});