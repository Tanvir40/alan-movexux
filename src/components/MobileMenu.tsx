// src/components/MobileMenu.tsx
"use client";

import Button from "@/components/Button";
import React, { useEffect, useRef, useState } from "react";


export default function MobileMenu() {
const [open, setOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const [destinationsOpen, setDestinationsOpen] = useState(false);
const [resourcesOpen, setResourcesOpen] = useState(false); // ny dropdown state
const menuRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
function handleKey(e: KeyboardEvent) {
if (e.key === "Escape") {
setOpen(false);
setServicesOpen(false);
setDestinationsOpen(false);
setResourcesOpen(false);
}
}
window.addEventListener("keydown", handleKey);
return () => window.removeEventListener("keydown", handleKey);
}, []);


useEffect(() => {
function handleClick(e: MouseEvent) {
if (!open) return;
if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
setOpen(false);
setServicesOpen(false);
setDestinationsOpen(false);
setResourcesOpen(false);
}
}
document.addEventListener("mousedown", handleClick);
return () => document.removeEventListener("mousedown", handleClick);
}, [open]);


useEffect(() => {
if (open) {
const firstLink = menuRef.current?.querySelector("a, button") as HTMLElement | null;
firstLink?.focus();
document.body.style.overflow = "hidden";
} else {
document.body.style.overflow = "";
}
}, [open]);


function toggleMenu() {
setOpen((s) => !s);
if (open) {
setServicesOpen(false);
setDestinationsOpen(false);
setResourcesOpen(false);
}
}


