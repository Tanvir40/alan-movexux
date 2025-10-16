// app/movings/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import { generateMoveMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { getOrCreateMovePage, MovePage } from "@/lib/sanityClient";
import { generateAIContent } from "@/lib/aiClient";
import type { AIContentParams, AIContentResponse } from "@/types/aiResponses";
import { generateUnsplashImagesForRoute } from "@/lib/unsplashClient";
import { generateJsonLd as jsonLdSchema } from "@/lib/jsonLd";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
export const dynamic = 'force-dynamic';

// ---------------------------
// Page Props
// ---------------------------
interface PageProps {
  params: Promise<{ slug: string }>;
}

// ---------------------------
// Generate Metadata for SEO
// ---------------------------
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [from, ...toParts] = slug.split("-");
  const to = toParts.join("-");

  return await generateMoveMetadata(from, to);
}

// ---------------------------
// Dynamic Moving Page Component
// ---------------------------
export default async function MovingPage({ params }: PageProps) {
  const { slug } = await params;
  const [from, ...toParts] = slug.split("-");
  const to = toParts.join("-");

  // 🚨 TA BORT: useSanityData hook - kan inte användas i Server Components!
  // Använd getOrCreateMovePage direkt istället:

  // Hämta eller skapa sidan dynamiskt från Sanity
  const pageData: MovePage | null = await getOrCreateMovePage(from, to);
  if (!pageData) return notFound();

  // ✅ Hämta bilder från Unsplash
  const images = await generateUnsplashImagesForRoute(from, to);

  // Generera JSON-LD
  const structuredData = jsonLdSchema({ 
    route: slug, 
    from, 
    to, 
    pageData
  });

  // ---------------------------
  // Generate AI Content if Missing
  // ---------------------------
  if (!pageData.content || pageData.content.length === 0) {
    const aiParams: AIContentParams = {
      from,
      to,
      query: `moving from ${from} to ${to}`,
    };

    try {
      const aiContent: AIContentResponse = await generateAIContent(aiParams);
      if (aiContent?.content) {
        pageData.content = Array.isArray(aiContent.content)
          ? aiContent.content
          : [aiContent.content];
      }
    } catch (error) {
      console.error("AI content generation failed:", error);
    }
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Banner Section */}
      <section
        className="relative bg-cover bg-top mvx-form mvx-form-m"
        style={{ backgroundImage: 'url(/banner/movexos-banner.jpg)' }}
      >
        <Header />
        <div className="container mx-auto py-20 flex flex-col justify-center h-full text-white">
          <div className="md:w-3/5 text-left flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              {pageData.content[0] || `Moving from ${from} to ${to}`}
            </h1>
            <p className="text-lg md:text-xl text-body">
              {pageData.content[1] || `Professional moving services from ${from} to ${to}`}
            </p>
            <Button text="Plan Your Transport" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[var(--primary-800)]">
        <div className="container mx-auto">
          <Form />
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Content Section */}
      <section>
        <div className="mt-6 container mx-auto">
          <div className="mb-10">
            <h2>{pageData.content[2]}</h2>
            <p className="mt-5">{pageData.content[3]}</p>
            <hr className="relative w-full h-[1px] bg-[var(--gray-200)] border-0 inline-block" />
          </div>
          <div className="flex flex-col md:flex-row gap-14">
            <div className="md:w-9/12 w-full">
              <h3>{pageData.content[4]}</h3>
              <p className="mt-5">{pageData.content[5]}</p>
                <p className="text-xl font-extrabold text-[var(--primary-500)] mt-6">{pageData.content[6]}</p>
                 <p className="mt-5">{pageData.content[7]}</p>
                 <p className="mt-5">{pageData.content[8]}</p>
                  {images.length > 0 ? (
                    images.map((img, index) => (
                      <div key={index} className="relative h-64 my-8">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          className="rounded-lg shadow-md object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Images coming soon...</p>
                  )}
              
              <h4 className="pt-5">{pageData.content[9]}</h4>
                 <p className="mt-5">{pageData.content[10]}</p>
                 <p className="mt-5 pb-4">{pageData.content[11]}</p>
                 <h5 className="text-xl font-extrabold">{pageData.content[12]}</h5>
                 <ul>
                  <li className="mt-4">{pageData.content[13]}</li>
                  <li className="mt-2">{pageData.content[14]}</li>
                  <li className="mt-2">{pageData.content[15]}</li>
                  <li className="mt-2">{pageData.content[16]}</li>
                 </ul>
                  <p className="mt-5">{pageData.content[17]}</p>
                  <p className="mt-5">{pageData.content[18]}</p>
                  <p className="mt-5">{pageData.content[19]}</p>
                  <p className="py-5">{pageData.content[20]}</p>
                  <p className="py-5">{pageData.content[21]}</p>
                  <p className="text-xl font-extrabold text-[var(--primary-500)] mt-6">{pageData.content[22]}</p>
                  <p className="py-5">{pageData.content[23]}</p>
                  <p className="py-5">{pageData.content[24]}</p>
                  <p className="py-5">{pageData.content[25]}</p>
                  <p className="py-5">{pageData.content[26]}</p>
                  <p className="py-5">{pageData.content[27]}</p>
                  <p className="py-5">{pageData.content[28]}</p>
                  <p className="py-5">{pageData.content[29]}</p>
                  <p className="text-xl font-extrabold text-[var(--primary-500)] mt-6">{pageData.content[30]}</p>
                  <p className="py-5">{pageData.content[31]}</p>
                  <p className="py-5">{pageData.content[32]}</p>
                  <p className="py-5">{pageData.content[33]}</p>
                  <p className="py-5">{pageData.content[34]}</p>
                  <p className="py-5">{pageData.content[35]}</p>
                  <p className="py-5">{pageData.content[36]}</p>
                  <p className="text-xl font-extrabold text-[var(--primary-500)] mt-6">{pageData.content[37]}</p>
                  <p className="py-5">{pageData.content[38]}</p>
                  <p className="py-5">{pageData.content[39]}</p>
                  <p className="py-5">{pageData.content[40]}</p>
                  <p className="py-5">{pageData.content[41]}</p>
                  <p className="py-5">{pageData.content[42]}</p>
                  <p className="py-5">{pageData.content[43]}</p>
                  <p className="py-5">{pageData.content[44]}</p>
                  <p className="py-5">{pageData.content[45]}</p>
                  <p className="py-5">{pageData.content[46]}</p>
                  <p className="py-5">{pageData.content[47]}</p>
                  <p className="py-5">{pageData.content[48]}</p>
                  <p className="py-5">{pageData.content[49]}</p>
                  <p className="py-5">{pageData.content[50]}</p>
                  <p className="py-5">{pageData.content[51]}</p>
                  <p className="py-5">{pageData.content[52]}</p>
                  <p className="py-5">{pageData.content[53]}</p>
                  <p className="py-5">{pageData.content[54]}</p>
                  <p className="py-5">{pageData.content[55]}</p>
                  <p className="py-5">{pageData.content[56]}</p>
                  <p className="py-5">{pageData.content[57]}</p>
                  <p className="py-5">{pageData.content[58]}</p>
                  <p className="py-5">{pageData.content[59]}</p>
                  <p className="py-5">{pageData.content[60]}</p>

            </div>

            {/* Sidebar List */}
            <div className="md:w-3/12 w-full">
              <div className="pb-2">
                <p className="text-xl font-semibold text-[var(--primary-700)] mb-2">Related moving routes</p>
              </div>
              <ul className="space-y-2">
                {[
                  { from: "Germany", to: "Spain" },
                  { from: "France", to: "Sweden" },
                  { from: "Italy", to: "Germany" },
                  { from: "Norway", to: "Denmark" },
                  { from: "Netherlands", to: "Belgium" },
                  { from: "Sweden", to: "UK" },
                  { from: "Poland", to: "Austria" },
                  { from: "Ireland", to: "Germany" },
                  { from: "Finland", to: "Spain" },
                  { from: "Portugal", to: "France" },
                ].map((route, index) => (
                  <li key={index} className="text-[var(--primary-800)] hover:text-[var(--primary-500)] flex items-center gap-1.5">
                    <a href={`/movings/${route.from.toLowerCase()}-${route.to.toLowerCase()}`}>
                      Moving {route.from} to {route.to}
                    </a>
                    <svg className="hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={"16"} height={"16"} viewBox="0 0 20 13">
                      <path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"/>
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ISR: Revalidate every 7 days
export const revalidate = 604800;