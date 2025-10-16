// src/lib/utils.ts
export function capitalize(word: string): string {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatRouteText(route: string): string {
  const parts = route.split("-");
  if (parts.length !== 2) return route;
  return `${capitalize(parts[0])} till ${capitalize(parts[1])}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPriceEUR(amount: number): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function generateTitle(from: string, to: string): string {
  return `Flytt från ${capitalize(from)} till ${capitalize(to)} | movexos`;
}

export function generateDescription(from: string, to: string): string {
  return `Behöver du flytt från ${capitalize(from)} till ${capitalize(
    to
  )}? movexos erbjuder snabb, säker och prisvärd flyttservice mellan ${capitalize(
    from
  )} och ${capitalize(to)}.`;
}

export function getRandomItem<T>(array: T[]): T | undefined {
  if (!array || array.length === 0) return undefined;
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const shortened = text.slice(0, maxLength);
  return shortened.slice(0, shortened.lastIndexOf(" ")) + "...";
}

export function formatRoute(from: string, to: string): string {
  return `${from.toLowerCase()}-${to.toLowerCase()}`;
}

const utils = {
  capitalize,
  formatRouteText,
  slugify,
  getToday,
  formatDate,
  formatPriceEUR,
  generateTitle,
  generateDescription,
  getRandomItem,
  truncateText,
  formatRoute,
};

export default utils;