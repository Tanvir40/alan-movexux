// src/pages/cookiePolicy.tsx
"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <>
      {/* ✅ Banner Section */}
      <section className="relative bg-cover bg-top bg-[var(--primary)] text-white">
        <Header />
        <div className="container mx-auto pt-20 pb-12 flex justify-center h-full">
          <div className="md:w-4/5 text-center flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl leading-tight font-bold tracking-wide">
              Cookie Policy
            </h1>
            <p>
              This Cookie Policy explains how Movexos uses cookies and similar
              technologies to enhance your browsing experience, improve our
              services, and ensure our website functions effectively. By
              continuing to use our website, you consent to the use of cookies
              in accordance with this policy.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Content Section */}
      <section className="scroll-smooth">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row gap-10">
            {/* ✅ Main Content */}
            <div className="w-full md:w-[70%] prose prose-lg max-w-none">
              <p id="section1" className="text-xl font-bold my-6">
                What Are Cookies?
              </p>
              <p>
                Cookies are small text files stored on your device when you visit
                a website. They allow the website to recognize your device,
                remember your preferences, and enhance your browsing experience.
              </p>
              <p>
                Session cookies are automatically deleted when you close your
                browser, while persistent cookies remain until they expire or are
                deleted manually.
              </p>

              <p id="section2" className="text-xl font-bold my-6">
                Why We Use Cookies
              </p>
              <p>
                Movexos uses cookies to provide a seamless and personalized user
                experience. These cookies help us remember your login details,
                improve website performance, and deliver relevant content.
              </p>
              <ul>
                <li>Enhancing site navigation and usability.</li>
                <li>Remembering your preferences for faster access.</li>
                <li>Analyzing site performance and usage statistics.</li>
                <li>Delivering tailored promotions and services.</li>
              </ul>

              <p id="section3" className="text-xl font-bold my-6">
                Types of Cookies We Use
              </p>
              <ul>
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Essential for the
                  website to function.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Collect anonymous data to
                  improve the site.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember preferences like
                  language or region.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Track browsing habits for
                  personalized ads.
                </li>
              </ul>

              <p id="section4" className="text-xl font-bold my-6">
                First-Party vs. Third-Party Cookies
              </p>
              <p>
                Movexos uses both first-party and third-party cookies. For
                example, Google Analytics may measure site traffic and user
                engagement.
              </p>

              <p id="section5" className="text-xl font-bold my-6">
                Cookies for Analytics
              </p>
              <p>
                Analytics cookies help us understand usage patterns and improve
                our website performance. These do not personally identify you.
              </p>

              <p id="section6" className="text-xl font-bold my-6">
                Cookies for Advertising
              </p>
              <p>
                Advertising cookies help us deliver relevant marketing content
                and track campaign performance.
              </p>

              <p id="section7" className="text-xl font-bold my-6">
                Managing and Disabling Cookies
              </p>
              <ul>
                <li>Check your browser settings for cookie management tools.</li>
                <li>Use privacy modes like “Incognito.”</li>
                <li>Install browser extensions that block tracking cookies.</li>
              </ul>

              <p id="section8" className="text-xl font-bold my-6">
                Consent to Cookies
              </p>
              <p>
                By using our website, you consent to cookies. You may see a
                cookie banner requesting consent. Preferences can be updated at
                any time.
              </p>

              <p id="section9" className="text-xl font-bold my-6">
                Changes to This Cookie Policy
              </p>
              <p>
                Movexos may update this Cookie Policy to reflect legal or
                technological changes. Review it periodically to stay informed.
              </p>

              <p id="section10" className="text-xl font-bold my-6">
                Contact Us
              </p>
              <p>
                If you have questions, email us at{" "}
                <a
                  href="mailto:privacy@movexos.com"
                  className="text-[var(--primary)]"
                >
                  privacy@movexos.com
                </a>
                .
              </p>

              <p id="section11" className="text-xl font-bold my-6">
                Cookies and Personal Data
              </p>
              <p>
                While cookies do not usually contain personal data, some may be
                linked to information you provide. This helps us personalize your
                experience.
              </p>
              <p>
                Any personal data collected through cookies is processed in
                accordance with our{" "}
                <Link href="/privacyPolicy" className="text-[var(--primary)]">
                  Privacy Policy
                </Link>
                .
              </p>

              <p id="section12" className="text-xl font-bold my-6">
                Essential vs. Non-Essential Cookies
              </p>
              <ul>
                <li>
                  <strong>Essential:</strong> Authentication, session, security.
                </li>
                <li>
                  <strong>Non-essential:</strong> Marketing, analytics,
                  personalization.
                </li>
              </ul>

              <p id="section13" className="text-xl font-bold my-6">
                Third-Party Integrations
              </p>
              <p>
                Our website may include social media widgets or embedded content.
                These may set cookies to track interaction with their services.
              </p>

              <p id="section14" className="text-xl font-bold my-6">
                Retention Period of Cookies
              </p>
              <p>
                Session cookies are removed when you close your browser, while
                persistent cookies remain until expired or deleted.
              </p>

              <p id="section15" className="text-xl font-bold my-6">
                International Data Transfers
              </p>
              <p>
                Some third-party providers may transfer cookie data across
                countries. Movexos ensures compliance with GDPR and other
                standards.
              </p>

              <p id="section16" className="text-xl font-bold my-6">
                Security of Cookies
              </p>
              <p>
                Cookies are transmitted securely via HTTPS. Still, users are
                encouraged to clear cookies periodically.
              </p>

              <p id="section17" className="text-xl font-bold my-6">
                Cookies on Mobile Devices
              </p>
              <p>
                Cookies also apply to mobile browsers. You can manage them
                through device settings.
              </p>

              <p id="section18" className="text-xl font-bold my-6">
                Alternative Tracking Technologies
              </p>
              <p>
                Movexos may also use pixels, beacons, or local storage for
                tracking purposes. These are treated with the same privacy
                standards.
              </p>

              <p id="section19" className="text-xl font-bold my-6">
                Your Responsibilities as a User
              </p>
              <ul>
                <li>Review cookie notices regularly.</li>
                <li>Update browser or device settings.</li>
                <li>Contact us for more information.</li>
              </ul>

              <p id="section20" className="text-xl font-bold my-6">
                Legal Compliance
              </p>
              <p>
                Movexos complies with GDPR, CCPA, and other privacy regulations.
                Consent is obtained for all non-essential cookies.
              </p>
            </div>

            {/* ✅ Sidebar Navigation */}
            <aside className="w-full md:w-[30%] md:pl-6 border-l border-gray-200">
              <nav className="ml-1.5 flex flex-col gap-4 sticky top-24">
                {[
                  "What Are Cookies?",
                  "Why We Use Cookies",
                  "Types of Cookies We Use",
                  "First-Party vs. Third-Party Cookies",
                  "Cookies for Analytics",
                  "Cookies for Advertising",
                  "Managing and Disabling Cookies",
                  "Consent to Cookies",
                  "Changes to This Cookie Policy",
                  "Contact Us",
                  "Cookies and Personal Data",
                  "Essential vs. Non-Essential Cookies",
                  "Third-Party Integrations",
                  "Retention Period of Cookies",
                  "International Data Transfers",
                  "Security of Cookies",
                  "Cookies on Mobile Devices",
                  "Alternative Tracking Technologies",
                  "Your Responsibilities as a User",
                  "Legal Compliance",
                ].map((title, i) => (
                  <a
                    key={i}
                    href={`#section${i + 1}`}
                    className="text-[var(--primary)] hover:underline"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
