import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const csvPath = path.join(process.cwd(), "data/gsc-export.csv");
const jsonPath = path.join(process.cwd(), "data/seo-searchdata.json");

const csvContent = fs.readFileSync(csvPath, "utf-8");
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
});

const MIN_IMPRESSIONS = 10;

const seoData = records
  .filter((r: any) => parseInt(r.Impressions) >= MIN_IMPRESSIONS)
  .map((r: any) => {
    // Enkla heuristiker för from/to (kan förbättras med AI senare)
    const match = r.Query.match(/flytt från (.+) till (.+)/i);
    const from = match?.[1] || "";
    const to = match?.[2] || "";

    return {
      query: r.Query,
      from,
      to,
      volume: parseInt(r.Impressions),
    };
  })
  .filter((d: any) => d.from && d.to); // bara giltiga rutter

fs.writeFileSync(jsonPath, JSON.stringify(seoData, null, 2));
console.log(`✅ Created seo-searchdata.json with ${seoData.length} routes.`);