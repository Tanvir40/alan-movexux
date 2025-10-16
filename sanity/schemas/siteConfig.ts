// sanity/schemas/siteConfig.ts
import { defineType, defineField } from "sanity";

export const siteConfig = defineType({
  name: "siteConfig",
  title: "Site Config",
  type: "document",
  fields: [
    defineField({ name: "companyName", title: "Company Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "socialLinks", title: "Social Links", type: "array", of: [{ type: "string" }] }),
  ],
});
