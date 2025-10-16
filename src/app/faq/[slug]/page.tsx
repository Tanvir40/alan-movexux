// src/app/faq/[slug]/page.tsx
import React from "react";
export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function FAQPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <h1>FAQ: {slug}</h1>
      <p>Placeholder content for FAQ {slug}</p>
    </div>
  );
}
