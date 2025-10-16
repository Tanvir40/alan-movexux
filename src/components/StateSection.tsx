// src/components/StateSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

const stats: Stat[] = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1200, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
  { label: "Countries Served", value: 30, suffix: "+" },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[linear-gradient(172deg,rgba(0,43,91,1)_0%,rgba(0,75,158,1)_50%)] text-center flex flex-col items-center"
    >
      <div className="container py-12 mx-auto">
        <h3 className="pb-1 !text-5xl md:text-5xl font-extrabold text-white">
          Delivering seamless moves worldwide.
        </h3>
        <p className="mt-3 text-base text-white mx-auto">
          We make global relocation simple, affordable, and worry-free — trusted by thousands of happy customers.
        </p>

        <div className="max-w-2xl mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center mt-10 sm:mt-0">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                className="text-5xl font-extrabold text-white font-mono text-center"
                start={visible ? 0 : stat.value}
              />
              <p className="mt-2 text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Uppdaterad CountUp som alltid använder samma font och stil
function CountUp({
  end,
  suffix,
  className,
  start = 0,
}: {
  end: number;
  suffix?: string;
  className?: string;
  start?: number;
}) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start >= end) return; // undvik animation om redan start >= end
    let current = start;
    const duration = 1500;
    const stepTime = 16; // ca 60fps
    const increment = end / (duration / stepTime);

    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, start]);

  return <p className={className}>{count}{suffix}</p>;
}
