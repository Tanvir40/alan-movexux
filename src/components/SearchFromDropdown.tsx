// src/components/SearchFromDropdown.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface DynamicPage {
  title: string;
  slug: string;
}

interface SearchFromDropdownProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  dynamicPages?: DynamicPage[];
}

export default function SearchFromDropdown({
  options,
  placeholder = "Sök plats...",
  onSelect,
  dynamicPages = [],
}: SearchFromDropdownProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Filtrera alternativen
  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      setOpen(false);
      return;
    }
    const res = options.filter((opt) =>
      opt.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(res);
    setOpen(res.length > 0);
  }, [query, options]);

  // Klick utanför => stäng dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-sm mx-auto">
      <div className="relative">
        {/* Search icon */}
         <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 20 20" fill="none" className={`${"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" }`}>
               <path d="M16.2438 15.3896C16.0079 15.1536 15.6254 15.1536 15.3895 15.3896C15.1537 15.6254 15.1537 16.0078 15.3895 16.2438L16.2438 15.3896ZM18.9689 19.8231C19.2047 20.059 19.5873 20.059 19.8231 19.8231C20.059 19.5873 20.059 19.2047 19.8231 18.9689L18.9689 19.8231ZM7.15745 3.94026C7.48692 3.88807 7.71173 3.57868 7.65954 3.24919C7.60735 2.9197 7.29794 2.69489 6.96847 2.74708L7.15745 3.94026ZM2.74708 6.96844C2.69489 7.29793 2.91969 7.60733 3.24917 7.65952C3.57866 7.71171 3.88807 7.48691 3.94026 7.15742L2.74708 6.96844ZM15.8167 15.8167L15.3895 16.2438L18.9689 19.8231L19.396 19.396L19.8231 18.9689L16.2438 15.3896L15.8167 15.8167ZM8.65778 16.7114V16.1074C4.54341 16.1074 1.20806 12.7721 1.20806 8.65772H0.604031H0C0 13.4392 3.87622 17.3155 8.65778 17.3155V16.7114ZM16.7114 8.65772H16.1074C16.1074 12.7721 12.7721 16.1074 8.65778 16.1074V16.7114V17.3155C13.4393 17.3155 17.3155 13.4392 17.3155 8.65772H16.7114ZM8.65778 0.604028V1.20806C12.7721 1.20806 16.1074 4.54339 16.1074 8.65772H16.7114H17.3155C17.3155 3.87619 13.4393 0 8.65778 0V0.604028ZM8.65778 0.604028V0C3.87622 0 0 3.87619 0 8.65772H0.604031H1.20806C1.20806 4.54339 4.54341 1.20806 8.65778 1.20806V0.604028ZM7.06295 3.34367L6.96847 2.74708C4.79547 3.09124 3.09124 4.79547 2.74708 6.96844L3.34367 7.06293L3.94026 7.15742C4.20256 5.50138 5.50138 4.20256 7.15745 3.94026L7.06295 3.34367Z" fill="currentColor"/>
        </svg>

        {/* Input field */}
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          className="w-full pl-11 pr-3 h-9.5 border rounded-md text-gray-primary bg-white cursor-pointer transition outline-none border-[var(--gray-300)] focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)]"
        />
      </div>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {/* Om sökresultat finns */}
          {filtered.length > 0 &&
            filtered.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setQuery(item);
                  setOpen(false);
                  onSelect?.(item);
                }}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}

          {/* Om ingen sökning → visa dynamiska sidor */}
          {filtered.length === 0 && dynamicPages.length > 0 && (
            <ul className="grid gap-1">
              {dynamicPages.slice(0, 10).map((page, i) => (
                <li
                  key={i}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                  onClick={() => onSelect?.(page.title)}
                >
                  {page.title}
                </li>
              ))}
            </ul>
          )}
        </ul>
      )}
    </div>
  );
}