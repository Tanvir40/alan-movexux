// src/app/cities/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";

// Remove the unused interface or update it to match the async signature
// interface CityPageProps {
//   params: Promise<{ slug: string }>;
// }

export default async function CityPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params promise
  const { slug } = await params;

  if (!slug) return notFound();

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Flytt till {slug}</h1>
      <p className="text-gray-700 mb-6">
        Placeholder content för staden {slug}.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Våra tjänster</h2>
        <ul className="list-disc pl-5">
          <li>Packning</li>
          <li>Transport</li>
          <li>Montering</li>
          <li>Förvaring</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">Vanliga frågor</h2>
        <div className="mb-2">
          <p className="font-medium">Hur bokar jag en flytt?</p>
          <p className="text-gray-600">
            Du kan boka via hemsidan eller kontakta oss direkt.
          </p>
        </div>
      </section>
    </main>
  );
}