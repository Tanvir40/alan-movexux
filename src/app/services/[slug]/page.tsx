import Header from "@/components/Header";
import Button from "@/components/Button";
import Image from "next/image";
import Footer from "@/components/Footer";
import React from 'react';
import Form from "@/components/Form";
import StateSection from "@/components/StateSection";
import ClientFeedback from "@/components/ClientFeedback";
import FAQ from "@/components/FAQ";
export const dynamic = 'force-dynamic';

interface Highlight {
  title: string;
  desc: string;
  image: string;
  imagebg?: string;
}

interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  banner: string;
  highlights: Highlight[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Gemensamma highlights (samma för alla services)
const commonHighlights = [
  {
    image: "/svg/book-online.svg",
    title: "Book your move online",
    desc: "Fill out our quick form and get an instant quote tailored to your move.",
    imagebg: "/svg/decor-circle.svg",
  },
  {
    image: "/svg/pick-up.svg",
    title: "We pick up your items",
    desc: "Our professional team will carefully pack and load everything.",
    imagebg: "/svg/decor-world.svg",
  },
  {
    image: "/svg/transported.svg",
    title: "Transport to new home",
    desc: "Your belongings are securely transported to your destination.",
    imagebg: "/svg/decor-element.svg",
  },
  {
    image: "/svg/enjoy.svg",
    title: "Settle in comfortably",
    desc: "We unload and unpack so you can enjoy your new home immediately.",
    imagebg: "/svg/decor-ford.svg",
  },
];

// Services-data
const servicesData: Service[] = [
  {
    slug: "international-moving",
    title: "International Moving",
    subtitle: "Secure & Stress-Free Relocation Worldwide",
    description:
      "Moving abroad doesn&apos;t have to be complicated. At movexos, we specialize in international moving services designed to make your relocation smooth, safe, and affordable. From packing and customs clearance to door-to-door delivery, our team ensures your belongings arrive on time and in perfect condition – no matter where in the world you&apos;re headed.",
    banner: "/images/banner-international.jpg",
    highlights: commonHighlights,
  },
  {
  slug: "domestic-moving",
  title: "Domestic Move",
  subtitle: "Smooth & Efficient Moves in Your City",
  description:
    "Whether moving across town or just a few blocks away, our local moving services are fast, safe, and stress-free. Our experienced movers handle everything from packing to transportation so you can relax and enjoy your new home.",
  banner: "/images/domestic-moving.jpg",
  highlights: commonHighlights,
 },
 {
  slug: "office-moving",
  title: "Office / Corporate Move",
  subtitle: "Professional Office Relocation Services",
  description:
    "Relocate your office without downtime. We manage the packing, transport, and setup of office furniture and equipment, ensuring your business is up and running as quickly as possible.",
  banner: "/images/office-moving.jpg",
  highlights: commonHighlights,
},
{
  slug: "furniture-heavy-goods-moving",
  title: "Furniture & Heavy Goods Move",
  subtitle: "Safe Transport for Large and Heavy Items",
  description:
    "We specialize in moving bulky furniture and heavy goods with care. Our professional team ensures all items are packed, lifted, and transported safely to your new location.",
  banner: "/images/furniture-heavy-goods-moving.jpg",
  highlights: commonHighlights,
},
{
  slug: "man-with-van",
  title: "Man with Van / Small Moves",
  subtitle: "Quick & Flexible Small-Scale Relocations",
  description:
    "Perfect for small moves, single-item transports, or urgent relocations. Our Man with Van service is fast, reliable, and tailored to your needs.",
  banner: "/images/man-with-van.jpg",
  highlights: commonHighlights,
},
{
  slug: "storage-warehousing",
  title: "Storage & Warehousing",
  subtitle: "Secure Storage Solutions for Your Belongings",
  description:
    "Keep your items safe with our storage and warehousing services. Whether short-term or long-term, we provide secure, climate-controlled storage tailored to your needs.",
  banner: "/images/storage-warehousing.jpg",
  highlights: commonHighlights,
},
{
  slug: "packing-assembly",
  title: "Packing & Assembly",
  subtitle: "Professional Packing and Furniture Assembly",
  description:
    "Our expert team handles packing, unpacking, and furniture assembly to make your move seamless and stress-free. We ensure everything is carefully packed and ready for transport.",
  banner: "/images/packing-assembly.jpg",
  highlights: commonHighlights,
},
{
  slug: "sea-moving",
  title: "Sea Move (Container Shipping)",
  subtitle: "Reliable and Affordable Sea Freight Solutions",
  description:
    "We provide secure container shipping for international moves by sea. Our team manages every step, from packing and documentation to loading and delivery, ensuring your belongings arrive safely.",
  banner: "/images/sea-moving.jpg",
  highlights: commonHighlights,
},
];

// Genererar statiska rutter för App Router
export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: service.slug,
  }));
}

