// sanity/schemas/abTestConfig.ts
import { defineType, defineField } from "sanity";

export const abTestConfig = defineType({
  name: "abTestConfig",
  title: "A/B Test Config",
  type: "document",
  fields: [
    defineField({ name: "testId", title: "Test ID", type: "string" }),
    defineField({ name: "variants", title: "Variants", type: "array", of: [{ type: "string" }] }),
  ],
});
