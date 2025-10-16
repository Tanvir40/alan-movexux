// src/components/Form.tsx
"use client";
import { useState, useRef, useEffect, RefObject } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { parse, isValid, format } from "date-fns";
import Button from "@/components/Button";

// ----------------- Types -----------------
interface MoveFormProps {
  type: "private" | "business";
}

interface DropdownInputProps {
  idPrefix: string;
  label: string;
  index: number;
  selectedOption: string[];
  setSelectedOption: (value: string[]) => void;
  inputRefs: RefObject<Array<HTMLInputElement | null>>;
  dropdownRefs: RefObject<Array<HTMLDivElement | null>>;
  dropdownInputRefs: RefObject<Array<HTMLInputElement | null>>;
  dropdownOpen: boolean[];
  setDropdownOpen: (value: boolean[]) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  options: string[];
  handleClear: (index: number, type: "from" | "to") => void;
}

// ----------------- City options -----------------
const cityOptions = ["New York", "London", "Berlin", "Paris", "Tokyo", "Sydney", "Stockholm"];

// ----------------- MoveForm Component -----------------
export default function MoveForm() {
  const [activeTab, setActiveTab] = useState(0); // <-- behåll bara denna

  const tabs = [
  {
    label: "Private Move",
    icon: 
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.69017 14.9858C7.57187 14.9858 7.45843 15.0328 7.37478 15.1165C7.29113 15.2001 7.24414 15.3136 7.24414 15.4319C7.24414 15.5502 7.29113 15.6636 7.37478 15.7473C7.45843 15.8309 7.57187 15.8779 7.69017 15.8779H12.1504C12.2687 15.8779 12.3822 15.8309 12.4658 15.7473C12.5495 15.6636 12.5965 15.5502 12.5965 15.4319C12.5965 15.3136 12.5495 15.2001 12.4658 15.1165C12.3822 15.0328 12.2687 14.9858 12.1504 14.9858H7.69017Z" fill="currentColor"></path>
<path 
  fillRule="evenodd" 
  clipRule="evenodd" 
  d="M11.8554 1.67181C11.3044 1.23668 10.6227 1 9.92056 1C9.21841 1 8.53676 1.23668 7.98569 1.67181L2.18733 6.24984C1.8172 6.5421 1.51809 6.91441 1.31245 7.33882C1.10681 7.76323 0.999986 8.22872 1 8.70032V15.8778C1 16.7059 1.32894 17.5 1.91447 18.0855C2.5 18.6711 3.29414 19 4.1222 19H15.7189C16.547 19 17.3411 18.6711 17.9267 18.0855C18.5122 17.5 18.8411 16.7059 18.8411 15.8778V8.70032C18.8411 8.22872 18.7343 7.76323 18.5287 7.33882C18.323 6.91441 18.0239 6.5421 17.6538 6.24984L11.8554 1.67181ZM8.53877 2.37207C8.93234 2.06139 9.41914 1.89241 9.92056 1.89241C10.422 1.89241 10.9088 2.06139 11.3024 2.37207L17.1007 6.95011C17.3651 7.15882 17.5788 7.42473 17.7257 7.72786C17.8727 8.03099 17.949 8.36346 17.9491 8.70032V15.8778C17.9491 16.4693 17.7141 17.0365 17.2959 17.4548C16.8776 17.873 16.3104 18.1079 15.7189 18.1079H4.1222C3.53073 18.1079 2.96348 17.873 2.54525 17.4548C2.12702 17.0365 1.89206 16.4693 1.89206 15.8778V8.70032C1.89199 8.36353 1.9682 8.03111 2.11497 7.72798C2.26175 7.42486 2.47527 7.15891 2.73951 6.95011L8.53877 2.37207Z" 
  fill="currentColor" 
/>
    </svg>,
    type: "private" as MoveFormProps["type"],
  },
  {
    label: "Business Move",
    icon: 
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.579 7.73291L18.2366 9.05536C18.7731 9.16871 19.1359 9.62212 19.1359 10.1587V17.8666C19.1359 18.4939 18.6295 19.0002 18.0023 19.0002H11.2012C11.4128 19.0002 11.579 18.8339 11.579 18.6223V18.2445H18.0023C18.2064 18.2445 18.3802 18.0782 18.3802 17.8666V10.1587C18.3802 9.98485 18.2593 9.82616 18.0855 9.78837L11.579 8.50371V7.73291Z" fill="currentColor"></path>
          <path d="M15.7362 11.4433C15.9478 11.4433 16.114 11.6096 16.114 11.8212C16.114 12.0328 15.9478 12.199 15.7362 12.199H14.2248C14.0132 12.199 13.847 12.0328 13.847 11.8212C13.847 11.6096 14.0132 11.4433 14.2248 11.4433H15.7362ZM15.7362 13.7104C15.9478 13.7104 16.114 13.8767 16.114 14.0882C16.114 14.2998 15.9478 14.4661 15.7362 14.4661H14.2248C14.0132 14.4661 13.847 14.2998 13.847 14.0882C13.847 13.8767 14.0132 13.7104 14.2248 13.7104H15.7362ZM15.7362 15.9775C15.9478 15.9775 16.114 16.1437 16.114 16.3553C16.114 16.5669 15.9478 16.7331 15.7362 16.7331H14.2248C14.0132 16.7331 13.847 16.5669 13.847 16.3553C13.847 16.1437 14.0132 15.9775 14.2248 15.9775H15.7362ZM11.5799 18.6223C11.5799 18.8339 11.4137 19.0002 11.2021 19.0002C10.9905 19.0002 10.8242 18.8339 10.8242 18.6223V8.04277C10.8242 7.92941 10.8771 7.82362 10.9602 7.74805C11.0509 7.68004 11.1643 7.64981 11.2776 7.67248L11.5799 7.73294V18.2445V18.6223Z" fill="currentColor"></path>
          <path d="M10.8244 18.2444V18.6222C10.8244 18.8338 10.9907 19.0001 11.2023 19.0001H8.17953C8.39112 19.0001 8.55737 18.8338 8.55737 18.6222V18.2444H10.8244ZM8.93521 4.64209C9.1468 4.64209 9.31305 4.80834 9.31305 5.01993C9.31305 5.23152 9.1468 5.39777 8.93521 5.39777H7.42384C7.21225 5.39777 7.046 5.23152 7.046 5.01993C7.046 4.80834 7.21225 4.64209 7.42384 4.64209H8.93521ZM9.31305 7.28698C9.31305 7.49858 9.1468 7.66483 8.93521 7.66483H7.42384C7.21225 7.66483 7.046 7.49858 7.046 7.28698C7.046 7.07539 7.21225 6.90914 7.42384 6.90914H8.93521C9.1468 6.90914 9.31305 7.07539 9.31305 7.28698ZM8.93521 9.1762C9.1468 9.1762 9.31305 9.34245 9.31305 9.55404C9.31305 9.76563 9.1468 9.93188 8.93521 9.93188H7.42384C7.21225 9.93188 7.046 9.76563 7.046 9.55404C7.046 9.34245 7.21225 9.1762 7.42384 9.1762H8.93521ZM8.93521 11.4432C9.1468 11.4432 9.31305 11.6095 9.31305 11.8211C9.31305 12.0327 9.1468 12.1989 8.93521 12.1989H7.42384C7.21225 12.1989 7.046 12.0327 7.046 11.8211C7.046 11.6095 7.21225 11.4432 7.42384 11.4432H8.93521ZM5.53463 11.8211C5.53463 12.0327 5.36838 12.1989 5.15679 12.1989H3.64542C3.43383 12.1989 3.26758 12.0327 3.26758 11.8211C3.26758 11.6095 3.43383 11.4432 3.64542 11.4432H5.15679C5.36838 11.4432 5.53463 11.6095 5.53463 11.8211ZM5.15679 4.64209C5.36838 4.64209 5.53463 4.80834 5.53463 5.01993C5.53463 5.23152 5.36838 5.39777 5.15679 5.39777H3.64542C3.43383 5.39777 3.26758 5.23152 3.26758 5.01993C3.26758 4.80834 3.43383 4.64209 3.64542 4.64209H5.15679ZM5.15679 6.90914C5.36838 6.90914 5.53463 7.07539 5.53463 7.28698C5.53463 7.49858 5.36838 7.66483 5.15679 7.66483H3.64542C3.43383 7.66483 3.26758 7.49858 3.26758 7.28698C3.26758 7.07539 3.43383 6.90914 3.64542 6.90914H5.15679ZM5.15679 9.1762C5.36838 9.1762 5.53463 9.34245 5.53463 9.55404C5.53463 9.76563 5.36838 9.93188 5.15679 9.93188H3.64542C3.43383 9.93188 3.26758 9.76563 3.26758 9.55404C3.26758 9.34245 3.43383 9.1762 3.64542 9.1762H5.15679ZM7.80168 14.8438C7.80168 14.6322 7.62788 14.466 7.42384 14.466H5.15679C4.9452 14.466 4.77895 14.6322 4.77895 14.8438V18.2444H4.02326V14.8438C4.02326 14.2166 4.52957 13.7103 5.15679 13.7103H7.42384C8.05106 13.7103 8.55737 14.2166 8.55737 14.8438V18.2444H7.80168V14.8438Z" fill="currentColor"></path>
          <path d="M4.77912 18.2441H8.55754V18.622C8.55754 18.8336 8.39129 18.9998 8.1797 18.9998H4.40128C4.18969 18.9998 4.02344 18.8336 4.02344 18.622V18.2441H4.77912Z" fill="currentColor"></path>
          <path d="M2.32245 1.01471L10.6274 2.27671C11.1791 2.36739 11.5796 2.83591 11.5796 3.39512V7.73275L11.2773 7.67229C11.164 7.64962 11.0506 7.67985 10.9599 7.74786C10.8768 7.82343 10.8239 7.92922 10.8239 8.04258V3.39512C10.8239 3.2062 10.6879 3.0475 10.5065 3.01728L2.20154 1.76284C2.17887 1.75528 2.1562 1.75528 2.13353 1.75528C2.04284 1.75528 1.95972 1.78551 1.89171 1.84597C1.80103 1.92153 1.75568 2.01977 1.75568 2.13313V17.8665C1.75568 18.0781 1.92949 18.2443 2.13353 18.2443H4.02274V18.6222C4.02274 18.8337 4.18899 19 4.40058 19H2.13353C1.50631 19 1 18.4937 1 17.8665V2.13313C1 1.80062 1.14358 1.48324 1.40051 1.27165C1.65745 1.0525 1.98995 0.961815 2.32245 1.01471Z" fill="currentColor"></path>
    </svg>,
    type: "business" as MoveFormProps["type"],
  },
];

  const [dates, setDates] = useState<(Date | null)[]>(Array(tabs.length).fill(null));
  const [searchTermFrom, setSearchTermFrom] = useState("");
  const [searchTermTo, setSearchTermTo] = useState("");
  const [dropdownOpenFrom, setDropdownOpenFrom] = useState<boolean[]>(Array(tabs.length).fill(false));
  const [dropdownOpenTo, setDropdownOpenTo] = useState<boolean[]>(Array(tabs.length).fill(false));
  const [selectedOptionFrom, setSelectedOptionFrom] = useState<string[]>(Array(tabs.length).fill(""));
  const [selectedOptionTo, setSelectedOptionTo] = useState<string[]>(Array(tabs.length).fill(""));
  const [dateFocused, setDateFocused] = useState(false);

  const inputRefsFrom = useRef<Array<HTMLInputElement | null>>([]);
  const inputRefsTo = useRef<Array<HTMLInputElement | null>>([]);
  const dropdownRefsFrom = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRefsTo = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownInputRefsFrom = useRef<Array<HTMLInputElement | null>>([]);
  const dropdownInputRefsTo = useRef<Array<HTMLInputElement | null>>([]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // ----------------- Handlers -----------------
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    tabRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const handleClear = (index: number, type: "from" | "to") => {
    if (type === "from") {
      const newSelected = [...selectedOptionFrom];
      newSelected[index] = "";
      setSelectedOptionFrom(newSelected);
      setSearchTermFrom("");
      inputRefsFrom.current[index]?.focus();
      const newDropdown = [...dropdownOpenFrom];
      newDropdown[index] = true;
      setDropdownOpenFrom(newDropdown);
      setTimeout(() => dropdownInputRefsFrom.current[index]?.focus(), 0);
    } else {
      const newSelected = [...selectedOptionTo];
      newSelected[index] = "";
      setSelectedOptionTo(newSelected);
      setSearchTermTo("");
      inputRefsTo.current[index]?.focus();
      const newDropdown = [...dropdownOpenTo];
      newDropdown[index] = true;
      setDropdownOpenTo(newDropdown);
      setTimeout(() => dropdownInputRefsTo.current[index]?.focus(), 0);
    }
  };

  const filteredOptionsFrom = cityOptions.filter(opt => opt.toLowerCase().includes(searchTermFrom.toLowerCase()));
  const filteredOptionsTo = cityOptions.filter(opt => opt.toLowerCase().includes(searchTermTo.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const newDropdownFrom = [...dropdownOpenFrom];
      const newDropdownTo = [...dropdownOpenTo];

      if (inputRefsFrom.current[activeTab] && !inputRefsFrom.current[activeTab]?.contains(target) &&
          dropdownRefsFrom.current[activeTab] && !dropdownRefsFrom.current[activeTab]?.contains(target)) {
        newDropdownFrom[activeTab] = false;
        setDropdownOpenFrom(newDropdownFrom);
      }

      if (inputRefsTo.current[activeTab] && !inputRefsTo.current[activeTab]?.contains(target) &&
          dropdownRefsTo.current[activeTab] && !dropdownRefsTo.current[activeTab]?.contains(target)) {
        newDropdownTo[activeTab] = false;
        setDropdownOpenTo(newDropdownTo);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTab, dropdownOpenFrom, dropdownOpenTo]);

  // ----------------- Render -----------------
  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-full mx-auto -translate-y-1/2 sm:-translate-y-1/4 md:-translate-y-1/3">

      {/* Tabs */}
      <div className="flex gap-5 md:gap-6 overflow-x-auto border-b border-gray-200 mb-6 scrollbar-hide whitespace-nowrap">
        {tabs.map((tab, i) => (
          <button
            key={i}
            ref={el => { tabRefs.current[i] = el }}
            className={`flex items-center gap-2 px-0 py-2.5 font-semibold transition-colors border-b ${
              activeTab === i ? "text-[var(--primary)] border-[var(--primary)]" : "text-gray-400 border-transparent"
            } focus:outline-none`}
            onClick={() => handleTabClick(i)}
          >
            <span className="w-5 h-5 shrink-0">{tab.icon}</span>
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map((_, i) => (
        <div key={i} className={`${activeTab === i ? "block" : "hidden"} mt-4`}>
          <div className="flex flex-wrap items-center justify-center max-w-full gap-4">

            {/* From */}
            <DropdownInput
              idPrefix="from"
              label="From (pickup address)"
              index={i}
              selectedOption={selectedOptionFrom}
              setSelectedOption={setSelectedOptionFrom}
              inputRefs={inputRefsFrom}
              dropdownRefs={dropdownRefsFrom}
              dropdownInputRefs={dropdownInputRefsFrom}
              dropdownOpen={dropdownOpenFrom}
              setDropdownOpen={setDropdownOpenFrom}
              searchTerm={searchTermFrom}
              setSearchTerm={setSearchTermFrom}
              options={filteredOptionsFrom}
              handleClear={handleClear}
            />

            {/* To */}
            <DropdownInput
              idPrefix="to"
              label="To (delivery address)"
              index={i}
              selectedOption={selectedOptionTo}
              setSelectedOption={setSelectedOptionTo}
              inputRefs={inputRefsTo}
              dropdownRefs={dropdownRefsTo}
              dropdownInputRefs={dropdownInputRefsTo}
              dropdownOpen={dropdownOpenTo}
              setDropdownOpen={setDropdownOpenTo}
              searchTerm={searchTermTo}
              setSearchTerm={setSearchTermTo}
              options={filteredOptionsTo}
              handleClear={handleClear}
            />

            {/* Date */}
            <div className="flex flex-col flex-[1_1_180px] min-w-[160px] relative">
               <label
                  htmlFor="move-date"
                  className={`absolute block text-[12px] leading-[16px] -mt-4 px-[4px] top-2 left-[16px] w-max z-10 bg-white transition-colors duration-300 ease-in-out ${
                    dateFocused ? "text-[var(--primary)]" : "text-gray-500"
                  }`}
                >
                  Preferred moving date
                </label>

                <span
                  className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                    dateFocused ? "text-[var(--primary)]" : "text-gray-400"
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.74609 3V5.25" stroke="currentColor" strokeWidth={1.1} strokeMiterlimit={10} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M12.7539 3V5.25" stroke="currentColor" strokeWidth={1.1} strokeMiterlimit={10} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M3.37109 8.31738H16.1211" stroke="currentColor" strokeWidth={1.1} strokeMiterlimit={10} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M3 11.2575V7.875C3 5.625 4.125 4.125 6.75 4.125H12.75C15.375 4.125 16.5 5.625 16.5 7.875V14.25C16.5 16.5 15.375 18 12.75 18H6.75C4.125 18 3 16.5 3 14.25" stroke="currentColor" strokeWidth={1.1} strokeMiterlimit={10} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M12.5232 11.7769H12.53" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M12.5232 14.0269H12.53" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M9.74979 11.7769H9.75652" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M9.74979 14.0269H9.75652" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M6.9744 11.7769H6.98113" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                      <path d="M6.9744 14.0269H6.98113" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round"  strokeLinejoin="round"></path>
                  </svg>
                </span>
               <Flatpickr
                id="move-date"
                placeholder="Select a date"
                value={dates[i] && isValid(dates[i]) ? format(dates[i], "yyyy-MM-dd") : ""}
                onChange={(datesArr, dateStr) => {
                  const newDate = datesArr[0] ?? parse(dateStr, "yyyy-MM-dd", new Date());
                  const updatedDates = [...dates];
                  updatedDates[i] = isValid(newDate) ? newDate : null;
                  setDates(updatedDates);
                }}
                options={{
                  dateFormat: "Y-m-d",
                  altFormat: "Y-m-d",
                  allowInput: true,
                  clickOpens: true,
                  disableMobile: true,
                  onReady: (_, __, instance) => {
                    if (instance.altInput) {
                      instance.altInput.addEventListener("mousedown", (e) => {
                        if (!instance.isOpen) {
                          e.preventDefault(); // förhindra default focus
                          setTimeout(() => instance.open(), 0);
                        }
                      });
                    }
                  },
                }}
                onOpen={() => setDateFocused(true)}
                onClose={() => setDateFocused(false)}
                className="w-full pl-11 pr-3 h-11 border rounded-md text-gray-primary bg-white cursor-pointer transition outline-none border-gray-300 focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)]"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col flex-[1_1_180px] min-w-[160px] [@media(min-width:861px)]:flex-none">
              <Button text="Get Quote" variant="primary" className="w-full justify-center" />
            </div>

          </div>
        </div>
      ))}

    </div>
  );
}

// ----------------- DropdownInput Component -----------------
function DropdownInput({
  idPrefix, label, index, selectedOption, setSelectedOption,
  inputRefs, dropdownRefs, dropdownInputRefs, dropdownOpen, setDropdownOpen,
  searchTerm, setSearchTerm, options, handleClear
}: DropdownInputProps) {
  return (
    <div className="flex flex-col flex-[1_1_180px] min-w-[160px] relative">
      <label htmlFor={`${idPrefix}-${index}`} className={`absolute block text-[12px] leading-[16px] -mt-4 px-[4px] top-2 left-[16px] w-max z-10 bg-white transition-colors duration-300 ease-in-out ${dropdownOpen[index] ? "text-[var(--primary)]" : "text-gray-500"}`}>{label}</label>
      
      <input
        type="text"
        placeholder="Enter city or address..."
        readOnly
        value={selectedOption[index]}
        ref={el => { inputRefs.current[index] = el }}
        onClick={() => {
          if (!selectedOption[index]) {
            const newDropdown = [...dropdownOpen]; newDropdown[index] = true; setDropdownOpen(newDropdown);
            setTimeout(() => dropdownInputRefs.current[index]?.focus(), 0);
          }
        }}
       className={`w-full pl-11 pr-3 h-11 border rounded-md text-primary bg-white cursor-pointer transition outline-none ${
          dropdownOpen[index]
            ? "border-gray-300"
            : "border-gray-300 w-full pl-11 pr-3 h-11 border rounded-md focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none"
        }`}
      />
      <span
        className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300 ease-in-out ${
          dropdownOpen[index] ? "text-[var(--primary)]" : "text-gray-400"
        }`}
      >
        {/* SVG icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.3441 8.73258C12.3441 10.0226 11.3016 11.0726 10.0041 11.0726C8.70656 11.0726 7.66406 10.0301 7.66406 8.73258C7.66406 7.43508 8.71406 6.39258 10.0041 6.39258C10.2591 6.39258 10.5066 6.43008 10.7316 6.50508"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.4857 4.22505C8.7632 1.14255 15.1157 2.20005 16.2857 7.38255C17.1482 11.1925 14.7782 14.4175 12.7007 16.4125C11.1932 17.8675 8.8082 17.8675 7.2932 16.4125C5.2232 14.41 2.8457 11.185 3.7157 7.37505"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Clear button */}
      <button
        type="button"
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ${selectedOption[index] ? "block" : "hidden"}`}
        onClick={() => handleClear(index, idPrefix as "from" | "to")}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6082 13.6062L6.53711 6.53516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.4297 7.71387L13.6082 6.5354" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.53516 13.606L9.87022 10.2709" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.6082 13.6062L6.53711 6.53516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {dropdownOpen[index] && (
         <div
          ref={el => {dropdownRefs.current[index] = el}}
          className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-2.5">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              ref={el => {dropdownInputRefs.current[index] = el}}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-2.5 w-full h-10 px-3 rounded-md text-sm focus:[border:1px_solid_var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none border-gray-300 border"
            />
          </div>
          <ul className="max-h-44 overflow-y-auto">
            {options.map((opt, idx) => (
              <li
                key={idx}
                className="flex items-center px-3 py-2 cursor-pointer rounded-md hover:bg-gray-100 hover:px-4 transition-all duration-200 align-middle"
                onClick={() => {
                  const newSelected = [...selectedOption];
                  newSelected[index] = opt;
                  setSelectedOption(newSelected);
                  const newDropdown = [...dropdownOpen];
                  newDropdown[index] = false;
                  setDropdownOpen(newDropdown);
                  setSearchTerm("");
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 flex-shrink-0 box"
                >
                  <path
                    d="M12.3441 8.73258C12.3441 10.0226 11.3016 11.0726 10.0041 11.0726C8.70656 11.0726 7.66406 10.0301 7.66406 8.73258C7.66406 7.43508 8.71406 6.39258 10.0041 6.39258C10.2591 6.39258 10.5066 6.43008 10.7316 6.50508"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.4857 4.22505C8.7632 1.14255 15.1157 2.20005 16.2857 7.38255C17.1482 11.1925 14.7782 14.4175 12.7007 16.4125C11.1932 17.8675 8.8082 17.8675 7.2932 16.4125C5.2232 14.41 2.8457 11.185 3.7157 7.37505"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{opt}</span>
              </li>
            ))}
          </ul>
          <style jsx>{`
            ul::-webkit-scrollbar {
              width: 6px;
            }
            ul::-webkit-scrollbar-track {
              background: #f0f0f0;
            }
            ul::-webkit-scrollbar-thumb {
              background-color: var(--primary);
              border-radius: 3px;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}