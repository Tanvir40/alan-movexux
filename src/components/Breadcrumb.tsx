// src/components/Breadcrumb.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  href?: string; // <-- gör href valfri
}

export function Breadcrumb() {
  const pathname = usePathname() || "/";
  const pathSegments = pathname.split("/").filter(Boolean);

  const items: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: "Movings", href: "/movings" },
  ];

  // Lägg till sista segment som text, utan href
  if (pathSegments.length > 1) {
    const lastSegment = pathSegments[pathSegments.length - 1]; // "malmo-berlin"
    const [from, to] = lastSegment
      .split("-")
      .map(s => s.charAt(0).toUpperCase() + s.slice(1));
    items.push({ name: `Moving from ${from} to ${to}` }); // href saknas
  }

  return (
    <section className="py-3">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <ol className="flex gap-2 text-sm flex-nowrap scroll-pl-4 scroll-smooth items-center">
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className="flex-shrink-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block transition-colors text-[var(--primary)] hover:text-[var(--primary-800)] whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="block text-gray-500 whitespace-nowrap">{item.name}</span>
                  )}
                </li>

                {idx < items.length - 1 && (
                  <li className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 22"
                      fill="none"
                      className="w-3 h-3"
                    >
                      <path
                        d="M5.94541 5.93535L9.26766 9.24385C10.2441 10.2161 10.2441 11.8072 9.26766 12.7795L1 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 0.999985L2.31877 2.31329"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}