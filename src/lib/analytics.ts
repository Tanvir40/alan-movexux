// src/lib/analytics.ts

export const trackEvent = (eventName: string, data?: unknown) => {
  console.log("Event:", eventName, data);
};