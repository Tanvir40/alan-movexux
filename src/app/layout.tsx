// src/app/layout.tsx
import React from "react";
import "../styles/globals.css";

// RootLayout är en ren Server Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Här kan du lägga meta, link-tags etc. */}
      </head>
      {/* suppressHydrationWarning skyddar mot små mismatchar */}
      <body suppressHydrationWarning={true}>
        {/* Dynamiskt innehåll bör ligga i Client Components */}
        {children}
      </body>
    </html>
  );
}
