// sanity/schemas/countryPage.ts
import { defineType, defineField } from "sanity";

export const countryPage = defineType({
  name: "countryPage",
  title: "Country Page", 
  type: "document",
  fields: [
    // ✅ Basic info
    defineField({
      name: "name",
      title: "Country Name",
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
    defineField({
      name: "countryCode",
      title: "Country Code",
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
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Country Overview
    defineField({
      name: "description",
      title: "Country Overview", 
      type: "text",
      rows: 4,
      description: "Brief country description for meta tags and introductions",
    }),
    defineField({
      name: "content",
      title: "Complete Country Guide",
      type: "array", 
      of: [{ type: "block" }],
      description: "Detailed guide about living and moving to this country",
    }),

    // ✅ LEGAL & REGULATIONS (UNIKT för countryPage)
    defineField({
      name: "visaRequirements",
      title: "Visa & Entry Requirements",
      type: "text",
      rows: 4,
      description: "Visa types, processing times, and requirements",
    }),
    defineField({
      name: "customsRegulations",
      title: "Customs & Import Regulations",
      type: "text",
      rows: 4,
      description: "Rules for importing personal belongings, vehicles, pets",
    }),
    defineField({
      name: "taxInformation",
      title: "Tax Information for Expats",
      type: "text",
      rows: 3,
      description: "Income tax, social security, tax treaties",
    }),
    defineField({
      name: "residencyPermits",
      title: "Residency Permit Process",
      type: "text",
      rows: 3,
      description: "How to obtain residency, required documents, timelines",
    }),

    // ✅ LIVING CONDITIONS (Country-level perspective)
    defineField({
      name: "healthcareSystem",
      title: "Healthcare System",
      type: "text",
      rows: 3,
      description: "Healthcare quality, insurance requirements, costs",
    }),
    defineField({
      name: "educationSystem",
      title: "Education System",
      type: "text",
      rows: 3,
      description: "Schools, universities, international education options",
    }),
    defineField({
      name: "costOfLiving",
      title: "Cost of Living Overview",
      type: "text",
      rows: 3,
      description: "Average costs compared to other European countries",
    }),

    // ✅ MOVING LOGISTICS (National level)
    defineField({
      name: "movingRegulations",
      title: "National Moving Regulations",
      type: "array",
      of: [{ type: "string" }],
      description: "Country-specific legal requirements for international moves",
    }),
    defineField({
      name: "popularCities",
      title: "Top Destinations for Expats", 
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cityPage" }],
        },
      ],
      description: "Most popular cities for international relocation",
    }),

    // ✅ STATISTICS & DATA
    defineField({
      name: "monthlyMovers",
      title: "Monthly International Movers",
      type: "number",
      description: "Approximate number of people moving to this country monthly", 
    }),
    defineField({
      name: "averageMovingCost",
      title: "Average International Moving Cost",
      type: "number",
      description: "Average cost to move from another EU country (EUR)",
    }),
    defineField({
      name: "expatPopulation",
      title: "Expatriate Population",
      type: "number",
      description: "Approximate number of expats living in the country",
    }),

    // ✅ SEO OPTIMIZATION
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Custom SEO title (defaults to 'Moving to {Country} | Complete Guide | MovexOS')",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description", 
      type: "text",
      rows: 3,
      description: "Focus on country-level moving keywords and regulations",
    }),
    defineField({
      name: "seoImage",
      title: "SEO Image",
      type: "image",
      options: { hotspot: true },
      description: "Country landscape or symbolic image for social sharing",
    }),

    // ✅ VISUALS
    defineField({
      name: "heroImage",
      title: "Hero Image", 
      type: "image",
      options: { hotspot: true },
      description: "Wide landscape image representing the country",
    }),
    defineField({
      name: "flag",
      title: "Country Flag",
      type: "image",
      options: { hotspot: true },
    }),
  ],

  preview: {
    select: {
      title: "name",
      code: "countryCode", 
      media: "flag",
    },
    prepare({ title, code, media }) {
      return {
        title: title,
        subtitle: `Country Code: ${code}`,
        media: media,
      };
    },
  },
});