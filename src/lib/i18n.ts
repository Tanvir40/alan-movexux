// src/lib/i18n.ts

export const detectLanguage = (acceptLanguage?: string) => {
  return acceptLanguage?.split(",")[0] || "en";
};
