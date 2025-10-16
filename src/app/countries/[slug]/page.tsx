// src/app/countries/[slug]/page.tsx
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <h1>Country: {slug}</h1>
      <p>Placeholder content for country page.</p>
    </div>
  );
}