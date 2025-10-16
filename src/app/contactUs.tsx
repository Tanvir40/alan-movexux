// src/pages/contactUs.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUsForm from "@/components/contactUsForm";
import React from 'react';


export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-top"
        style={{ backgroundImage: 'url(/images/contactus.jpg)' }}
      >
        <Header />
        <div className="container mx-auto pt-20 pb-12 flex justify-center h-full text-white">
          <div className="md:w-4/5 text-center flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl leading-tight font-bold tracking-wide">
              Get in Touch with movexos – Your Global Moving Partner
            </h1>
            <p>
              Have questions, need a quote, or want to discuss your upcoming move? Our team is here to provide fast, friendly support and help make your international move smooth and stress-free.
            </p>
          </div>
        </div>
       </section>
       {/* Contact Us Section*/}
       <section>
        <div className="container mx-auto py-12">
            <div className="flex flex-wrap">
                {/* Info */}
                <div className="block w-full md:w-1/2 p-4">
                    <ul className="grid gap-6">
                        <li>
                            <span className="font-bold">FAQ</span>
                            <p className="mt-2.5 text-[var(--gray)]">Have a quick question?<br />Check our FAQs for a quick answer</p>
                        </li>
                        <li>
                            <span className="font-bold">Office</span>
                            <p className="mt-2.5 text-[var(--gray)]">57 Main Street Dundrum,<br />Dublin 14, Ireland</p>
                        </li>
                        <li>
                            <span className="font-bold">Email us</span>
                            <p className="mt-2.5 text-[var(--gray)]">info@movexos.com<br />support@movexos.com</p>
                        </li>
                        <li>
                            <span className="font-bold">Call us</span>
                            <p className="mt-2.5 text-[var(--gray)]">+46 73 557 71 79<br />+46 79 202 66 21</p>
                        </li>
                    </ul>
                </div>
                {/* Form */}
            <div className="w-full md:w-1/2">
              <ContactUsForm />
            </div>
        </div>
        </div>
       </section>
      {/* Footer */}
      <Footer />
          </>
        );
      }