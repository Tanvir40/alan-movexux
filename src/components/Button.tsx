// src/components/Button.tsx
"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text?: string; // text blir optional om du bara vill ha icon
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "outline-dark";
  className?: string; // Extra CSS-klasser
  children?: React.ReactNode; // Icon eller annan content
}

export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
}: ButtonProps) {
  const baseClass = "btn inline-flex items-center justify-center gap-2";
  let variantClass = "";

  switch (variant) {
    case "primary":
      variantClass = "btn-primary";
      break;
    case "secondary":
      variantClass = "btn-secondary";
      break;
    case "outline":
      variantClass = "btn-outline";
      break;
    case "outline-dark":
      variantClass = "btn-outline-dark";
      break;
    default:
      variantClass = "btn-primary";
  }

  const finalClassName = `${baseClass} ${variantClass} ${className}`.trim();

  const content = (
    <>
      {text && <span>{text}</span>}
      {children}
    </>
  );

  // Länk
  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={finalClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={finalClassName}>
        {content}
      </Link>
    );
  }

  // Button
  return (
    <button className={finalClassName} onClick={onClick}>
      {content}
    </button>
  );
}
