// sanity/schemas/servicesPage.ts
import { defineType, defineField } from "sanity";

export const servicesPage = defineType({
  name: "servicesPage",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text" }),
    defineField({ name: "seoImage", title: "SEO Image", type: "image" }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
  ],
});
