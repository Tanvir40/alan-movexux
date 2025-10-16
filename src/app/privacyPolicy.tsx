// src/pages/privacyPolicy.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative bg-cover bg-top bg-[var(--primary)] text-white">
        <Header />
        <div className="container mx-auto pt-20 pb-12 flex justify-center h-full">
          <div className="md:w-4/5 text-center flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl leading-tight font-bold tracking-wide">
              Privacy Policy
            </h1>
            <p>
              Your privacy is important to us. This page explains how Movexos
              collects, uses, and protects your personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="scroll-smooth">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="w-full md:w-[70%] prose prose-lg max-w-none">
              <p id="section1" className="text-xl font-bold mb-6">Information We Collect</p>
                <p>
                  At Movexos, we are committed to protecting your privacy and ensuring transparency 
                  in how we handle your personal data. When you use our website, request a moving quote, 
                  or engage with our services, we may collect personal details such as your name, email address, 
                  phone number, pickup and destination addresses, and specific requirements related to your move. 
                  Additionally, we may gather technical information such as your IP address, browser type, 
                  device identifiers, and pages visited on our site in order to improve functionality and security. 
                  This data is collected through both direct input (forms, quotes, customer support) and indirect means 
                  (cookies, analytics tools, and log files).  
                </p>
                <ul className="list-disc ml-6 mb-4 py-6">
                <li>Name and contact details (email, phone number)</li>
                <li>Moving addresses and special requirements</li>
                <li>Billing and payment information</li>
                <li>Technical data such as IP address, browser type, and device identifiers</li>
              </ul>
                <p>
                  In certain cases, we may also collect sensitive information, such as special requirements for fragile 
                  items, customs documentation, or insurance details. We only collect this type of information when it is 
                  essential to provide the requested service, and we ensure it is handled with strict confidentiality.  
                  By providing your personal data, you acknowledge that we may store, process, and transfer this data 
                  in accordance with this Privacy Policy and applicable data protection laws.  
                </p>

                <p id="section2" className="text-xl font-bold my-6">How We Use Your Information</p>
                <p>
                  The information we collect is used to provide you with the best possible moving experience. 
                  Primarily, your data allows us to generate accurate quotes, manage bookings, and coordinate with 
                  our trusted network of transport partners. In addition, we use this data to personalize your 
                  interactions with us, ensuring that the information and offers you receive are relevant to your 
                  specific moving needs.  
                </p>
                <p>
                  Beyond direct service delivery, we may also use your data to enhance our website’s performance, 
                  develop new features, and analyze market trends to improve customer satisfaction. We may contact you 
                  by email, phone, or SMS regarding updates to your booking, service confirmations, or important 
                  information relating to your international move. With your consent, we may also send you promotional 
                  communications, newsletters, or surveys designed to improve our services. You may opt out of such 
                  communications at any time.  
                </p>

                <p id="section3" className="text-xl font-bold my-6">Data Protection</p>
                <p>
                  Movexos employs industry-standard technical and organizational measures to safeguard your data. 
                  This includes encryption, firewalls, secure servers, and strict access controls to ensure that 
                  your personal information is protected from unauthorized access, misuse, or disclosure. We 
                  regularly review our security practices and update them in line with technological advancements 
                  and regulatory requirements.  
                </p>
                <p>
                  While we strive to protect your data, no transmission of information over the internet can be 
                  guaranteed to be 100% secure. As such, we encourage you to use caution when sharing sensitive 
                  information online. In the unlikely event of a data breach, we will notify you and the relevant 
                  authorities in compliance with applicable laws.  
                </p>

                <p id="section4" className="text-xl font-bold my-6">Data Retention</p>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy or as required by law. For instance, booking details and transaction records 
                  may be stored for a number of years in order to comply with tax, legal, and regulatory obligations. 
                  Once your data is no longer required, we securely delete or anonymize it, ensuring it cannot be 
                  reconstructed or misused.  
                </p>

                <p id="section5" className="text-xl font-bold my-6">Your Rights</p>
                <p>
                  You have full control over your personal data and may exercise your rights under applicable 
                  data protection laws. This includes the right to request access to the data we hold about you, 
                  correct inaccuracies, or request deletion where appropriate. You may also restrict or object to 
                  certain types of processing, such as direct marketing. If we rely on your consent to process your 
                  data, you may withdraw that consent at any time without affecting the lawfulness of prior processing.  
                </p>
                <p>
                  To exercise these rights, please contact us at the details provided in the “Contact Us” section below. 
                  We will respond to your request promptly and in accordance with applicable regulations, typically within 
                  30 days.  
                </p>

                <p id="section6" className="text-xl font-bold my-6">Cookies and Tracking Technologies</p>
                <p>
                  Our website uses cookies and similar tracking technologies to improve user experience, analyze 
                  website traffic, and tailor content to your preferences. Cookies may be session-based (deleted 
                  when you close your browser) or persistent (stored on your device until they expire or are deleted). 
                  You can control or disable cookies through your browser settings, but please note that this may affect 
                  certain functionalities of our website.  
                </p>
                <ul className="list-disc ml-6 my-6">
                <li>Session cookies that expire when you close your browser</li>
                <li>Persistent cookies that remain for a set period</li>
                <li>Analytics cookies to understand traffic and usage patterns</li>
                <li>Functional cookies to remember preferences</li>
              </ul>

                <p id="section7" className="text-xl font-bold my-6">International Data Transfers</p>
                <p>
                  Because Movexos operates on a global scale, your personal data may be transferred and processed in 
                  countries outside of your country of residence, including jurisdictions that may not provide the same 
                  level of data protection. However, we take steps to ensure your information is adequately safeguarded, 
                  including using Standard Contractual Clauses and other approved mechanisms as required under GDPR and 
                  other applicable laws.  
                </p>

                <p id="section8" className="text-xl font-bold my-6">Updates to This Privacy Policy</p>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal 
                  obligations, or business operations. When we make significant changes, we will notify you via our 
                  website, email, or other appropriate communication channels. The date of the most recent revision will 
                  always be displayed at the top of this page.  
                </p>

                <p id="section9" className="text-xl font-bold my-6">Contact Us</p>
                <p>
                  If you have questions about this Privacy Policy, or if you would like to exercise your rights or 
                  make a complaint, please contact us at:  
                </p>
                <ul className="list-disc ml-6 mb-4 my-6">
                <li>Access and review the data we hold about you</li>
                <li>Correct inaccuracies or update information</li>
                <li>Request deletion of your data where legally applicable</li>
                <li>Object to or restrict certain processing, such as marketing</li>
              </ul>
                <p id="section10" className="text-xl font-bold my-6">Legal Basis for Processing</p>
                <p>
                  Under applicable data protection laws, including the GDPR, we rely on specific legal grounds to process your personal data. These include the necessity to fulfill a contract (e.g., providing moving services), compliance with legal obligations, legitimate interests (e.g., fraud prevention, service improvement), and your consent where required.  
                  We ensure that our processing activities are always aligned with these legal bases, and we do not process personal data for unrelated purposes without a lawful basis.  
                </p>

                <p id="section11" className="text-xl font-bold my-6">Third-Party Service Providers</p>
                <p>
                  Movexos works with carefully selected third-party service providers to facilitate our operations. These may include moving and logistics partners, payment processors, IT service providers, marketing platforms, and analytics tools. All third parties we engage with are contractually bound to protect your personal data and to use it solely for the purposes we specify.  
                  We do not sell your personal information to any third party.  
                </p>

                <p id="section12" className="text-xl font-bold my-6">Marketing and Communications</p>
                <p>
                  With your consent, we may send you promotional emails, newsletters, or offers related to our services. You have the right to unsubscribe from these communications at any time by clicking the “unsubscribe” link in the email or contacting our support team.  
                  Even if you opt out of marketing communications, we may still contact you with important information about your bookings or legal obligations.  
                </p>

                <p id="section13" className="text-xl font-bold my-6">Children’s Privacy</p>
                <p>
                  Our services are not directed at individuals under the age of 16, and we do not knowingly collect personal data from children. If we become aware that a child has provided personal information without parental consent, we will take immediate steps to delete that data.  
                </p>

                <p id="section14" className="text-xl font-bold my-6">Data Portability</p>
                <p>
                  You have the right, where applicable, to receive the personal data you have provided to us in a structured, commonly used, and machine-readable format. This allows you to transfer your information to another service provider if desired. Requests for data portability can be made by contacting our Data Protection Office.  
                </p>

                <p id="section15" className="text-xl font-bold my-6">Automated Decision-Making</p>
                <p>
                  Movexos does not engage in fully automated decision-making processes, including profiling, that have a legal or significant effect on individuals. Any automated systems we use are designed to assist our staff in providing a better service experience and are always subject to human review.  
                </p>

                <p id="section16" className="text-xl font-bold my-6">Complaints</p>
                <p>
                  If you believe that your data has been processed in violation of applicable laws, you have the right to file a complaint with a relevant data protection authority. In the UK, this would be the Information Commissioner’s Office (ICO).  
                  We encourage you to contact us first so that we can promptly address and resolve any issues.  
                </p>

                <p id="section17" className="text-xl font-bold my-6">Security Breach Notification</p>
                <p>
                  In the unlikely event of a data breach that may put your personal information at risk, Movexos will take immediate steps to investigate, mitigate the breach, and notify affected individuals as required by law. We will also report the breach to the relevant authorities promptly in accordance with regulatory requirements.  
                </p>

                <p id="section18" className="text-xl font-bold my-6">International Operations</p>
                <p>
                  Given our global operations, personal data may be stored, processed, or transmitted internationally. We implement robust safeguards, including encryption, contractual commitments, and compliance with recognized international data transfer mechanisms to ensure that your information remains protected regardless of where it is processed.  
                </p>

                <p id="section19" className="text-xl font-bold my-6">Retention of Data for Legal and Business Purposes</p>
                <p>
                  Certain records, including financial and transactional data, may be retained for longer periods to comply with legal, tax, and regulatory obligations. We regularly review retention periods to ensure that personal data is not held longer than necessary and is securely deleted or anonymized when no longer required.  
                </p>

                <p id="section20" className="text-xl font-bold my-6">Contact Information and Data Protection Officer</p>
                <p>
                  For questions, requests, or concerns regarding your personal data, you can reach out directly to our Data Protection Officer:  
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@movexos.com" className="text-[var(--primary)]">
                    privacy@Movexos.com
                  </a>
                  <br />
                  <strong>Postal Address:</strong> Movexos International, Data Protection Office,  
                  123 Global Trade Avenue, London, UK.  
                </p>
                <p>
                  Our Data Protection Officer ensures compliance with all relevant privacy laws and serves as your point of contact for any data-related inquiries.  
                </p>

            </div>

            {/* Sidebar / TOC */}
            <aside className="w-full md:w-[30%] md:pl-6 border-l border-gray-200">
              <nav className="ml-1.5 flex flex-col gap-4 sticky top-24">
                <a href="#section1" className="text-[var(--primary)] hover:underline">
                  Information We Collect
                </a>
                <a href="#section2" className="text-[var(--primary)] hover:underline">
                  How We Use Your Information
                </a>
                <a href="#section3" className="text-[var(--primary)] hover:underline">
                  Data Protection
                </a>
                <a href="#section4" className="text-[var(--primary)] hover:underline">
                  Data Retention
                </a>
                <a href="#section5" className="text-[var(--primary)] hover:underline">
                  Your Rights
                </a>
                <a href="#section6" className="text-[var(--primary)] hover:underline">
                  Cookies and Tracking Technologies
                </a>
                <a href="#section7" className="text-[var(--primary)] hover:underline">
                  International Data Transfers
                </a>
                <a href="#section8" className="text-[var(--primary)] hover:underline">
                  Updates to This Privacy Policy
                </a>
                <a href="#section9" className="text-[var(--primary)] hover:underline">
                  Contact Us
                </a>
                <a href="#section10" className="text-[var(--primary)] hover:underline">
                  Legal Basis for Processing
                </a>
                <a href="#section11" className="text-[var(--primary)] hover:underline">
                  Third-Party Service Providers
                </a>
                <a href="#section12" className="text-[var(--primary)] hover:underline">
                  Marketing and Communications
                </a>
                <a href="#section13" className="text-[var(--primary)] hover:underline">
                  Children’s Privacy
                </a>
                <a href="#section14" className="text-[var(--primary)] hover:underline">
                  Data Portability
                </a>
                <a href="#section15" className="text-[var(--primary)] hover:underline">
                  Automated Decision-Making
                </a>
                <a href="#section16" className="text-[var(--primary)] hover:underline">
                  Complaints
                </a>
                <a href="#section17" className="text-[var(--primary)] hover:underline">
                  Security Breach Notification
                </a>
                <a href="#section18" className="text-[var(--primary)] hover:underline">
                  International Operations
                </a>
                <a href="#section19" className="text-[var(--primary)] hover:underline">
                  Retention of Data for Legal and Business Purposes
                </a>
                <a href="#section20" className="text-[var(--primary)] hover:underline">
                  Contact Information and Data Protection Officer
                </a>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
