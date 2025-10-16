// src/components/MovingIntro.tsx
"use client";
import React from "react";

interface MovingIntroProps {
  content: string | React.ReactNode;
}

export const MovingIntro: React.FC<MovingIntroProps> = ({ content }) => {
  if (!content) return null;

  return (
    <section className="mb-8 text-gray-800">
      <div className="prose max-w-none">
        {typeof content === "string" ? <p>{content}</p> : content}
      </div>
    </section>
  );
};
