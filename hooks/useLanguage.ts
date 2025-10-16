// hooks/useLanguage.ts
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SUPPORTED_LANGUAGES = ["en", "de", "fr", "es", "sv", "no", "da", "it", "nl", "pl", "pt"];

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState("en");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // 1️⃣ Försök hitta språk i URL (t.ex. /sv/moving eller /de/about)
    const segments = pathname?.split("/") || [];
    const pathLang = segments[1];
    if (SUPPORTED_LANGUAGES.includes(pathLang)) {
      setLang(pathLang);
      return;
    }

    // 2️⃣ Annars använd localStorage eller browser-språk
    const savedLang = localStorage.getItem("movexos-language");
    const browserLang = navigator.language.split("-")[0];
    const fallbackLang = SUPPORTED_LANGUAGES.includes(browserLang) ? browserLang : "en";

    setLang(savedLang || fallbackLang);
  }, [pathname]);

  // 3️⃣ Funktion för språkbyte
  const changeLanguage = (newLang: string) => {
    if (!isClient) return;
    if (!SUPPORTED_LANGUAGES.includes(newLang)) return;

    setLang(newLang);
    localStorage.setItem("movexos-language", newLang);

    // Konstruera ny path med nytt språk
    const segments = pathname?.split("/") || [];
    const currentLang = SUPPORTED_LANGUAGES.includes(segments[1]) ? segments[1] : null;

    if (currentLang) {
      segments[1] = newLang; // byt språksegmentet
    } else {
      segments.unshift("", newLang); // lägg till språk i början
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return { lang: isClient ? lang : "en", changeLanguage, isClient };
};