// Page-komponent
export default async function ServicePage({ params }: PageProps) {
  // Await the params promise
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {/* Banner Section */}
      <section
          className="relative bg-cover bg-top mvx-form mvx-form-m"
          style={{ backgroundImage: `url(${service.banner})` }}
        >
        <Header />
        <div className="container mx-auto py-20 flex flex-col justify-center h-full text-white">
          <div className="w-full lg:w-[65%] text-left flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl leading-tight font-bold tracking-wide">
              {service.title}
            </h1>
             <p className="text-lg md:text-2xl text-[var(--primary-500)]">
              {service.subtitle}
             </p>
            <p className="text-base md:text-base text-body">
              {service.description}
            </p>
            <Button text="Plan Your Transport" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Ny Section med Form */}
      <section>
        <div className="container mx-auto">
          <Form />
        </div>
      </section>

        {/* NHow it works */}
      <section>
       <div className="container mx-auto pt-0 md:pt-4 mvx-form-b pb-12">
          <div className="pb-12 grid gap-2">
            <h2>How it works</h2>
            <p className="text-[var(--gray-900)]">Moving abroad or to a new city can feel overwhelming, but it doesn&apos;t have to be. With movexos, you get a clear, step-by-step process designed to take away the stress and uncertainty. From the moment you book your move, our experienced team takes care of everything – packing, transport, and delivery – so you can focus on starting your new chapter with peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {service.highlights.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden"
          >
            
            {/* Highlight-imagebg */}
            {item.imagebg && (
              <div className="absolute -top-10 -right-10 w-25 h-25">
                <Image
                  src={item.imagebg}
                  alt={item.title}
                  fill
                  className="object-contain opacity-20"
                />
              </div>
            )}
            {/* Highlight-image */}
              <div className="mb-5 flex items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain !w-25 !h-25"
                />
              </div>
            <p className="text-xl font-semibold mb-2 relative z-10">{item.title}</p>
            <p className="text-[var(--gray-900)] relative z-10">{item.desc}</p>
          </div>
        ))}
        </div>
        </div>
      </section>
        {/* State Section */}
        <StateSection />

        {/* Why us */}
      <section>
          <div className="container py-12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Bild */}
              <div>
                <Image
                  src="/images/team-1.svg"
                  alt="movexos professional moving team"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <p className="text-[var(--primary-500)] font-semibold mb-2 uppercase tracking-wide">
                  Your Next Move, Our Priority
                </p>
                <h3 className="text-3xl font-bold !mb-4">
                  Every step is planned, every detail handled, every time.
                </h3>
                <p className="text-[var(--gray-900)] mb-6">
                  At movexos, your move is our top priority. We make the process seamless, affordable, and stress-free — no matter where life takes you.
                </p>
                <p className="text-[var(--gray-900)] mb-6">
                  From careful packing and customs handling to on-time delivery, our dedicated team manages every detail with precision and care. We treat your belongings as if they were our own, ensuring your peace of mind throughout the journey.
                </p>
                <ul className="grid gap-3 text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 353 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M343.701 39.374C347.701 43.3712 349.95 48.7931 349.955 54.448C349.959 60.1029 347.718 65.5282 343.724 69.5315L148.223 265.327C143.984 269.571 138.898 272.873 133.297 275.018C127.696 277.163 121.705 278.104 115.716 277.777C109.727 277.451 103.873 275.866 98.5383 273.125C93.2031 270.384 88.5059 266.549 84.753 261.87L16.6442 176.88C14.8346 174.7 13.4772 172.182 12.6511 169.473C11.8251 166.763 11.5469 163.916 11.8329 161.098C12.1189 158.28 12.9633 155.547 14.3168 153.058C15.6704 150.57 17.506 148.376 19.7165 146.604C21.927 144.833 24.4681 143.519 27.1917 142.741C29.9153 141.962 32.7667 141.733 35.5795 142.068C38.3924 142.403 41.1104 143.295 43.5749 144.691C46.0395 146.088 48.2012 147.961 49.9339 150.202L118.043 235.192L313.525 39.3733C317.522 35.3733 322.944 33.124 328.599 33.1197C334.254 33.1154 339.679 35.3565 343.682 39.3505L343.701 39.374Z" fill="#248BFF"/>
                  </svg>
                    Experienced and reliable movers
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 353 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M343.701 39.374C347.701 43.3712 349.95 48.7931 349.955 54.448C349.959 60.1029 347.718 65.5282 343.724 69.5315L148.223 265.327C143.984 269.571 138.898 272.873 133.297 275.018C127.696 277.163 121.705 278.104 115.716 277.777C109.727 277.451 103.873 275.866 98.5383 273.125C93.2031 270.384 88.5059 266.549 84.753 261.87L16.6442 176.88C14.8346 174.7 13.4772 172.182 12.6511 169.473C11.8251 166.763 11.5469 163.916 11.8329 161.098C12.1189 158.28 12.9633 155.547 14.3168 153.058C15.6704 150.57 17.506 148.376 19.7165 146.604C21.927 144.833 24.4681 143.519 27.1917 142.741C29.9153 141.962 32.7667 141.733 35.5795 142.068C38.3924 142.403 41.1104 143.295 43.5749 144.691C46.0395 146.088 48.2012 147.961 49.9339 150.202L118.043 235.192L313.525 39.3733C317.522 35.3733 322.944 33.124 328.599 33.1197C334.254 33.1154 339.679 35.3565 343.682 39.3505L343.701 39.374Z" fill="#248BFF"/>
                  </svg> 
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 353 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M343.701 39.374C347.701 43.3712 349.95 48.7931 349.955 54.448C349.959 60.1029 347.718 65.5282 343.724 69.5315L148.223 265.327C143.984 269.571 138.898 272.873 133.297 275.018C127.696 277.163 121.705 278.104 115.716 277.777C109.727 277.451 103.873 275.866 98.5383 273.125C93.2031 270.384 88.5059 266.549 84.753 261.87L16.6442 176.88C14.8346 174.7 13.4772 172.182 12.6511 169.473C11.8251 166.763 11.5469 163.916 11.8329 161.098C12.1189 158.28 12.9633 155.547 14.3168 153.058C15.6704 150.57 17.506 148.376 19.7165 146.604C21.927 144.833 24.4681 143.519 27.1917 142.741C29.9153 141.962 32.7667 141.733 35.5795 142.068C38.3924 142.403 41.1104 143.295 43.5749 144.691C46.0395 146.088 48.2012 147.961 49.9339 150.202L118.043 235.192L313.525 39.3733C317.522 35.3733 322.944 33.124 328.599 33.1197C334.254 33.1154 339.679 35.3565 343.682 39.3505L343.701 39.374Z" fill="#248BFF"/>
                  </svg>
                    Comprehensive insurance for your belongings
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 353 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M343.701 39.374C347.701 43.3712 349.95 48.7931 349.955 54.448C349.959 60.1029 347.718 65.5282 343.724 69.5315L148.223 265.327C143.984 269.571 138.898 272.873 133.297 275.018C127.696 277.163 121.705 278.104 115.716 277.777C109.727 277.451 103.873 275.866 98.5383 273.125C93.2031 270.384 88.5059 266.549 84.753 261.87L16.6442 176.88C14.8346 174.7 13.4772 172.182 12.6511 169.473C11.8251 166.763 11.5469 163.916 11.8329 161.098C12.1189 158.28 12.9633 155.547 14.3168 153.058C15.6704 150.57 17.506 148.376 19.7165 146.604C21.927 144.833 24.4681 143.519 27.1917 142.741C29.9153 141.962 32.7667 141.733 35.5795 142.068C38.3924 142.403 41.1104 143.295 43.5749 144.691C46.0395 146.088 48.2012 147.961 49.9339 150.202L118.043 235.192L313.525 39.3733C317.522 35.3733 322.944 33.124 328.599 33.1197C334.254 33.1154 339.679 35.3565 343.682 39.3505L343.701 39.374Z" fill="#248BFF"/>
                  </svg>
                    International network for global relocation
                  </li>
                </ul>
                <Button text="Get a Free Quote" variant="outline-dark">
                  <svg className="w-4 h-4 ml-1 transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13"><path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"></path></svg>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* State Section */}
        <ClientFeedback />
         {/* FAQ Section */}
        <FAQ />
        {/* Footer */}
        <Footer />
    </>
  );
}