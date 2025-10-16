// lib/unsplashClient.ts

// ✅ TypeScript interface för Unsplash response
interface UnsplashPhoto {
  urls: {
    regular: string;
  };
  alt_description: string | null;
  user?: {
    name: string;
  };
}

export interface RouteImage {
  url: string;
  alt: string;
  photographer?: string;
}

// ✅ Fallback bilder om Unsplash failar
function getFallbackImages(from: string, to: string): RouteImage[] {
  return [
    {
      url: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?auto=format&fit=crop&w=800&h=600&q=80",
      alt: `Professional moving services from ${from} to ${to}`,
      photographer: "Unsplash"
    },
    {
      url: "https://images.unsplash.com/photo-1624138784107-ba9d53fbd4f2?auto=format&fit=crop&w=800&h=600&q=80",
      alt: `Moving truck for relocation from ${from} to ${to}`,
      photographer: "Unsplash"
    }
  ];
}

export async function generateUnsplashImagesForRoute(
  from: string,
  to: string
): Promise<RouteImage[]> {
  // ✅ Använd Unsplash Access Key från miljövariabler
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  
  if (!accessKey) {
    console.warn("⚠️ Unsplash access key missing, using fallback images");
    return getFallbackImages(from, to);
  }

  const query = `moving truck relocation transport ${from} ${to}`;
  
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=2&client_id=${accessKey}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data: UnsplashPhoto[] = await response.json();
    
    return data.map((photo: UnsplashPhoto) => ({
      url: photo.urls.regular,
      alt: `Moving from ${from} to ${to} - ${photo.alt_description || 'professional moving services'}`,
      photographer: photo.user?.name,
    }));
  } catch (error) {
    console.error('Unsplash API error:', error);
    return getFallbackImages(from, to);
  }
}