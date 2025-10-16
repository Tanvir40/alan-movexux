// src/lib/helpers.ts

export const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-");
};

export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};
