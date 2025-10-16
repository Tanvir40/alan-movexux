// sanity/schemas/faqPage.ts
import { defineType, defineField } from "sanity";

export const faqPage = defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  fields: [
    // ✅ Page Title
    defineField({
      name: "title",
      title: "FAQ Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g., 'International Moving FAQ' or 'General Questions'",
    }),
    
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Category
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General Moving", value: "general" },
          { title: "International Moving", value: "international" },
          { title: "Domestic Moving", value: "domestic" },
          { title: "Packing", value: "packing" },
          { title: "Pricing", value: "pricing" },
          { title: "Insurance", value: "insurance" },
          { title: "Customs", value: "customs" },
        ],
      },
    }),

    // ✅ FAQ Items
    defineField({
      name: "faqs",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text" },
            { name: "order", title: "Order", type: "number" },
          ],
        },
      ],
    }),

    // ✅ SEO
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
  ],
});