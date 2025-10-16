// src/app/page.tsx
"use client";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Form from "@/components/Form";
import ClientFeedback from "@/components/ClientFeedback";
import Image from "next/image";
import CountryCarousel from "@/components/CountryCarousel";
import { useRef } from "react";
import Footer from "@/components/Footer";
import React from 'react';
import LatestBlog from "@/components/LatestBlog";

export default function Home() {
  const carouselRef = useRef<{ prevSlide: () => void; nextSlide: () => void }>(null);
  return (
    <>
      {/* Banner Section */}
      <section
        className="relative bg-cover bg-top mvx-form mvx-form-m"
        style={{ backgroundImage: 'url(/banner/movexos-banner.jpg)' }}
      >
        <Header />
        <div className="container mx-auto py-20 flex flex-col justify-center h-full text-white">
          <div className="md:w-4/5 text-left flex flex-col gap-6">
            <h1 className="tracking-wide">
              Your Trusted Partner in International Transport
            </h1>
            <p className="text-lg md:text-xl text-body">
              movexos delivers reliable and secure transport solutions across the world. 
              From personal relocations to complex business logistics, we move what matters – 
              with precision, care, and trust.
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

      {/* How It Works */}
      <section>
        <div className="container mx-auto py-12">
          <div className="md:w-8/12">
            <h2>
              How Our Moving Service Works – Simple, Secure, and Tailored to You
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-14 items-start md:justify-between pt-16">
            <div className="w-full md:w-6/12 mt-2.5">
              <p className="text-base mb-2">
                At movexos, we make it simple and stress-free to book an international or local move. Begin by completing our quick form with details about what you’re moving, your starting point, your destination, and your preferred timeline. This gives us all the essential information we need to understand your situation and plan your move effectively.
              </p>
              <p className="text-base font-semibold mt-8">
                Based on the information you provide, we design a tailored moving solution that fits your exact needs. From choosing the right vehicle size and professional moving team to planning the safest route and ideal timing, we make sure every step is handled smoothly, securely, and with your comfort in mind. Our goal is to remove the stress from moving so you can focus on settling into your new home or office with ease.
              </p>

              <div className="mt-10 flex flex-col md:flex-row gap-3">
                <Button text="See our full process" variant="primary" />
              </div>
            </div>
           <div className="w-full md:w-6/12 mt-14 md:mt-0 flex items-center">
                <ul className="list-none m-0 space-y-6">
                  <li className="flex items-center gap-5">
                     <div className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                   <Image src="/svg/file-send.svg" alt="" width={"45"} height={"45"} className="!h-[45px]" />
                   </div>
                   <div>
                   <p className="text-lg font-semibold mb-1">Quick and Easy Form</p>
                    <p className="text-gray-700">
                     Fill out our form in a minute. Share what you’re moving and your location so we can create a personalized plan.
                    </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-5">
                     <div className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                   <Image src="/svg/locations.svg" alt="" width={"45"} height={"45"} className="!h-[45px]" />
                   </div>
                   <div>
                   <p className="text-lg font-semibold mb-1">Share Your Move Details</p>
                    <p className="text-gray-700">
                      Tell us what you&apos;re moving, and your current and destination locations, so we can tailor the best moving plan for you.
                    </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-5">
                     <div className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                   <Image src="/svg/pack.svg" alt="" width={"45"} height={"45"} className="!h-[45px]" />
                   </div>
                   <div>
                  <p className="text-lg font-semibold mb-1">Personalized Quote</p>
                  <p className="text-gray-700">
                    Receive a tailored quote directly from our team based on the details of your move.
                  </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-5">
                     <div className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-full">
                   <Image src="/svg/secus.svg" alt="" width={"45"} height={"45"} className="!h-[45px]" />
                   </div>
                   <div>
                   <p className="text-lg font-semibold mb-1">Relax and Leave It to Us</p>
                    <p className="text-gray-700">
                      Sit back and relax while our team handles every aspect of your move smoothly and securely.
                    </p>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        </section>

         {/* Slider */}
        <section className="bg-gray-50">
        <div className="container mx-auto py-12">
          {/* Info */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Column 1 */}
            <div className="md:w-6/12">
              <h3>
                Seamless moving across borders, wherever life takes you.
              </h3>
            </div>
            
            {/* Column 2 */}
            <div className="md:w-6/12 flex flex-col gap-4">
              <p className="text-gray-700 text-lg">
               Discover how movexos helps families and businesses relocate internationally with speed, safety, and peace of mind.
              </p>
              
              {/* Slider Buttons */}
              <div className="flex mt-4 justify-between">
                <Button text="View All Articles" variant="secondary" />
              <div>
      <div className="flex gap-4 mb-4">
        <button onClick={() => carouselRef.current?.prevSlide()}>
           <svg className="hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13">
                  <path d="M19.0909 7.27799H3.1091L7.0091 11.178C7.09431 11.2625 7.16194 11.363 7.20809 11.4738C7.25425 11.5846 7.27801 11.7034 7.27801 11.8234C7.27801 11.9435 7.25425 12.0623 7.20809 12.1731C7.16194 12.2838 7.09431 12.3844 7.0091 12.4689C6.92459 12.5541 6.82404 12.6217 6.71326 12.6679C6.60248 12.714 6.48366 12.7378 6.36365 12.7378C6.24364 12.7378 6.12481 12.714 6.01403 12.6679C5.90325 12.6217 5.80271 12.5541 5.71819 12.4689L0.263652 7.01436C0.179396 6.92941 0.112736 6.82867 0.0674953 6.71791C0.0222548 6.60715 -0.000676581 6.48855 1.51396e-05 6.3689C0.000514457 6.24862 0.0248782 6.12964 0.0716932 6.01884C0.118508 5.90805 0.186843 5.80764 0.272742 5.72345C0.363783 5.63518 0.472284 5.56693 0.591272 5.5231C0.71026 5.47926 0.837103 5.4608 0.96365 5.4689H19.0909C19.332 5.4689 19.5632 5.56468 19.7337 5.73517C19.9042 5.90566 20 6.13689 20 6.37799C20 6.6191 19.9042 6.85033 19.7337 7.02082C19.5632 7.1913 19.332 7.28708 19.0909 7.28708V7.27799ZM7.0091 0.268907C7.09431 0.353419 7.16194 0.453965 7.20809 0.564746C7.25425 0.675527 7.27801 0.794351 7.27801 0.914361C7.27801 1.03437 7.25425 1.1532 7.20809 1.26398C7.16194 1.37476 7.09431 1.4753 7.0091 1.55982L4.28183 4.28709C4.19732 4.37229 4.09677 4.43992 3.98599 4.48608C3.87521 4.53223 3.75639 4.55599 3.63638 4.55599C3.51637 4.55599 3.39754 4.53223 3.28676 4.48608C3.17598 4.43992 3.07543 4.37229 2.99092 4.28709C2.90572 4.20257 2.83808 4.10203 2.79193 3.99125C2.74578 3.88047 2.72201 3.76164 2.72201 3.64163C2.72201 3.52162 2.74578 3.4028 2.79193 3.29202C2.83808 3.18124 2.90572 3.08069 2.99092 2.99618L5.71819 0.268907C5.80271 0.1837 5.90325 0.116069 6.01403 0.0699155C6.12481 0.0237622 6.24364 0 6.36365 0C6.48366 0 6.60248 0.0237622 6.71326 0.0699155C6.82404 0.116069 6.92459 0.1837 7.0091 0.268907Z" fill="currentColor"/>
                  </svg>
        </button>
        <button onClick={() => carouselRef.current?.nextSlide()}>
           <svg className="hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13">
                  <path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"/>
                  </svg>
        </button>
      </div>

    </div>
              </div>
            </div>
          </div>

         {/* Carousel */} 
         <CountryCarousel ref={carouselRef} />

        {/* Resource */}
        <div className="py-12">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="sm:col-span-6">
                   <p className="text-lg font-medium text-[var(--primary)]">RESOURCE</p>
                  <h4 className="!text-3xl mt-2">
                    Global Moving Intelligence – Insights, Tools & Resources
                    </h4>
                  <p className="mt-8">Our rigorous security and compliance
                    Explore a curated collection of expert resources designed for global relocations. From in-depth guides on customs and compliance, to practical checklists and AI-driven planning tools
                    </p>
                    <p className="mt-8">everything is crafted to help you plan and execute a smooth, efficient, and cost-effective move across borders.</p>
                  <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <a href="#"
                        className="inline-flex items-center text-base font-medium text-primary hover:text-[var(--primary-800)]">
                        Explore All Resources
                        <svg className="w-4 h-4 ml-1 hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13"><path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"></path></svg>
                      </a>
                    </div>
                    <div>
                      <a href="#"
                        className="inline-flex items-center text-base font-medium text-primary hover:text-[var(--primary-800)]">
                        View All Articles
                      <svg className="w-4 h-4 ml-1 hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13"><path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"></path></svg>

                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div>
                              <Image src="/svg/customs-documentation.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                   <div>
                              <Image src="/svg/checklist.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                    <div>
                              <Image src="/svg/smart-house.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                    <div>
                              <Image src="/svg/cost-estimator.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                   <div>
                              <Image src="/svg/packing.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                    <div>
                              <Image src="/svg/worldwide-moving.svg" alt="" width={"55"} height={"55"} className="!h-[55px]" />
                        <p className="text-lg font-bold mt-3.5">Navigate Customs Easily</p>
                        <p className="mt-2.5">Clear insights on import/export regulations to ensure smooth border crossings without delays or surprises.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </section>
        {/* How we do */}
        <section>
          <div className="container py-12 mx-auto">
            <div className="space-y-24">
                <div className="relative">
                    <div className="flex flex-col md:flex-row md:gap-x-14 items-center md:justify-between">
                        <div className="w-full md:w-6/12">
                            <h5 className="!text-2xl font-bold">
                               Smarter Moving with AI & Automation
                            </h5>
                            <p className="mt-4">
                               movexos combines intelligent automation with real-time data to simplify your entire relocation process. From instant quotes to dynamic planning, our platform ensures accuracy, speed, and peace of mind.
                            </p>
                                <ul className="mt-6 grid gap-2">
                                  <li className="flex gap-2 items-center"><Image src="/svg/activity-2.svg" alt="" width={"20"} height={"20"} className="!h-[20px]" />AI-generated price estimates within seconds</li>
                                  <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Real-time tracking and updates throughout your move</li>
                                  <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Dynamic scheduling that adapts to your moving needs</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-6/12 mt-14 lg:mt-0">
                            <div className="max-w-full pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                              <Image src="/png/ai-automation.png" alt="" width={"500"} height={"500"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="flex flex-col md:flex-row md:gap-x-14 items-center md:justify-between">
                        <div className="order-2 md:order-none w-full md:w-6/12 mt-14 lg:mt-0">
                            <div className="max-w-full pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                              <Image src="/png/ai-automation.png" alt="" width={"500"} height={"500"} />
                            </div>
                        </div>
                        <div className="order-1 md:order-none w-full md:w-6/12">
                            <h5 className="!text-2xl font-bold">
                              Transparent Pricing & Instant Quotes
                            </h5>
                            <p className="mt-4">
                              With movexos, you always know what you&apos;re paying for. Our AI-powered system delivers instant, personalized quotes — no hidden fees, just clear and transparent pricing from the very start.
                            </p>
                            <ul className="mt-6 grid gap-2">
                               <li className="flex gap-2 items-center"><Image src="/svg/activity-2.svg" alt="" width={"20"} height={"20"} className="!h-[20px]" />AI-powered quotes delivered in seconds</li>
                               <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Upfront pricing with zero hidden fees</li>
                               <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Personalized cost breakdown tailored to your move</li>
                            </ul>
                        </div>
                    </div>
                </div>
               <div className="relative">
                    <div className="flex flex-col md:flex-row md:gap-x-14 items-center md:justify-between">
                        <div className="w-full md:w-6/12">
                            <h5 className="!text-2xl font-bold">
                              Global Reach, Local Expertise
                            </h5>
                            <p className="mt-4">
                              Whether you&apos;re moving across town or across borders, movexos connects you with experienced movers worldwide. Our trusted network combines international scale with local knowledge — ensuring your move is handled with care, anywhere in the world.
                            </p>
                            <ul className="mt-6 grid gap-2">
                               <li className="flex gap-2 items-center"><Image src="/svg/activity-2.svg" alt="" width={"20"} height={"20"} className="!h-[20px]" />Trusted local movers in over 30 countries</li>
                               <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Seamless coordination for cross-border moves</li>
                               <li className="flex gap-2 items-center"><Image src="/svg/activity.svg" alt="" width={"20"} height={"20"} />Global standards combined with local expertise</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-6/12 mt-14 lg:mt-0">
                            <div className="max-w-full pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                              <Image src="/png/ai-automation.png" alt="" width={"500"} height={"500"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        {/* State Section */}
        <ClientFeedback />
         {/* LatestBlog */}
        <LatestBlog />
        {/* Footer */}
        <Footer />
    </>
  );
}