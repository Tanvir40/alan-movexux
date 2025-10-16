// src/components/ClientFeedback.tsx
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

// Mock data för feedback
const feedbacks = [
  {
    id: 1,
    name: "Crystal Maiden",
    company: "Portugal",
    date: "20.10.2025",
    image: "/avatar/crystal.avif",
    svg: "/svg/star-movexos-dark.svg",
    message: "The quality of the design is excellent, and I love how organized the files are. It’s very easy to find exactly what I need, and the attention to detail clearly shows a lot of thought and care went into the work.",
  },
  {
    id: 2,
    name: "Liam O’Connor",
    company: "Portugal",
    date: "20.10.2025",
    image: "/avatar/liam.jpg",
    svg: "/svg/star-movexos-dark.svg",
    message: "The quality of the design is excellent, and I love how organized the files are. It’s very easy to find exactly what I need, and the attention to detail clearly shows a lot of thought and care went into the work.",
  },
  {
    id: 3,
    name: "Sofia Rossi",
    company: "Portugal",
    date: "20.10.2025",
    image: "/avatar/sofia.jpg",
    svg: "/svg/star-movexos-dark.svg",
    message: "The quality of the design is excellent, and I love how organized the files are. It’s very easy to find exactly what I need, and the attention to detail clearly shows a lot of thought and care went into the work.",
  },
  {
    id: 4,
    name: "Alice Dubois",
    company: "Portugal",
    date: "20.10.2025",
    image: "/avatar/alice.jpg",
    svg: "/svg/star-movexos-dark.svg",
    message: "The quality of the design is excellent, and I love how organized the files are. It’s very easy to find exactly what I need, and the attention to detail clearly shows a lot of thought and care went into the work.",
  },
];

