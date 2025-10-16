// src/pages/termsConditions.tsx

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
              Terms & Conditions
            </h1>
            <p>
              Welcome to movexos. These Terms & Conditions explain the rules, rights, 
              and responsibilities that apply when you use our services. Please read 
              them carefully, as they establish important legal obligations between 
              you and movexos.
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
              <p id="section1" className="text-xl font-bold my-6">Introduction</p>
              <p>
                Welcome to movexos. These Terms and Conditions (“Terms”) govern your use of our website, 
                services, and any interactions with our team or partners. By accessing or using our services, 
                you agree to comply with these Terms. Please read them carefully, as they establish 
                important legal rights and obligations. If you do not agree with any part of these Terms, 
                you should refrain from using our services.  
              </p>
              <p>
                These Terms apply to all customers, whether you are booking a local move, an international relocation, 
                or using any additional services offered by movexos. We reserve the right to update or modify 
                these Terms at any time, and it is your responsibility to review them periodically.  
              </p>

              <p id="section2" className="text-xl font-bold my-6">Acceptance of Terms</p>
              <p>
                By using our services, you explicitly accept and agree to be bound by these Terms. 
                Acceptance may occur when you:  
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Book or schedule any service via our website or customer portal.</li>
                <li>Interact with movexos representatives for quotations or consultations.</li>
                <li>Provide personal information or payment details in connection with our services.</li>
              </ul>
              <p>
                If you are using our services on behalf of a business or another entity, you confirm that you 
                have the authority to bind that entity to these Terms.  
              </p>

              <p id="section3" className="text-xl font-bold my-6">Service Usage</p>
              <p>
                movexos provides a wide range of moving and relocation services, including packing, transportation, 
                and storage. By using our services, you agree to:  
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide accurate and complete information regarding your move.</li>
                <li>Follow all applicable laws and regulations for the transportation of goods.</li>
                <li>Ensure that prohibited, hazardous, or illegal items are not included in your shipment.</li>
              </ul>
              <p>
                We reserve the right to refuse service or cancel bookings if the terms of use are violated or 
                if we determine, in our sole discretion, that service cannot be safely or legally provided.  
              </p>

              <p id="section4" className="text-xl font-bold my-6">Payment Terms</p>
              <p>
                All services are subject to payment according to the rates provided at the time of booking. 
                Payments must be made in full unless otherwise agreed.  
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Invoices are payable upon receipt unless prior arrangements have been made.</li>
                <li>Accepted payment methods include credit/debit cards, bank transfers, and approved online payment systems.</li>
                <li>Failure to make timely payment may result in suspension or cancellation of services.</li>
              </ul>
              <p>
                Any additional charges arising from changes in the move, unforeseen circumstances, or optional services 
                will be invoiced separately.  
              </p>

              <p id="section5" className="text-xl font-bold my-6">Liability</p>
              <p>
                movexos strives to provide the highest standard of service; however, liability for loss or damage 
                to goods is limited as outlined in our service agreements and applicable law.  
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>We are not responsible for items improperly packed or labeled by the customer.</li>
                <li>We are not liable for delays caused by third-party carriers, customs inspections, or natural events.</li>
                <li>Insurance coverage is available and recommended for high-value or fragile items.</li>
              </ul>

              <p id="section6" className="text-xl font-bold my-6">Cancellations and Refunds</p>
              <p>
                Customers may cancel or reschedule services according to the policy provided at the time of booking.  
                Refunds will be issued for eligible cancellations and processed in accordance with payment methods used.  
                Any non-refundable deposits or fees will be specified during the booking process.  
              </p>

              <p id="section7" className="text-xl font-bold my-6">Customer Obligations</p>
              <p>
                To ensure safe and efficient service, customers are required to:  
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide accurate pickup and delivery information.</li>
                <li>Ensure that all items are ready for transport at the scheduled time.</li>
                <li>Comply with instructions provided by our moving personnel.</li>
                <li>Notify movexos of any special requirements or restrictions well in advance.</li>
              </ul>

              <p id="section8" className="text-xl font-bold my-6">Intellectual Property</p>
              <p>
                All content on the movexos website, including text, graphics, logos, and images, is the intellectual property 
                of movexos or its licensors. Customers may not reproduce, distribute, or create derivative works without 
                express written consent. Unauthorized use of our intellectual property may result in legal action.  
              </p>

              <p id="section9" className="text-xl font-bold my-6">Governing Law</p>
              <p>
                These Terms are governed by the laws of the jurisdiction in which movexos operates. Any disputes arising from 
                these Terms or services provided by movexos will be subject to the exclusive jurisdiction of the appropriate courts.  
              </p>

              <p id="section10" className="text-xl font-bold my-6">Changes to Terms</p>
              <p>
                movexos reserves the right to modify or update these Terms at any time. Updated Terms will be posted 
                on our website with the effective date. Continued use of our services after changes indicates acceptance 
                of the updated Terms. Customers are encouraged to review the Terms regularly to stay informed.  
              </p>

                <p id="section11" className="text-xl font-bold my-6">Account Responsibilities</p>
                <p>
                  As a registered user of movexos, you are responsible for maintaining the confidentiality of your 
                  account details, including your username, password, and any other security credentials associated 
                  with your account. You agree not to share your login information with third parties, and you accept 
                  full liability for any activity conducted through your account. movexos cannot be held responsible 
                  for losses or damages resulting from your failure to protect your login credentials.
                </p>
                <p>
                  Users must ensure that the information provided during registration is accurate and up-to-date. 
                  Misrepresentation or fraudulent activity may result in immediate suspension or termination of your 
                  account without prior notice.
                </p>

                <p id="section12" className="text-xl font-bold my-6">Service Availability</p>
                <p>
                  movexos aims to provide uninterrupted access to our services. However, we do not guarantee that 
                  the platform will always be available, free from errors, or operate without disruptions. Scheduled 
                  maintenance, technical upgrades, or unforeseen circumstances such as internet outages may cause 
                  temporary unavailability of the service.
                </p>
                <p>
                  While we make every effort to restore services promptly, movexos will not be held liable for any 
                  financial loss, inconvenience, or damages caused by service downtime. Users are encouraged to 
                  regularly back up their booking information and correspondence.
                </p>

                <p id="section13" className="text-xl font-bold my-6">Pricing and Payments</p>
                <p>
                  All prices displayed on movexos are indicative and subject to change based on route, timing, 
                  vehicle availability, and other relevant factors. Final pricing will be confirmed before a booking 
                  is processed. By completing a booking, you agree to the charges applicable at that time.
                </p>
                <p>
                  Payments must be made using authorized methods as displayed on the platform. movexos reserves 
                  the right to refuse transactions suspected of fraud or unauthorized activity. In certain cases, 
                  additional verification may be required before a payment is processed.
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Payments are due at the time of booking unless otherwise agreed.</li>
                  <li>Invoices are provided electronically and accessible via your account dashboard.</li>
                  <li>Late or failed payments may result in booking cancellations.</li>
                </ul>

                <p id="section14" className="text-xl font-bold my-6">Cancellations and Refunds</p>
                <p>
                  Users may cancel their bookings subject to the cancellation policies applicable to the service 
                  selected. Refund eligibility will depend on the timing of the cancellation and the terms agreed 
                  upon at the time of booking. Certain fees may be non-refundable, including deposits, administrative 
                  costs, or third-party service charges.
                </p>
                <p>
                  Refunds, when applicable, will be processed through the original payment method within a reasonable 
                  time frame. movexos reserves the right to deny refund requests if there is evidence of misuse, 
                  fraudulent claims, or violation of these Terms.
                </p>

                <p id="section15" className="text-xl font-bold my-6">User Obligations</p>
                <p>
                  By using our services, you agree to comply with all applicable laws and regulations. You must not 
                  misuse the platform in ways that could damage, disable, overburden, or impair our systems. 
                  Prohibited activities include, but are not limited to:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Uploading harmful, illegal, or fraudulent content.</li>
                  <li>Attempting to hack, reverse engineer, or disrupt the platform’s security features.</li>
                  <li>Engaging in abusive, threatening, or harassing behavior toward staff, partners, or other users.</li>
                </ul>

                <p id="section16" className="text-xl font-bold my-6">Intellectual Property Rights</p>
                <p>
                  All content, design, trademarks, logos, and intellectual property displayed on the movexos platform 
                  are the exclusive property of movexos or its licensors. Unauthorized use, reproduction, or 
                  distribution of such content is strictly prohibited. Users are granted a limited, non-exclusive, 
                  and revocable license to access and use the platform solely for personal, non-commercial purposes.
                </p>

                <p id="section17" className="text-xl font-bold my-6">Third-Party Services</p>
                <p>
                  movexos may integrate or provide access to third-party tools, applications, or services. These are 
                  provided solely for your convenience. We do not control or endorse third-party providers and are 
                  not responsible for their content, performance, or practices. Your use of such services is subject 
                  to their respective terms and policies.
                </p>

                <p id="section18" className="text-xl font-bold my-6">Liability and Limitations</p>
                <p>
                  To the maximum extent permitted by law, movexos shall not be held liable for indirect, incidental, 
                  or consequential damages arising from the use of our platform or services. While we take every 
                  precaution to ensure accuracy and reliability, we do not guarantee that all information provided 
                  is complete or error-free.
                </p>
                <p>
                  Our total liability to any user shall not exceed the amount paid by that user for the specific 
                  service in dispute. Users acknowledge and agree that they assume full responsibility for their 
                  use of the platform.
                </p>

                <p id="section19" className="text-xl font-bold my-6">Force Majeure</p>
                <p>
                  movexos shall not be held responsible for delays or failure to perform our obligations if caused by 
                  events beyond our reasonable control, including natural disasters, strikes, government actions, 
                  cyberattacks, or unforeseen technical issues. In such cases, obligations will be suspended for the 
                  duration of the event.
                </p>

                <p id="section20" className="text-xl font-bold my-6">Amendments to the Terms</p>
                <p>
                  movexos reserves the right to update or modify these Terms at any time. Changes will become effective 
                  immediately upon publication on our website. Users are encouraged to review the Terms periodically 
                  to remain informed about updates. Continued use of our services after changes constitutes acceptance 
                  of the revised Terms.
                </p>


            </div>

            {/* Sidebar / TOC */}
            <aside className="w-full md:w-[30%] md:pl-6 border-l border-gray-200">
              <nav className="ml-1.5 flex flex-col gap-4 sticky top-24">
                <a href="#section1" className="text-[var(--primary)] hover:underline">
                  Introduction
                </a>
                <a href="#section2" className="text-[var(--primary)] hover:underline">
                  Acceptance of Terms
                </a>
                <a href="#section3" className="text-[var(--primary)] hover:underline">
                  Service Usage
                </a>
                <a href="#section4" className="text-[var(--primary)] hover:underline">
                  Payment Terms
                </a>
                <a href="#section5" className="text-[var(--primary)] hover:underline">
                  Liability
                </a>
                <a href="#section6" className="text-[var(--primary)] hover:underline">
                  Cancellations and Refunds
                </a>
                <a href="#section7" className="text-[var(--primary)] hover:underline">
                  Customer Obligations
                </a>
                <a href="#section8" className="text-[var(--primary)] hover:underline">
                  Intellectual Property
                </a>
                <a href="#section9" className="text-[var(--primary)] hover:underline">
                 Governing Law
                </a>
                <a href="#section10" className="text-[var(--primary)] hover:underline">
                  Changes to Terms
                </a>
                <a href="#section11" className="text-[var(--primary)] hover:underline">
                  Account Responsibilities
                </a>
                <a href="#section12" className="text-[var(--primary)] hover:underline">
                  Service Availability
                </a>
                <a href="#section13" className="text-[var(--primary)] hover:underline">
                  Pricing and Payments
                </a>
                <a href="#section14" className="text-[var(--primary)] hover:underline">
                  Cancellations and Refunds
                </a>
                <a href="#section15" className="text-[var(--primary)] hover:underline">
                  User Obligations
                </a>
                <a href="#section16" className="text-[var(--primary)] hover:underline">
                  Intellectual Property Rights
                </a>
                <a href="#section17" className="text-[var(--primary)] hover:underline">
                 Third-Party Services
                </a>
                <a href="#section18" className="text-[var(--primary)] hover:underline">
                  Liability and Limitations
                </a>
                <a href="#section19" className="text-[var(--primary)] hover:underline">
                  Force Majeure
                </a>
                <a href="#section20" className="text-[var(--primary)] hover:underline">
                  Amendments to the Terms
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
