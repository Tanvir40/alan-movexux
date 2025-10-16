// src/types/analytics.ts

export interface AnalyticsEvent {
  eventName: string;
  category?: string;
  label?: string;
  value?: number;
  metadata?: Record<string, string | number | boolean>;
}