const ClientFeedback: React.FC = () => {
  return (
    <section className="bg-[var(--gray-50)]">
      <div className="container mx-auto py-12">
        {/* Div 1: Två kolumner */}
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 mb-12">
          <div>
            <p className="!text-4xl font-bold mb-4">What Our Clients Say</p>
            <p className="text-[var(--gray)]">
              We value feedback from our clients. Here are some of the experiences they have shared with us.
            </p>
          </div>
          <div className="grid justify-end items-center md:gap-0 gap-6">
             <Button text="View All Feedback" variant="outline-dark">
                <svg className="w-4 h-4 ml-1 transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13"><path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"></path></svg>
            </Button>
          <div className="flex gap-4 justify-end">
                <button className="px-[6px] py-[4px] rounded-[5px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-md">
                <svg className="hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13">
                        <path d="M19.0909 7.27799H3.1091L7.0091 11.178C7.09431 11.2625 7.16194 11.363 7.20809 11.4738C7.25425 11.5846 7.27801 11.7034 7.27801 11.8234C7.27801 11.9435 7.25425 12.0623 7.20809 12.1731C7.16194 12.2838 7.09431 12.3844 7.0091 12.4689C6.92459 12.5541 6.82404 12.6217 6.71326 12.6679C6.60248 12.714 6.48366 12.7378 6.36365 12.7378C6.24364 12.7378 6.12481 12.714 6.01403 12.6679C5.90325 12.6217 5.80271 12.5541 5.71819 12.4689L0.263652 7.01436C0.179396 6.92941 0.112736 6.82867 0.0674953 6.71791C0.0222548 6.60715 -0.000676581 6.48855 1.51396e-05 6.3689C0.000514457 6.24862 0.0248782 6.12964 0.0716932 6.01884C0.118508 5.90805 0.186843 5.80764 0.272742 5.72345C0.363783 5.63518 0.472284 5.56693 0.591272 5.5231C0.71026 5.47926 0.837103 5.4608 0.96365 5.4689H19.0909C19.332 5.4689 19.5632 5.56468 19.7337 5.73517C19.9042 5.90566 20 6.13689 20 6.37799C20 6.6191 19.9042 6.85033 19.7337 7.02082C19.5632 7.1913 19.332 7.28708 19.0909 7.28708V7.27799ZM7.0091 0.268907C7.09431 0.353419 7.16194 0.453965 7.20809 0.564746C7.25425 0.675527 7.27801 0.794351 7.27801 0.914361C7.27801 1.03437 7.25425 1.1532 7.20809 1.26398C7.16194 1.37476 7.09431 1.4753 7.0091 1.55982L4.28183 4.28709C4.19732 4.37229 4.09677 4.43992 3.98599 4.48608C3.87521 4.53223 3.75639 4.55599 3.63638 4.55599C3.51637 4.55599 3.39754 4.53223 3.28676 4.48608C3.17598 4.43992 3.07543 4.37229 2.99092 4.28709C2.90572 4.20257 2.83808 4.10203 2.79193 3.99125C2.74578 3.88047 2.72201 3.76164 2.72201 3.64163C2.72201 3.52162 2.74578 3.4028 2.79193 3.29202C2.83808 3.18124 2.90572 3.08069 2.99092 2.99618L5.71819 0.268907C5.80271 0.1837 5.90325 0.116069 6.01403 0.0699155C6.12481 0.0237622 6.24364 0 6.36365 0C6.48366 0 6.60248 0.0237622 6.71326 0.0699155C6.82404 0.116069 6.92459 0.1837 7.0091 0.268907Z" fill="currentColor"/>
                        </svg>
                </button>
                <button className="px-[6px] py-[4px] rounded-[5px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-md">
                <svg className="hover:text-[var(--primary-800)] transition cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 13">
                        <path d="M0.90909 7.27799H16.8909L12.9909 11.178C12.9057 11.2625 12.8381 11.363 12.7919 11.4738C12.7458 11.5846 12.722 11.7034 12.722 11.8234C12.722 11.9435 12.7458 12.0623 12.7919 12.1731C12.8381 12.2838 12.9057 12.3844 12.9909 12.4689C13.0754 12.5541 13.176 12.6217 13.2867 12.6679C13.3975 12.714 13.5163 12.7378 13.6364 12.7378C13.7564 12.7378 13.8752 12.714 13.986 12.6679C14.0967 12.6217 14.1973 12.5541 14.2818 12.4689L19.7363 7.01436C19.8206 6.92941 19.8873 6.82867 19.9325 6.71791C19.9777 6.60715 20.0007 6.48855 20 6.3689C19.9995 6.24862 19.9751 6.12964 19.9283 6.01884C19.8815 5.90805 19.8132 5.80764 19.7273 5.72345C19.6362 5.63518 19.5277 5.56693 19.4087 5.5231C19.2897 5.47926 19.1629 5.4608 19.0363 5.4689H0.90909C0.667985 5.4689 0.436754 5.56468 0.266266 5.73517C0.0957788 5.90566 0 6.13689 0 6.37799C0 6.6191 0.0957788 6.85033 0.266266 7.02082C0.436754 7.1913 0.667985 7.28708 0.90909 7.28708V7.27799ZM12.9909 0.268907C12.9057 0.353419 12.8381 0.453965 12.7919 0.564746C12.7458 0.675527 12.722 0.794351 12.722 0.914361C12.722 1.03437 12.7458 1.1532 12.7919 1.26398C12.8381 1.37476 12.9057 1.4753 12.9909 1.55982L15.7182 4.28709C15.8027 4.37229 15.9032 4.43992 16.014 4.48608C16.1248 4.53223 16.2436 4.55599 16.3636 4.55599C16.4836 4.55599 16.6025 4.53223 16.7132 4.48608C16.824 4.43992 16.9246 4.37229 17.0091 4.28709C17.0943 4.20257 17.1619 4.10203 17.2081 3.99125C17.2542 3.88047 17.278 3.76164 17.278 3.64163C17.278 3.52162 17.2542 3.4028 17.2081 3.29202C17.1619 3.18124 17.0943 3.08069 17.0091 2.99618L14.2818 0.268907C14.1973 0.1837 14.0967 0.116069 13.986 0.0699155C13.8752 0.0237622 13.7564 0 13.6364 0C13.5163 0 13.3975 0.0237622 13.2867 0.0699155C13.176 0.116069 13.0754 0.1837 12.9909 0.268907Z" fill="currentColor"/>
                        </svg>
                </button>
            </div>
        </div>
        </div>

        {/* Div 2: Slider med två kolumner, varje column med två cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((item) => (
            <div
                key={item.id}
                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition overflow-visible"
                >
                {/* Resten av kortet */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={45}
                        height={45}
                        className="rounded-full object-cover"
                    />
                    <div className="grid">
                        <p className="font-semibold leading-tight">{item.name}</p>
                        <p className="text-[var(--gray)] text-sm">{item.company}</p>
                    </div>
                        </div>
                        <div className="grid gap-1.5">
                        <Image src={item.svg} alt="Description" width={75} height={15} className="object-cover" />
                        <p className="text-[14px] text-[var(--gray)] flex justify-end">{item.date}</p>
                        </div>
                        </div>

                        <p className="text-[14px] text-[var(--gray)] mt-6 mb-4">&#34;{item.message}&#34;</p>

                        {/* Quote-ikon längst ner till höger */}
                        <span className="absolute bottom-2 right-2 opacity-30 w-8 h-8 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 376 314" fill="none" className="w-full h-full text-gray-400">
                        <path fillRule="evenodd" clipRule="evenodd" d="M135.96 3.53463C54.893 54.7346 10.093 114.468 1.55966 184.868C-13.3737 291.535 82.6263 342.735 131.693 295.801C180.76 248.868 150.893 189.135 116.76 172.068C80.493 157.135 59.1597 163.535 63.4263 140.068C67.693 118.735 116.76 59.0013 161.56 29.1346C163.693 27.0013 165.826 22.7346 163.693 18.468C161.56 16.3346 157.293 12.068 153.026 3.53463C146.626 -0.732039 140.226 -0.732039 135.96 3.53463ZM347.16 3.53463C266.093 54.7346 221.293 114.468 212.76 182.735C197.826 289.401 293.826 340.601 342.893 293.668C391.96 246.735 362.093 187.001 327.96 169.935C293.826 152.868 272.493 159.268 274.626 137.935C278.893 116.601 327.96 56.868 372.76 27.0013C374.893 24.868 377.026 20.6013 374.893 16.3346C372.76 14.2013 368.493 9.93462 364.226 1.40129C357.826 -0.732047 353.56 -0.732039 347.16 3.53463Z" fill="#002B5B"/>
                        </svg>
                        </span>
                        </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
