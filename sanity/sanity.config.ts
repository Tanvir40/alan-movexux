// sanity/sanity.config.ts
import { defineConfig } from "sanity";
import { movingPage } from "./schemas/movingPage";
import { servicesPage } from "./schemas/servicesPage";
import { faqPage } from "./schemas/faqPage";
import { cityPage } from "./schemas/cityPage";
import { countryPage } from "./schemas/countryPage";
import { seoSettings } from "./schemas/seoSettings";
import { siteConfig } from "./schemas/siteConfig";
import { abTestConfig } from "./schemas/abTestConfig";

export const sanityConfig = defineConfig({
  projectId: process.env.SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.SANITY_DATASET || "production",
  title: "movexos Studio",
  schema: {
    types: [
      movingPage,
      servicesPage,
      faqPage,
      cityPage,
      countryPage,
      seoSettings,
      siteConfig,
      abTestConfig,
    ],
  },
  plugins: [],
});
