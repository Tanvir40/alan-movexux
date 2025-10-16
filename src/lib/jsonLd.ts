// lib/jsonLd.ts
// ---------------------------
// Typdefinitioner för JSON-LD
// ---------------------------
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface JsonLdData {
  "@context": string;
  "@type": string;
  [key: string]: JsonValue;
}

export interface JsonLdParams {
  route: string;
  from: string;
  to: string;
  pageData?: {
    title?: string;
    description?: string;
    seoTitle?: string;
    seoDescription?: string;
    seoImage?: { asset: { _ref: string } } | null;
  };
  priceEstimate?: string;
}

// ---------------------------
// Generera JSON-LD data baserat på AI-content
// ---------------------------
export function generateJsonLd({
  route,
  from,
  to,
  pageData = {},
  priceEstimate,
}: JsonLdParams): JsonLdData[] {
  const jsonLd: JsonLdData[] = [];

  // ✅ FIXED: Använd fallback för REQUIRED fields i JSON-LD
  const title = pageData?.seoTitle || pageData?.title || `Moving from ${from} to ${to}`;
  const description = pageData?.seoDescription || pageData?.description || `Professional moving services from ${from} to ${to}`;
  
  let image: string | null = null;
  if (pageData?.seoImage?.asset?._ref) {
    image = `https://cdn.sanity.io/images/${pageData.seoImage.asset._ref}`;
  }

  const baseData: JsonLdData = {
    "@context": "https://schema.org",
    "@type": "MovingService",
    name: title, // ✅ Garanterat string
    description: description, // ✅ Garanterat string
    image: image, // ✅ Kan vara null, men det är ok för JSON-LD
    provider: {
      "@type": "Organization",
      name: "movexos",
      url: "https://www.movexos.com",
      logo: "https://www.movexos.com/public/logo/movexos-logo-light.svg",
    },
    areaServed: { "@type": "Place", name: `${from} and ${to}` },
  };

  if (priceEstimate) {
    baseData.offers = {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: priceEstimate,
      availability: "https://schema.org/InStock",
      url: `https://www.movexos.com/movings/${route}`,
    };
  }

  jsonLd.push(baseData);
  return jsonLd;
}

// ---------------------------
// Rendera JSON-LD till HTML script-tag
// ---------------------------
export function renderJsonLd(jsonLdData: JsonLdData[]): string {
  return jsonLdData
    .map(
      (data) =>
        `<script type="application/ld+json">${JSON.stringify(data)}</script>`
    )
    .join("\n");
}