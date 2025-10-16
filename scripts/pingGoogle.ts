// scripts/pingGoogle.ts
import fetch from "node-fetch";

// scripts/pingGoogle.ts

export const pingGoogle = async (url: string) => {
  try {
    const response = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`);
    if (response.ok) {
      console.log(`Successfully pinged Google for sitemap: ${url}`);
    } else {
      console.error(`Failed to ping Google for sitemap: ${url}`, response.statusText);
    }
  } catch (err) {
    console.error("Error pinging Google:", err);
  }
};

// Kör scriptet direkt
if (require.main === module) {
  const testUrl = "https://movexos.com/sitemap.xml";
  pingGoogle(testUrl);
}
