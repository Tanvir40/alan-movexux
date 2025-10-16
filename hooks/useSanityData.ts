// hooks/useSanityData.ts
'use client';

import useSWR from 'swr';
import { sanityClient } from "@/lib/sanityClient";

interface UseSanityDataParams {
  [key: string]: string | number | boolean | null | undefined;
}

// ✅ SWR fetcher function
const sanityFetcher = async <T>({ query, params }: { query: string; params?: UseSanityDataParams }): Promise<T> => {
  return await sanityClient.fetch<T>(query, params || {});
};

export const useSanityData = <T = unknown>(
  query: string, 
  params: UseSanityDataParams = {}
) => {
  // ✅ Använd SWR för automatisk caching, revalidation, error handling
  const { data, error, isLoading, mutate } = useSWR<T>(
    { query, params }, 
    sanityFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data: data || null,
    loading: isLoading,
    error: error?.message || null,
    refetch: () => mutate(),
  };
};