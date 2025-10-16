// src/components/FAQ.tsx
"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does a typical international move take?",
    answer: `Depending on the origin and destination, most international moves are completed within 5–10 business days. Our experienced logistics team carefully plans every stage of the journey to ensure punctuality and efficiency. During your booking, we provide a detailed timeline, including pickup, transit, and delivery milestones. Transparency and reliability are our top priorities, giving you peace of mind throughout the entire moving process.`,
  },
  {
    id: 2,
    question: "Can I track my shipment in real-time?",
    answer: `Absolutely. Every international move with movexos comes with a secure, unique tracking number that allows you to monitor your belongings from the moment they leave your door until they arrive at the destination. Our advanced tracking system provides regular updates on the location and status of your shipment, including key milestones such as pickup, customs clearance, transit points, and delivery schedules. This transparency ensures you are always informed, reducing uncertainty and giving you complete peace of mind throughout the entire moving process. Our dedicated customer support team is also available to answer any questions or provide additional updates whenever needed, making sure your experience is smooth, reliable, and stress-free.`,},
  {
    id: 3,
    question: "What happens if an item gets damaged during transport?",
    answer: `All moves with movexos are fully insured to protect against any unforeseen damages during transit. In the rare event that an item is damaged, our dedicated claims team acts immediately to assess the situation and guide you through the claims process efficiently. We handle every claim with professionalism and transparency, ensuring that your valuable items are reimbursed or replaced promptly. Additionally, our packaging and handling procedures are designed to minimize risk, giving you confidence that your belongings are in safe hands from pickup to delivery. Our goal is to provide complete peace of mind and a seamless moving experience, even in unexpected situations.`,},
  {
    id: 4,
   question: "Can I change the moving date or delivery address?",
   answer: `Yes, movexos offers flexible options to accommodate your schedule. Changes to the moving date or delivery address can be made up to 48 hours before the move begins, ensuring that unexpected circumstances or last-minute adjustments are handled smoothly. Our logistics team works closely with you to confirm the new arrangements, update the tracking information, and coordinate with drivers and warehouses. This approach ensures that your move remains seamless and stress-free, while maintaining the same high level of reliability and transparency you expect from a global moving company.`,},
  {
    id: 5,
    question: "Are there any restrictions on what can be moved?",
    answer: `For safety, legal, and logistical reasons, certain items cannot be transported using standard international moving services. This includes hazardous materials, flammable or explosive substances, live animals, perishable goods, and extremely fragile items that require specialized packaging or handling. At movexos, we carefully assess each shipment to ensure compliance with international transport regulations and safety standards. Our experienced team can provide guidance on alternative solutions, such as specialized crating, professional packing, or arranging separate transport for restricted items. We strive to make the moving process as smooth and secure as possible, while ensuring that all items arrive safely and in perfect condition at their destination.`,},
  {
    id: 6,
    question: "What payment options are available?",
  answer: `movexos provides a variety of secure and convenient payment options to suit individual and corporate clients alike. You can pay online using major credit cards, PayPal, or bank transfers, all processed through encrypted and trusted payment gateways to ensure maximum security. For corporate clients or large-scale moves, we also offer invoicing and customized billing solutions, providing flexibility and clarity. Our goal is to make the payment process as smooth and transparent as possible, allowing you to focus on planning your move while we handle the logistics securely and efficiently.`,},
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section>
      <div className="container mx-auto py-12">
       <span className="!text-4xl font-bold">Frequently Asked Questions</span>
        <div className="space-y-4 !mt-12">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white py-2 cursor-pointer border-b border-gray-300"
              onClick={() => toggle(item.id)}
            >
               <div className="flex justify-between items-center">
                <div className="text-[18px] font-semibold">{item.question}</div>

                {/* SVG som plus/minus med rotation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    openId === item.id ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <path
                    d="M9.93694 15.5C9.84766 15.1539 9.66728 14.8381 9.41456 14.5854C9.16184 14.3327 8.84601 14.1523 8.49994 14.063L2.36494 12.481C2.26027 12.4513 2.16815 12.3883 2.10255 12.3014C2.03696 12.2146 2.00146 12.1088 2.00146 12C2.00146 11.8912 2.03696 11.7854 2.10255 11.6986C2.16815 11.6118 2.26027 11.5487 2.36494 11.519L8.49994 9.93601C8.84589 9.84681 9.16163 9.66658 9.41434 9.41404C9.66705 9.16151 9.84751 8.84589 9.93694 8.50001L11.5189 2.36501C11.5483 2.25992 11.6113 2.16735 11.6983 2.1014C11.7852 2.03545 11.8913 1.99976 12.0004 1.99976C12.1096 1.99976 12.2157 2.03545 12.3026 2.1014C12.3896 2.16735 12.4525 2.25992 12.4819 2.36501L14.0629 8.50001C14.1522 8.84608 14.3326 9.1619 14.5853 9.41462C14.838 9.66734 15.1539 9.84773 15.4999 9.93701L21.6349 11.518C21.7404 11.5471 21.8335 11.61 21.8998 11.6971C21.9661 11.7841 22.002 11.8906 22.002 12C22.002 12.1094 21.9661 12.2159 21.8998 12.3029C21.8335 12.39 21.7404 12.4529 21.6349 12.482L15.4999 14.063C15.1539 14.1523 14.838 14.3327 14.5853 14.5854C14.3326 14.8381 14.1522 15.1539 14.0629 15.5L12.4809 21.635C12.4515 21.7401 12.3886 21.8327 12.3016 21.8986C12.2147 21.9646 12.1086 22.0003 11.9994 22.0003C11.8903 22.0003 11.7842 21.9646 11.6973 21.8986C11.6103 21.8327 11.5473 21.7401 11.5179 21.635L9.93694 15.5Z"
                    stroke="#aeb3c0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {openId === item.id ? (
                // När öppen: visa hela texten
                <p className="w-11/12 mt-3 text-[var(--gray)]">{item.answer}</p>
                ) : (
                // När stängd: visa endast 2 rader
                <p className="w-10/12 text-[15px] mt-3 text-[var(--gray)] line-clamp-2">
                    {item.answer}
                </p>
                
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}