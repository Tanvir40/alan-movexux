// src/lib/googlePing.ts

export const pingGoogle = async (url: string) => {
  try {
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(url)}`);
    console.log("Pinged Google for:", url);
  } catch (err) {
    console.error("Error pinging Google:", err);
  }
};
