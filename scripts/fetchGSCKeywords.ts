// scripts/fetchGSCKeywords.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KEY_FILE = path.join(__dirname, "../data/gsc-service-account.json");
const OUTPUT_FILE = path.join(__dirname, "../data/gsc-keywords-enhanced.json");
const ROUTES_FILE = path.join(__dirname, "../data/gsc-extracted-routes.json");

// Config
const SITE_URL = "https://movexos.com";
const DAYS_BACK = 30;

// Type definitions
interface GSCQueryItem {
  query: string;
  page: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
}

interface ExtractedRoute {
  from: string;
  to: string;
  volume: number;
  query: string;
}

// Type-safe error handler
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

// 🎯 AUTOMATISK ROUTE-EXTRAHERING
const extractRoutesFromQueries = (queries: GSCQueryItem[]): ExtractedRoute[] => {
  return queries
    .filter(item => item.query.toLowerCase().includes('moving from') && item.query.toLowerCase().includes('to'))
    .map(item => {
      const match = item.query.match(/moving from (.+) till (.+)/i);
      return match ? {
        from: match[1].trim(),
        to: match[2].trim(),
        volume: item.impressions,
        query: item.query
      } : null;
    })
    .filter((item): item is ExtractedRoute => item !== null);
};

// 🎯 FÖRBÄTTRAD GSC-HÄMTRING
async function fetchEnhancedGSCData() {
  try {
    // 1. Auth with better error handling
    if (!fs.existsSync(KEY_FILE)) {
      throw new Error(`GSC credentials file missing: ${KEY_FILE}`);
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });

    const searchconsole = google.searchconsole({ version: "v1", auth });

    // 2. Dynamic date range (last 30 days)
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - DAYS_BACK * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    console.log(`📊 Fetching GSC data for ${startDate} to ${endDate}...`);

    // 3. Enhanced query with more metrics
    const res = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["query", "page"],
        rowLimit: 5000,
      },
    });

    const rows = res.data.rows || [];
    
    if (rows.length === 0) {
      console.log("⚠️ No data found in GSC for the specified period");
      return;
    }

    // 4. Enhanced data structure
    const enhancedData: GSCQueryItem[] = rows.map(row => ({
      query: row.keys?.[0] || "",
      page: row.keys?.[1] || "",
      impressions: row.impressions || 0,
      clicks: row.clicks || 0,
      ctr: row.ctr || 0,
      position: row.position || 0
    }));

    // 5. Save enhanced keyword data
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(enhancedData, null, 2));
    
    console.log(`✅ Saved ${enhancedData.length} enhanced keyword records to ${OUTPUT_FILE}`);
    
    // 6. Statistical summary
    const totalImpressions = enhancedData.reduce((sum, item) => sum + item.impressions, 0);
    const totalClicks = enhancedData.reduce((sum, item) => sum + item.clicks, 0);
    
    console.log(`📈 Summary: ${totalImpressions.toLocaleString()} impressions, ${totalClicks.toLocaleString()} clicks`);

    // 🎯 NY FUNKTIONALITET: Automatisk route-extrahering
    console.log(`🔍 Extracting moving routes from queries...`);
    
    const extractedRoutes = extractRoutesFromQueries(enhancedData);
    
    if (extractedRoutes.length > 0) {
      // Spara extraherade rutter
      fs.writeFileSync(ROUTES_FILE, JSON.stringify(extractedRoutes, null, 2));
      
      console.log(`🎯 Extracted ${extractedRoutes.length} moving routes:`);
      
      // Visa top routes
      const topRoutes = extractedRoutes
        .sort((a, b) => b.volume - a.volume)
        .slice(0, 10);
      
      topRoutes.forEach((route, index) => {
        console.log(`   ${index + 1}. ${route.from} → ${route.to} (${route.volume} searches)`);
      });

      // 🚀 Integration med batch-generering
      console.log(`🔄 Found ${extractedRoutes.length} new routes for potential page generation`);
      console.log(`💡 Run 'npm run batch' to generate pages for these routes`);
      
    } else {
      console.log(`⚠️ No moving routes found in search queries`);
    }

  } catch (error) {
    console.error('❌ GSC fetch failed:', getErrorMessage(error));
    process.exit(1);
  }
}

// Run only if file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchEnhancedGSCData();
}

export { fetchEnhancedGSCData, extractRoutesFromQueries };