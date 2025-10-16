// src/components/SEO.tsx
"use client";
import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: { url: string; width?: number; height?: number }[];
  };
  jsonLD?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, openGraph, jsonLD }) => {
  return (
    <Head>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title || title} />
          <meta property="og:description" content={openGraph.description || description} />
          {openGraph.images?.map((img, i) => (
            <meta key={i} property="og:image" content={img.url} />
          ))}
        </>
      )}

      {/* JSON-LD */}
      {jsonLD && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLD)}
        </script>
      )}
    </Head>
  );
};

export default SEO;