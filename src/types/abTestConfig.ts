// src/types/abTestConfig.ts

export interface ABTestVariant {
  id: string;
  name: string;
  weight?: number; // valfri vikt för variantval
}

export interface ABTestConfig {
  testName: string;
  variants: ABTestVariant[];
  startDate?: string;
  endDate?: string;
}
