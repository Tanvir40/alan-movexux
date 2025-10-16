// src/components/contactUsForm.tsx
"use client";
import Button from "@/components/Button";
import React, { useState } from "react";

// Definiera typ för formulärdata
interface FormData {
  name: string;
  email: string;
  service: string; // <-- Lägg till service
  message: string;
}

export default function ContactUsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "", // <-- initiera service
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Här kan du lägga till fetch() för backend API eller Xano
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
    >
      <div>
        <label className="block mb-1 font-medium text-[var(--primary)]">Your name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full p-2.5 border rounded-md border-gray-300 focus:ring-2 focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-[var(--primary)]">Your email address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full p-2.5 border rounded-md border-gray-300 focus:ring-2 focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none"
          required
        />
      </div>
      <div>
      <label
        htmlFor="service"
        className="block mb-1 font-medium text-[var(--primary)]"
      >
        Select Service
      </label>
      <select
        id="service"
        name="service"
        required
        value={formData.service || ""}
        onChange={(e) =>
          setFormData({ ...formData, service: e.target.value })
        }
        className="w-full p-2.5 border rounded-md border-gray-300 focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none focus:ring-2"
      >
        <option value="" disabled>
          -- Please choose a service --
        </option>
        <option value="local-move">Local Move</option>
        <option value="international-move">International Move</option>
        <option value="office-relocation">Office Relocation</option>
        <option value="packing-services">Packing Services</option>
        <option value="packing-services">Other</option>
      </select>
    </div>


      <div>
        <label className="block mb-1 font-medium text-[var(--primary)]">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Type Your message here..."
          className="w-full p-2.5 border rounded-md border-gray-300 focus:ring-2 focus:border-[var(--primary)] focus:[box-shadow:0_0_0_3px_rgba(0,122,255,0.2)] focus:outline-none"
          required
        ></textarea>
      </div>
      <div className="flex items-start">
      <div>
        <input
          type="hidden"
          name="company.terms_of_service"
          value="0"
          autoComplete="off"
        />
        <input
          required
          type="checkbox"
          value="1"
          name="company.terms_of_service"
          id="company_terms_of_service"
          className="rounded border-secondary accent-[var(--primary)] focus:accent-[var(--primary-800)] hover:accent-[var(--primary-800)] w-5 h-5"
        />
      </div>
      <div className="ml-3">
        <label
          htmlFor="company_terms_of_service"
          className="leading-[160%] tracking-tight text-[0.875rem]"
        >
          By registering, I accept the Terms and Conditions and acknowledge the
          Privacy Policy.
        </label>
      </div>
    </div>

      <Button text="Send Message" variant="primary" className="w-full justify-center" />
    </form>
  );
}