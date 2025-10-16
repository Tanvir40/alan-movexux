// scripts/batchGenerateMovings.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

// ✅ LADDA .env FILEN FÖRST!
config({ path: path.join(process.cwd(), '.env') });

import { getSanityData, saveToSanity } from "../src/lib/sanityClient.js";
import { generateAIContent } from "../src/lib/aiClient.js";
import { slugify } from "../src/lib/utils.js";

// Skapa __filename och __dirname för ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Korrekta TypeScript interfaces ---
interface GSCExtractedRoute {
  from: string;
  to: string;
  volume: number;
  query: string;
}

interface ManualRoute {
  from: string;
  to: string;
}

// --- Läs GSC-extraherade rutter ---
const gscRoutesPath = path.join(__dirname, "../data/gsc-extracted-routes.json");
let gscRoutes: GSCExtractedRoute[] = [];

try {
  if (fs.existsSync(gscRoutesPath)) {
    const fileData = fs.readFileSync(gscRoutesPath, "utf-8");
    gscRoutes = JSON.parse(fileData) as GSCExtractedRoute[];
    console.log(`✅ Loaded ${gscRoutes.length} routes from GSC data`);
  } else {
    console.log("⚠️ No GSC routes found, falling back to manual routes");
    
    // Fallback till manuella rutter om GSC-data saknas
    const manualRoutesPath = path.join(__dirname, "../data/routes.json");
    if (fs.existsSync(manualRoutesPath)) {
      const manualData = fs.readFileSync(manualRoutesPath, "utf-8");
      const manualRoutes = JSON.parse(manualData) as ManualRoute[];
      gscRoutes = manualRoutes.map((route: ManualRoute) => ({
        from: route.from,
        to: route.to,
        volume: 50,
        query: `flytt från ${route.from} till ${route.to}`
      }));
      console.log(`✅ Loaded ${gscRoutes.length} manual routes as fallback`);
    }
  }
} catch (err) {
  console.error(`❌ Failed to read route data:`, err);
  process.exit(1);
}

// --- Filtrera och sortera rutter ---
const MIN_VOLUME = 10;
const activeRoutes = gscRoutes
  .filter((route) => route.volume >= MIN_VOLUME)
  .sort((a, b) => b.volume - a.volume);

if (activeRoutes.length === 0) {
  console.log("⚠️ No active routes found with enough search volume.");
  process.exit(0);
}

console.log(`🚀 Starting AI generation for ${activeRoutes.length} routes (sorted by search volume)...\n`);

// --- Visa top routes ---
console.log("📊 Top routes to generate:");
activeRoutes.slice(0, 10).forEach((route, index) => {
  console.log(`   ${index + 1}. ${route.from} → ${route.to} (${route.volume} searches)`);
});
if (activeRoutes.length > 10) {
  console.log(`   ... and ${activeRoutes.length - 10} more routes`);
}
console.log("");

// --- Kör batchen ---
async function generateBatch() {
  let generatedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const route of activeRoutes) {
    const { from, to, volume, query } = route;
    const routeKey = slugify(`${from}-${to}`);

    try {
      // Kontrollera om sidan redan finns i Sanity
      const existing = await getSanityData(routeKey);
      if (existing) {
        console.log(`ℹ️ Skipped (already exists): ${from} → ${to}`);
        skippedCount++;
        continue;
      }

      console.log(`🧠 Generating page: ${from} → ${to} (${volume} searches)`);

      // Generera AI-innehåll
      const content = await generateAIContent({ 
        from, 
        to, 
        query
      });

      // Konvertera AIContentResponse till MovePage format
      const movePageData = {
        from,
        to,
        slug: { current: routeKey },
        title: content.title || `Moving from ${from} to ${to}`,
        description: content.description || `Professional moving services from ${from} to ${to}`,
        seoTitle: content.seoTitle,
        seoDescription: content.seoDescription,
        content: Array.isArray(content.content) ? content.content : [content.content],
        seoImage: content.seoImage ? { asset: { _ref: content.seoImage } } : null,
        cachedImages: [],
        lastUpdated: new Date().toISOString(),
        h1: content.title || `Moving from ${from} to ${to}`
      };

      // Spara till Sanity
      const saved = await saveToSanity(routeKey, movePageData);

      if (saved) {
        console.log(`✅ Generated: ${from} → ${to}\n`);
        generatedCount++;
      } else {
        console.error(`❌ Failed to save: ${from} → ${to}\n`);
        errorCount++;
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (err) {
      console.error(`🚨 Error with ${from} → ${to}:`, err);
      errorCount++;
    }
  }

  // Sammanfattning
  console.log("\n🎉 Batch generation completed!");
  console.log(`📊 Summary:`);
  console.log(`   ✅ Generated: ${generatedCount} new pages`);
  console.log(`   ⏭️ Skipped: ${skippedCount} existing pages`);
  console.log(`   ❌ Errors: ${errorCount} pages`);
  console.log(`   📈 Total processed: ${activeRoutes.length} routes`);
  
  if (generatedCount > 0) {
    console.log(`\n🚀 Don't forget to ping Google for sitemap updates!`);
    console.log(`   Run: npm run ping:google`);
  }
}

// --- Start ---
generateBatch().catch((err) => {
  console.error("Unhandled error:", err);
  process.exit(1);
});