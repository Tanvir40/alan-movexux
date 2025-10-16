// src/components/Footer.tsx
"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <section className="bg-[var(--primary-900)]">
        <div className="container py-10 mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 lg:flex-nowrap">
                <div className="lg:max-w-xl">
                    <p className="w-full text-white font-bold text-3xl text-center">
                        Get started with ASA Moving today
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                    <Link href="/contactUs">
                        <Button text="Contact Us" variant="secondary" />
                    </Link>
                    <Link href="/contactUs">
                    <Button text="Get a Free Quote" variant="primary" />
                    </Link>
                </div>
            </div>
            </div>
      </section>
      <footer className="bg-[var(--primary)]">
            <div className="container mx-auto max-w-screen-xl  pt-12 pb-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-white">
                <div>
                    <div className="flex justify-center sm:justify-start">
                        <Image src="/logo/movexos-logo-light.svg" alt="" width={"180"} height={"50"} />
                    </div>

                    <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                    movexos is a global platform for international and local moves. With smart technology, AI, and trusted moving partners, we make relocations simpler, safer, and more transparent — anywhere in the world.
                    </p>

                    <ul className="mt-6 flex justify-center gap-3.5 sm:justify-start md:gap-3.5">
                    <li>
                        <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="transition text-transparent"
                        >
                        <span className="sr-only">Facebook</span>
                            <svg width="35" height="35" x="0" y="0" viewBox="0 0 682.667 682.667"><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#ffffff" opacity="1" data-original="#ffffff"></path></clipPath></defs><g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0c0 137.243-111.257 248.5-248.5 248.5S-497 137.243-497 0s111.257-248.5 248.5-248.5S0-137.243 0 0Z" transform="translate(504.5 256)" fill="none" stroke="#ffffff" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000"></path><path d="M0 0v32.064c0 13.282 10.767 24.049 24.048 24.049h32.065a8.016 8.016 0 0 1 8.016 8.016v48.097a8.016 8.016 0 0 1-8.016 8.016H8.016c-48.699 0-88.177-39.478-88.177-88.178v-64.128h-56.113a8.016 8.016 0 0 1-8.016-8.017v-48.096a8.016 8.016 0 0 1 8.016-8.016h56.113v-144.291" transform="translate(296.08 288.065)" fill="currentColor" stroke="#ffffff" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000"></path><path d="M0 0v176.355h41.838a8.015 8.015 0 0 1 7.777 6.072l12.024 48.096c1.265 5.06-2.562 9.961-7.777 9.961H0" transform="translate(296.08 15.516)" fill="none" stroke="#ffffff" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="" data-original="#000000"></path></g></g></svg>
                            
                        </Link>
                    </li>

                     <li>
                        <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="transition text-transparent"
                        >
                        <span className="sr-only">Facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="35" x="0" y="0" viewBox="0 0 512 512" ><g><path d="M437.019 74.981C388.667 26.628 324.379 0 256 0S123.333 26.628 74.981 74.981C26.628 123.333 0 187.621 0 256s26.628 132.667 74.981 181.019C123.333 485.372 187.621 512 256 512s132.667-26.628 181.019-74.981S512 324.379 512 256s-26.628-132.667-74.981-181.019zM256 495.832C123.756 495.832 16.168 388.244 16.168 256S123.756 16.168 256 16.168 495.832 123.756 495.832 256 388.244 495.832 256 495.832z" fill="#ffffff" opacity="1" data-original="#000000" ></path><path d="M347.845 97.011h-183.69c-37.024 0-67.144 30.121-67.144 67.144v183.692c0 37.022 30.121 67.143 67.144 67.143h183.692c37.022 0 67.143-30.121 67.143-67.144V164.155c-.001-37.024-30.121-67.144-67.145-67.144zm50.976 250.834c0 28.108-22.868 50.976-50.976 50.976h-183.69c-28.108 0-50.976-22.868-50.976-50.976v-183.69c0-28.108 22.868-50.976 50.976-50.976h183.692c28.107 0 50.975 22.868 50.975 50.976v183.69z" fill="#ffffff" opacity="1" data-original="#000000" ></path><path d="M339.402 251.22c-2.391-42.533-37.002-76.75-79.558-78.669-49.108-2.214-89.535 38.232-87.292 87.346 1.945 42.56 36.19 77.154 78.728 79.51 17.951.995 34.762-3.727 48.803-12.494 4.374-2.731 5.087-8.814 1.441-12.459l-.115-.115c-2.657-2.658-6.778-3.059-9.971-1.075a66.948 66.948 0 0 1-36.158 10.102c-37.455-.394-67.676-31.844-66.621-69.286 1.061-37.681 33.215-67.721 71.657-65.312 33.126 2.076 60.09 28.49 62.819 61.569 1.111 13.475-1.787 26.206-7.61 37.157-1.667 3.136-1.153 6.982 1.358 9.493l.124.124c3.773 3.773 10.154 2.886 12.675-1.816 6.982-13.026 10.619-28.098 9.72-44.075z" fill="#ffffff" opacity="1" data-original="#000000" ></path><circle cx="342.232" cy="158.989" r="21.558" fill="#ffffff" opacity="1" data-original="#000000"></circle></g></svg>
                            
                        </Link>
                    </li>

                     <li>
                        <Link
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="transition text-transparent"
                        >
                        <span className="sr-only">Facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="35" x="0" y="0" viewBox="0 0 512 512" ><g><path d="M437.019 74.981C388.667 26.628 324.379 0 256 0S123.333 26.628 74.981 74.981C26.628 123.333 0 187.621 0 256s26.628 132.667 74.981 181.019C123.333 485.372 187.621 512 256 512s132.667-26.628 181.019-74.981S512 324.379 512 256s-26.628-132.667-74.981-181.019zM256 495.832C123.756 495.832 16.168 388.244 16.168 256S123.756 16.168 256 16.168 495.832 123.756 495.832 256 388.244 495.832 256 495.832z" fill="#fafafa" opacity="1" data-original="#000000" ></path><path d="M436.352 162.391c-2.433-2.104-5.958-2.463-8.875-1.11a125.666 125.666 0 0 1-12.806 5.107 73.664 73.664 0 0 0 10.188-19.432c1.002-2.891.503-6.176-1.569-8.427a8.088 8.088 0 0 0-9.963-1.56 116.38 116.38 0 0 1-37.931 13.618c-14.958-13.729-34.201-21.24-54.643-21.24-42.313 0-77.147 32.642-80.648 74.065-8.741-1.364-25.844-6.241-29.933-7.578-29.581-10.075-56.228-27.814-77.075-51.307-1.236-1.393-2.864-2.429-4.695-2.764a8.099 8.099 0 0 0-8.745 4.339c-5.181 10.383-7.809 21.548-7.809 33.185 0 16.093 5.038 31.261 14.113 43.73-2.828-.531-5.838.462-7.812 2.89-1.135 1.396-1.703 3.168-1.77 4.966a67.49 67.49 0 0 0-.057 2.472c0 21.817 9.99 41.646 26.136 54.588a8.125 8.125 0 0 0-2.703 3.082c-.963 1.904-1.07 4.143-.434 6.178 7.052 22.559 24.572 39.739 46.292 46.781-19.673 11.976-42.429 18.434-65.679 18.434-2.053 0-4.166-.053-6.279-.156a8.098 8.098 0 0 0-8.371 6.744c-.568 3.349 1.162 6.698 4.087 8.423 29.718 17.529 63.734 26.792 98.39 26.792 41.361 0 80.758-12.881 113.607-36.725 4.052-2.942 4.499-8.821.959-12.362l-.003-.003c-2.852-2.852-7.338-3.159-10.605-.793-29.275 21.198-65.207 33.714-103.959 33.714a177.989 177.989 0 0 1-63.255-11.61c24.303-4.268 47.275-14.808 66.409-30.712 2.312-1.922 3.529-4.962 2.947-7.911a8.086 8.086 0 0 0-7.707-6.535 55.504 55.504 0 0 1-46.698-28.06 77.33 77.33 0 0 0 13.44-1.841c3.382-.77 6.119-3.472 6.559-6.913a8.086 8.086 0 0 0-6.085-8.897 53.623 53.623 0 0 1-40.14-43.256 73.794 73.794 0 0 0 19.047 1.896 8.088 8.088 0 0 0 7.792-7.166c.374-3.196-1.323-6.291-4.07-7.966-17.529-10.682-27.985-29.272-27.985-49.783 0-5.014.623-9.917 1.859-14.665 21.193 20.954 46.914 36.922 75.086 46.518.258.088 28.093 8.754 38.636 8.797.688.017 3.975.162 3.98.162 3.388.137 6.673-1.919 7.953-5.326.368-.978.502-2.03.477-3.074-.011-.471-.023-.942-.023-1.416 0-35.713 29.055-64.768 64.769-64.768 17.487 0 33.878 6.872 46.158 19.348 1.777 1.807 4.282 2.697 6.793 2.349a133.153 133.153 0 0 0 24.037-5.632 57.859 57.859 0 0 1-14.502 11.504c-3.692 2.067-5.258 6.558-3.518 10.415l.119.264a8.087 8.087 0 0 0 8.136 4.72 142.822 142.822 0 0 0 19.753-3.291 130.55 130.55 0 0 1-18.849 16.051 8.044 8.044 0 0 0-3.416 6.865l.017.511c.019.553.04 1.107.04 1.664v.731c-.186 45.29-17.461 86.654-45.668 117.994-2.882 3.201-2.702 8.117.344 11.163 3.312 3.312 8.72 3.151 11.855-.332 31.691-35.208 49.224-80.18 49.633-127.902a145.695 145.695 0 0 0 36.227-39.093 8.084 8.084 0 0 0-1.558-10.454z" fill="#fafafa" opacity="1" data-original="#000000" ></path></g></svg>
                            
                        </Link>
                    </li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                     <div className="text-center sm:text-left">
                    <p className="text-lg font-medium ">Moving Services</p>
                    <hr className="relative w-12 h-[1px] bg-[var(--secondary)] border-0 inline-block" />

                    <ul className="mt-3 space-y-4 text-sm">
                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">
                           International Moves
                        </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">Local Moves </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">Office Relocations </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">Packing & Storage </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="text-center sm:text-left">
                    <p className="text-lg font-medium ">About movexos</p>
                    <hr className="relative w-12 h-[1px] bg-[var(--secondary)] border-0 inline-block" />

                    <ul className="mt-3 space-y-4 text-sm text-white">
                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">
                            About Us
                        </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">
                            Our Mission
                        </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#">
                            Careers
                        </Link>
                        </li>

                        <li>
                        <Link href="/contactUs" className="text-white transition hover:text-[var(--gray-300)]">
                          Contact us
                        </Link>
                        </li>
                    </ul>
                    </div>

                    <div className="text-center sm:text-left">
                    <p className="text-lg font-medium ">Helpful Links</p>
                    <hr className="relative w-12 h-[1px] bg-[var(--secondary)] border-0 inline-block" />

                    <ul className="mt-3 space-y-4 text-sm">
                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#"> FAQs </Link>
                        </li>

                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#"> Moving Guide </Link>
                        </li>
                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#"> Support </Link>
                        </li>
                        <li>
                        <Link className="text-white transition hover:text-[var(--gray-300)]" href="#"> Blog </Link>
                        </li>
                    </ul>
                    </div>

                    <div className="text-center sm:text-left">
                    <p className="text-lg font-medium ">Contact Us</p>
                    <hr className="relative w-12 h-[1px] bg-[var(--secondary)] border-0 inline-block" />

                    <ul className="mt-3 space-y-4 text-sm">
                        <li>
                        <Link
                            className="inline-flex w-m items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-white shadow-sm"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                            </svg>

                            <span className="flex-1 text-white hover:text-[var(--gray-300)]">info@movexos.com</span>
                        </Link>
                        </li>

                        <li>
                        <Link
                            className="inline-flex w-m items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                            href="#"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-white shadow-sm"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                            </svg>

                            <span className="flex-1 text-white hover:text-[var(--gray-300)]">0735577179</span>
                        </Link>
                        </li>

                        <li
                        className="inline-flex w-m items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 shrink-0 text-white shadow-sm"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                        <address className="-mt-0.5 flex-1 not-italic text-white hover:text-[var(--gray-300)]">
                            57 Main St, Dundrum Dublin 14, Irland
                        </address>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="text-center sm:flex sm:justify-between sm:text-left">
                    <p className="text-sm text-white flex gap-1.5">

                    <Link
                        className="inline-block underline transition hover:text-[var(--gray-300)]"
                        href="/privacyPolicy"
                    >
                        Privacy Policy
                    </Link>

                    <span>&middot;</span>

                    <Link
                        className="inline-block underline transition hover:text-[var(--gray-300)]"
                        href="/termsConditions"
                    >
                        Terms & Conditions
                    </Link>
                     <span>&middot;</span>
                     <Link
                        className="inline-block underline transition hover:text-[var(--gray-300)]"
                        href="/cookiePolicy"
                    >
                        Cookie Policy
                    </Link>
                    </p>

                    <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">&copy; 2025 movexos LTD | All rights reserved.</p>
                </div>
                </div>
            </div>
            </footer>
    </div>
  );
}