function handleLinkClick() {
setOpen(false);
setServicesOpen(false);
setDestinationsOpen(false);
setResourcesOpen(false);
}

  return (
    <div className="md:hidden">
      {/* Hamburger / Close button */}
      <button
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        aria-expanded={open}
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-[var(--primary)]"
      >
        {/* Icon: byts mellan hamburger och X */}
        <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
        {open ? (
          // X icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          // Hamburger icon (three lines)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0.944444C0 0.423111 0.413538 0 0.923077 0H23.0769C23.3217 0 23.5565 0.0995037 23.7296 0.276621C23.9027 0.453739 24 0.693962 24 0.944444C24 1.19493 23.9027 1.43515 23.7296 1.61227C23.5565 1.78939 23.3217 1.88889 23.0769 1.88889H0.923077C0.413538 1.88889 0 1.46578 0 0.944444ZM0 16.0556C0 15.5342 0.413538 15.1111 0.923077 15.1111H23.0769C23.3217 15.1111 23.5565 15.2106 23.7296 15.3877C23.9027 15.5648 24 15.8051 24 16.0556C24 16.306 23.9027 16.5463 23.7296 16.7234C23.5565 16.9005 23.3217 17 23.0769 17H0.923077C0.413538 17 0 16.5769 0 16.0556ZM4.92332 8.5C4.92332 7.97867 5.33686 7.55556 5.8464 7.55556H23.0769C23.3217 7.55556 23.5565 7.65506 23.7296 7.83218C23.9027 8.00929 24 8.24952 24 8.5C24 8.75048 23.9027 8.99071 23.7296 9.16782C23.5565 9.34494 23.3217 9.44444 23.0769 9.44444H5.8464C5.33686 9.44444 4.92332 9.02133 4.92332 8.5Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
        style={{ transitionProperty: "opacity", transitionDuration: "250ms" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Off-canvas menu */}
      <aside
        ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-9/12 max-w-full bg-white text-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col gap-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex-1 overflow-auto">
          <ul className="space-y-4">

             {/* Services */}
            <li className="py-3 px-4 m-0 border-b border-[var(--gray-100)]">
              <div className="text-[var(--primary)]">
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}
                  className="w-full flex items-end justify-between rounded focus:outline-none"
                >
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={18} height={18} x={0} y={0} viewBox="0 0 512.003 512.003" >
                        <g><path d="M277.501 409.423c-3.223-8.858-11.721-14.808-21.143-14.808a22.46 22.46 0 0 0-7.694 1.36c-11.657 4.244-17.688 17.181-13.447 28.839 3.224 8.857 11.722 14.807 21.144 14.807a22.45 22.45 0 0 0 7.693-1.36c11.658-4.243 17.69-17.18 13.447-28.838zm-18.576 14.743a7.464 7.464 0 0 1-2.563.456 7.526 7.526 0 0 1-7.05-4.938c-1.414-3.886.597-8.199 4.482-9.613a7.464 7.464 0 0 1 2.563-.456 7.525 7.525 0 0 1 7.049 4.939c1.415 3.885-.595 8.197-4.481 9.612z" fill="currentColor" opacity="1" data-original="#000000"/><path d="m511.548 340.263-10.262-28.19a7.474 7.474 0 0 0-3.832-4.208l-.045-.023c-.112-.053-.229-.094-.344-.141-.108-.044-.214-.094-.324-.133-.026-.01-.054-.016-.081-.024a7.454 7.454 0 0 0-4.985.046l-24.525 8.919-52.171-143.348-.005-.01-20.514-56.368a7.532 7.532 0 0 0-7.05-4.931c-.87 0-1.74.15-2.56.45-3.89 1.41-5.9 5.73-4.49 9.61l17.961 49.332-96.315 35.054-.005.001c-.003.001-.005.003-.008.003l-58.718 21.37-39.336-108.055 51.687-18.81 11.116 30.534a7.518 7.518 0 0 0 7.04 4.941c.88 0 1.74-.15 2.57-.461l37.589-13.68a7.453 7.453 0 0 0 4.23-3.87 7.46 7.46 0 0 0 .624-4.246l-.002-.023a7.35 7.35 0 0 0-.116-.584c-.013-.055-.02-.107-.033-.162a7.432 7.432 0 0 0-.222-.724L307.31 81.997l51.676-18.807L370.1 93.721c1.08 2.95 3.91 4.94 7.05 4.94.87 0 1.74-.15 2.57-.46 3.88-1.41 5.89-5.721 4.48-9.61l-13.68-37.589a7.539 7.539 0 0 0-5.89-4.84 7.462 7.462 0 0 0-3.72.359l-65.744 23.931c-.011.004-.023.005-.034.009-.02.007-.038.017-.058.024l-37.465 13.638c-.022.008-.044.01-.066.018-.037.014-.072.032-.109.046l-65.669 23.903a7.453 7.453 0 0 0-4.23 3.87 7.428 7.428 0 0 0-.25 5.74l44.458 122.155 42.753 117.472a62.053 62.053 0 0 0-16.939-2.699L149.248 57.046c-7.072-19.429-28.632-29.482-48.063-22.412l-.009.004L4.953 69.342l-.005.002-.016.005c-.173.063-.337.138-.502.212-.063.028-.129.051-.191.081-.162.077-.316.167-.47.255-.063.036-.13.067-.192.106-.148.09-.286.19-.426.289-.062.044-.128.084-.188.129-.13.099-.251.206-.374.313-.062.055-.129.104-.189.16-.116.106-.222.223-.33.336-.059.063-.122.12-.179.184-.102.115-.195.238-.29.359-.054.068-.113.134-.164.205-.086.118-.162.242-.241.365-.051.08-.107.156-.155.237-.072.122-.134.25-.199.376-.045.087-.095.172-.137.261-.058.124-.105.252-.157.379-.039.097-.083.189-.117.287-.044.124-.078.252-.115.378-.031.104-.067.207-.094.313-.031.124-.052.252-.077.378-.022.11-.049.22-.066.331-.02.128-.027.258-.04.387-.011.112-.028.224-.034.337-.007.132-.002.264-.002.396 0 .113-.006.226-.001.339.006.134.025.269.038.403.011.111.017.223.033.335.02.133.052.266.079.399.023.113.04.227.068.34.033.133.08.264.121.396.034.109.061.22.1.329l.003.007a.074.074 0 0 0 .004.014l10.261 28.19c.077.212.183.405.276.606.073.156.132.322.215.471.117.211.258.399.393.596.085.123.157.258.249.375.161.207.345.391.525.577.084.087.158.186.246.269.203.191.426.357.647.523.08.061.152.132.234.188.239.165.495.304.751.439.076.04.146.092.223.13.262.128.537.227.812.323.08.028.155.068.236.094.282.089.572.146.864.202.08.015.158.043.239.055a7.31 7.31 0 0 0 1.778.061c.044-.004.087-.013.131-.017.17-.018.339-.037.509-.066.078-.014.156-.035.234-.051.135-.028.27-.054.404-.09.143-.037.284-.086.426-.133.067-.021.134-.039.2-.063l.008-.003.012-.004.009-.004 89.187-32.168L215.28 370.038c-18.866 16.502-26.723 43.526-17.648 68.457 8.956 24.605 32.559 41.138 58.734 41.138a62.309 62.309 0 0 0 21.371-3.784c15.687-5.71 28.211-17.185 35.267-32.315a62.325 62.325 0 0 0 5.859-25.218l188.201-68.439.002-.001h.001c.05-.018.096-.042.145-.061.191-.074.38-.149.561-.237.077-.037.148-.082.224-.122.148-.077.296-.152.437-.238.08-.05.154-.108.232-.159.128-.086.259-.169.381-.261.039-.03.073-.064.111-.094.154-.123.307-.246.45-.379.024-.026.046-.051.07-.074.151-.146.299-.293.438-.449.028-.031.051-.066.079-.098.13-.152.257-.306.374-.467.013-.017.023-.036.035-.054.127-.179.249-.361.36-.55.02-.034.036-.071.056-.106.099-.174.194-.349.279-.53.033-.071.059-.146.089-.218.064-.148.129-.296.184-.448.037-.105.064-.213.096-.319.038-.123.081-.245.112-.37.046-.185.08-.373.112-.561.008-.05.022-.098.029-.147a7.473 7.473 0 0 0-.373-3.671zM293.217 87.127l8.545 23.49-23.492 8.55-8.55-23.489 23.497-8.551zm44.46 122.154 8.551 23.488-23.499 8.552-8.548-23.489 23.496-8.551zm-89.268 32.487 51.679-18.807 11.116 30.534a7.52 7.52 0 0 0 7.05 4.939c.87 0 1.73-.159 2.56-.46l37.589-13.68c3.89-1.41 5.9-5.72 4.48-9.61l-11.115-30.532 51.687-18.811 49.605 136.287-149.639 54.417a62.877 62.877 0 0 0-9.305-8.686l-45.707-125.591zM121.057 67.305c-.044-.12-.099-.233-.148-.351-.049-.115-.093-.234-.147-.347-.049-.103-.107-.197-.16-.296-.066-.123-.129-.249-.201-.367-.05-.081-.107-.155-.16-.234-.085-.128-.167-.258-.26-.379-.048-.064-.103-.121-.153-.184-.104-.129-.207-.258-.32-.379-.045-.049-.096-.093-.143-.141-.124-.126-.247-.252-.379-.369-.038-.033-.079-.062-.117-.094a7.003 7.003 0 0 0-.449-.36c-.022-.016-.046-.028-.068-.045a7.594 7.594 0 0 0-.536-.351l-.043-.022a7.526 7.526 0 0 0-3.384-1.009h-.032a7.427 7.427 0 0 0-.7-.001c-.043.002-.086.01-.129.013a7.306 7.306 0 0 0-.606.059c-.097.015-.193.039-.29.058-.148.027-.297.052-.445.089-.168.042-.335.099-.502.152-.074.024-.149.042-.223.068l-.01.004-.011.003-.009.004-89.187 32.168-5.131-14.096 89.176-32.164.005-.002.016-.005c11.66-4.243 24.595 1.789 28.838 13.448l107.034 294.077a62.754 62.754 0 0 0-7.204 2.136 62.807 62.807 0 0 0-6.889 3.004L121.057 67.305zm178.35 369.887c-5.362 11.499-14.88 20.221-26.802 24.56a47.354 47.354 0 0 1-16.241 2.88c-19.893 0-37.832-12.566-44.638-31.269-8.958-24.61 3.777-51.921 28.388-60.88a47.35 47.35 0 0 1 16.241-2.88c19.892 0 37.832 12.566 44.638 31.27 4.34 11.922 3.777 24.821-1.586 36.319zm17.814-34.242a63.548 63.548 0 0 0-2.133-7.206 62.19 62.19 0 0 0-2.995-6.891l177.662-64.606 5.131 14.096-177.665 64.607z" fill="currentColor" opacity="1" data-original="#000000"/></g></svg>
                  <span>Services</span>
                  </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
<path 
  d="M16.0646 5.94541L12.7561 9.26766C11.7839 10.2441 10.1928 10.2441 9.22049 9.26766L1 1" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
<path 
  d="M21 1L19.6866 2.31877" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>                  </svg>
                </button>

                {/* Dropdown under Services */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    servicesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-1.5 space-y-2 mt-3.5 gap-1.5 grid">
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#flytt-inom-sverige" onClick={handleLinkClick} className="px-2 py-1 hover:underline flex justify-between">
                        <span>International Move</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#internationell-flytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Domestic Move</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Office / Corporate Move</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Furniture & Heavy Goods Move</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Man with Van / Small Moves</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Storage & Warehousing</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                       Packing & Assembly
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                       <span>Sea Move (Container Shipping)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

             {/* Moving Destionation */}
            <li className="py-3 px-4 m-0  border-b border-[var(--gray-100)]">
              <div className="text-[var(--primary)]">
                <button
                  onClick={() => setDestinationsOpen((s) => !s)}
                  aria-expanded={destinationsOpen}
                  className="w-full flex items-center justify-between rounded hover:bg-white/5 focus:outline-none"
                >
                    <div className="flex gap-2 items-center">
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  version="1.1" 
  width={18} 
  height={18} 
  x={0} 
  y={0} 
  viewBox="0 0 682.667 682.667"
>
  <g>
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path 
          d="M0 512h512V0H0Z" 
          fill="currentColor" 
          opacity={1} 
          data-original="#000000" 
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
      <path 
        d="m0 0-83.2 136.51C-93.81 152.39-100 171.47-100 192c0 55.23 44.77 100 100 100s100-44.77 100-100c0-20.53-6.19-39.61-16.8-55.49z" 
        transform="translate(110 210)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0c0-22.09-17.91-40-40-40S-80-22.09-80 0s17.91 40 40 40S0 22.09 0 0Z" 
        transform="translate(150 402)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0c11.05 0 20-8.96 20-20 0-11.05-8.95-20-20-20s-20 8.95-20 20C-20-8.96-11.05 0 0 0zM0 0l-83.2 130.51C-93.81 146.39-100 165.47-100 186c0 55.23 44.77 100 100 100s100-44.77 100-100c0-20.53-6.19-39.61-16.8-55.49z" 
        transform="translate(402 50)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0c0-22.09-17.91-40-40-40S-80-22.09-80 0s17.91 40 40 40S0 22.09 0 0Z" 
        transform="translate(442 236)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0c0-11.05-8.95-20-20-20s-20 8.95-20 20c0 11.04 8.95 20 20 20S0 11.04 0 0Z" 
        transform="translate(130 190)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0c0-5.523-4.477-10-10-10S-20-5.523-20 0s4.477 10 10 10S0 5.523 0 0" 
        transform="translate(251 30)" 
        fill="currentColor" 
        data-original="#000000" 
      />
      <path 
        d="M0 0h86c22.09 0 40-17.91 40-40s-17.91-40-40-40H-34c-22.09 0-40-17.91-40-40s17.91-40 40-40H66" 
        transform="translate(130 190)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
      <path 
        d="M0 0h96" 
        transform="translate(286 30)" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={20} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeMiterlimit={10} 
        strokeDasharray="none" 
        strokeOpacity="" 
        data-original="#000000" 
      />
    </g>
  </g>
</svg>
                  <span>Moving Destinations</span>
                  </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
<path 
  d="M16.0646 5.94541L12.7561 9.26766C11.7839 10.2441 10.1928 10.2441 9.22049 9.26766L1 1" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
<path 
  d="M21 1L19.6866 2.31877" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>                  </svg>
                </button>

                {/* Dropdown under Moving Destinations */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    destinationsOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-1.5 space-y-2 mt-3.5 gap-1.5 grid">
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#flytt-inom-sverige" onClick={handleLinkClick} className="px-2 py-1 hover:underline flex justify-between">
                        <span>Berlin, Germany</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#internationell-flytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Paris, France</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>London, UK</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Rome, Italy</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Madrid, Spain</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Amsterdam, Netherlands</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Vienna, Austria</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                         <span>Zurich, Switzerland</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Pricing */}
            <li className="py-3 px-4 m-0 text-[var(--primary)]  border-b border-[var(--gray-100)]">
              <a
                href="#about"
                onClick={handleLinkClick}
                className="flex justify-between text-base font-bold px-2 py-2 rounded hover:bg-white/5"
              >
                 <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={18} height={18} x={0} y={0} viewBox="0 0 512 512.001"><g><path d="M348.945 221.64v-96.894c0-2.773-1.28-5.336-3.093-7.363L237.219 3.309C235.19 1.176 232.309 0 229.429 0H57.196C25.398 0 0 25.93 0 57.73v325.684c0 31.8 25.398 57.305 57.195 57.305h135.953C218.863 483.402 265.605 512 318.852 512c80.886 0 146.941-65.734 146.941-146.727.11-70.75-50.688-129.867-116.848-143.632ZM240.102 37.458l72.882 76.723h-47.273c-14.086 0-25.61-11.63-25.61-25.715ZM57.195 419.375c-19.953 0-35.851-16.008-35.851-35.96V57.73c0-20.062 15.898-36.386 35.851-36.386h161.563v67.12c0 25.93 21.023 47.06 46.953 47.06h61.89v83.34c-3.199-.106-5.761-.427-8.535-.427-37.242 0-71.496 14.301-97.32 36.711H86.223c-5.871 0-10.672 4.801-10.672 10.668 0 5.872 4.8 10.672 10.672 10.672h115.675c-7.578 10.672-13.875 21.344-18.78 33.082H86.222c-5.871 0-10.672 4.801-10.672 10.672 0 5.867 4.8 10.672 10.672 10.672h89.957c-2.668 10.672-4.055 22.516-4.055 34.36 0 19.206 3.734 38.203 10.457 54.21H57.195Zm261.766 71.39c-69.149 0-125.387-56.238-125.387-125.386 0-69.149 56.13-125.387 125.387-125.387 69.254 0 125.383 56.238 125.383 125.387 0 69.148-56.235 125.387-125.383 125.387Zm0 0" fill="currentColor" data-original="#000000"></path><path d="M86.223 223.027H194.32c5.871 0 10.672-4.804 10.672-10.672 0-5.87-4.8-10.671-10.672-10.671H86.223c-5.871 0-10.672 4.8-10.672 10.671 0 5.868 4.8 10.672 10.672 10.672ZM315.438 299.54c.855.21 1.707.32 2.562.32 1.066 0 2.027-.11 2.988-.43 14.086 1.175 25.078 12.914 25.078 27.215 0 5.867 4.801 10.668 10.668 10.668 5.871 0 10.672-4.801 10.672-10.668 0-23.477-16.644-43.114-38.734-47.704v-6.828c0-5.87-4.805-10.672-10.672-10.672-5.871 0-10.672 4.801-10.672 10.672v7.258c-21.344 5.121-37.242 24.438-37.242 47.274 0 26.89 21.875 48.66 48.66 48.66 15.047 0 27.32 12.27 27.32 27.316 0 15.047-12.168 27.426-27.32 27.426-15.047 0-27.316-12.274-27.316-27.32 0-5.868-4.805-10.672-10.672-10.672-5.871 0-10.672 4.804-10.672 10.672 0 22.945 15.898 42.152 37.242 47.273v10.992c0 5.871 4.8 10.672 10.672 10.672 5.867 0 10.672-4.8 10.672-10.672V450.32c22.09-4.59 38.734-24.222 38.734-47.699 0-26.89-21.875-48.66-48.66-48.66-15.047 0-27.316-12.274-27.316-27.316 0-13.875 10.457-25.504 24.007-27.106Zm0 0" fill="currentColor" data-original="#000000"></path></g></svg>
                    <span>Pricing</span>
                </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
              </a>
            </li>
            
            {/* Resources */}
             <li className="py-3 px-4 m-0  border-b border-[var(--gray-100)]">
              <div className="text-[var(--primary)]">
                <button
                  onClick={() => setResourcesOpen((s) => !s)}
                  aria-expanded={resourcesOpen}
                  className="w-full flex items-center justify-between rounded hover:bg-white/5 focus:outline-none"
                >
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={18} height={18} x={0} y={0} viewBox="0 0 100 100"><g><path d="M86.48 50.21a1.82 1.82 0 0 0 3.57.71l4.8-24.62a7 7 0 0 0-5.61-8.3l-23.89-4.7-.51-2.66a7.22 7.22 0 0 0-8.57-5.51L20.64 12.1a1.57 1.57 0 0 0-1.12.72L5.54 33A1.87 1.87 0 0 0 5 34.68l10.64 53.94a7.25 7.25 0 0 0 8.58 5.61l30.11-5.82a1.77 1.77 0 1 0-.72-3.47L23.5 90.76a3.63 3.63 0 0 1-4.29-2.86L8.9 35.7l9.91-1.94a7.27 7.27 0 0 0 5.71-8.48l-1.94-9.91L57 8.63a3.57 3.57 0 0 1 4.29 2.76c2.76 14 5.51 28.09 8.27 42.09a30.88 30.88 0 0 0-11.76 4.29c-3.88 3.06-5.92 6.64-4.49 11.74a55.47 55.47 0 0 0 12.55 22.27 10.6 10.6 0 0 0 15.21 0 54 54 0 0 0 12.66-22.37 10.44 10.44 0 0 0-4.59-11.64 28.75 28.75 0 0 0-16-4.5l-1.12-6 2 .41c2.35.41 3.06-3.06.71-3.47l-3.57-.82-1.63-8.78 9.29 1.73c2.34.41 2.85-3.06.61-3.57L68.72 30.8l-2.65-13.69 22.45 4.39a3.37 3.37 0 0 1 2.76 4ZM23.2 62.57c-2.25.41-1.54 4 .71 3.47l23.37-4.7a1.77 1.77 0 1 0-.71-3.47ZM59.33 45l-38.18 7.76c-2.24.41-1.53 3.88.72 3.47L60 48.47a1.77 1.77 0 1 0-.67-3.47Zm-2-9.91-38.12 7.76c-2.24.41-1.53 3.88.72 3.47L58 38.56a1.77 1.77 0 1 0-.71-3.47Zm11.94 42.8a3.42 3.42 0 0 0 4.9 0l8.53-8.79c1.64-1.63-.91-4.18-2.55-2.55l-8.37 8.79-4-4c-1.63-1.63-4.18.92-2.55 2.56Zm-51.18-47.6-7.25 1.32L19.62 19l1.43 7a3.76 3.76 0 0 1-3 4.29ZM87.2 60.73a6.8 6.8 0 0 1 3.06 7.76 50.71 50.71 0 0 1-11.74 20.84 7.3 7.3 0 0 1-10.11 0 50.6 50.6 0 0 1-11.63-20.84 6.55 6.55 0 0 1 3-7.66 25.66 25.66 0 0 1 27.46-.1Z" fill="currentColor" opacity="1" data-original="#000000"></path></g></svg>
                        <span>Resources</span>
                    </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
<path 
  d="M16.0646 5.94541L12.7561 9.26766C11.7839 10.2441 10.1928 10.2441 9.22049 9.26766L1 1" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
<path 
  d="M21 1L19.6866 2.31877" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>                  </svg>
                </button>

                {/* Dropdown under Resources */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    resourcesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-1.5 space-y-2 mt-3.5 gap-1.5 grid">
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#flytt-inom-sverige" onClick={handleLinkClick} className="px-2 py-1 hover:underline flex justify-between">
                        <span>Moving Guide</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#internationell-flytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Packing Tips</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                    <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>FAQ</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Moving Checklist</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Cost Calculator</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Insurance Info</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                        <span>Customer Stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                     <li className="border-b border-gray-200 pb-2 text-[var(--primary)]">
                      <a href="#foretagsflytt" onClick={handleLinkClick} className="px-2 py-1 hover:underline  flex justify-between">
                         <span>Blog</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 11 22" fill="none" className={`transform transition-transform duration-200`}>
                            <path 
  d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
                            <path 
  d="M1 0.999985L2.31877 2.31329" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeMiterlimit={10} 
  strokeLinecap="round" 
  strokeLinejoin="round"
/>

                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Footer area in menu: CTA, Socials etc. */}
        <div className="border-t border-[var(--gray-200)] py-3 px-4 m-0">
           <Button text="Get a Quote" variant="primary" className="w-full justify-center"/>

          <div className="mt-3 text-sm text-[var(--primary)]">
            <div>Language: English</div>
            <div className="mt-2 flex gap-3">
              <a href="#" onClick={handleLinkClick} className="underline text-sm">
                Facebook
              </a>
              <a href="#" onClick={handleLinkClick} className="underline text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}