// src/lib/cache.ts

export const setCacheHeaders = () => {
  return {
    "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
  };
};
