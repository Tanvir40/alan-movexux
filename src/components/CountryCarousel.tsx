// src/components/CountryCarousel.tsx
"use client";
import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const slidesData: Slide[] = [
  { id: 1, src: "/countries/germany.jpg", alt: "Germany", title: "Germany" },
  { id: 2, src: "/countries/france.jpeg", alt: "France", title: "France" },
  { id: 3, src: "/countries/switzerland.jpg", alt: "Switzerland", title: "Switzerland" },
  { id: 4, src: "/countries/netherlands.jpg", alt: "Netherlands", title: "Netherlands" },
  { id: 5, src: "/countries/italy.jpg", alt: "Italy", title: "Italy" },
  { id: 6, src: "/countries/spain.jpg", alt: "Spain", title: "Spain" },
  { id: 7, src: "/countries/belgium.jpg", alt: "Belgium", title: "Belgium" },
  { id: 8, src: "/countries/austria.jpg", alt: "Austria", title: "Austria" },
];

interface CarouselHandles {
  prevSlide: () => void;
  nextSlide: () => void;
}

const CountryCarousel = forwardRef<CarouselHandles>((_, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slideWidth = () => carouselRef.current?.children[0].clientWidth || 0;

  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const nextSlide = () => setCurrentIndex(prev => (prev + 1 >= slidesData.length ? 0 : prev + 1));

  useImperativeHandle(ref, () => ({
    prevSlide,
    nextSlide,
  }));

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (slideWidth() + 10)}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${currentIndex * (slideWidth() + 10)}px)`;
        setTimeout(() => {
          if (carouselRef.current) carouselRef.current.style.transition = "transform 0.5s";
        }, 50);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const startDrag = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      startX.current = "touches" in e ? e.touches[0].pageX : e.pageX;
      scrollLeft.current = currentIndex * (slideWidth() + 10);
      carousel.style.transition = "none";
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      const walk = startX.current - x;
      carousel.style.transform = `translateX(-${scrollLeft.current + walk}px)`;
    };

    const endDrag = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const x = "changedTouches" in e ? e.changedTouches[0].pageX : e.pageX;
      const walk = startX.current - x;
      if (walk > 50) nextSlide();
      else if (walk < -50) prevSlide();
      else carousel.style.transform = `translateX(-${currentIndex * (slideWidth() + 10)}px)`;
      carousel.style.transition = "transform 0.5s";
    };

    carousel.addEventListener("mousedown", startDrag);
    carousel.addEventListener("touchstart", startDrag);
    carousel.addEventListener("mousemove", drag);
    carousel.addEventListener("touchmove", drag);
    carousel.addEventListener("mouseup", endDrag);
    carousel.addEventListener("mouseleave", endDrag);
    carousel.addEventListener("touchend", endDrag);

    return () => {
      carousel.removeEventListener("mousedown", startDrag);
      carousel.removeEventListener("touchstart", startDrag);
      carousel.removeEventListener("mousemove", drag);
      carousel.removeEventListener("touchmove", drag);
      carousel.removeEventListener("mouseup", endDrag);
      carousel.removeEventListener("mouseleave", endDrag);
      carousel.removeEventListener("touchend", endDrag);
    };
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden py-12">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 gap-2.5 cursor-grab active:cursor-grabbing"
      >
        {slidesData.map(slide => (
          <div key={slide.id} className="w-full md:w-1/4 flex-shrink-0 py-4">
            <div className="rounded-lg overflow-hidden shadow-md h-full hover:shadow-md hover:ring-opacity-30">
              <div className="flex items-center justify-center h-40 max-h-40">
                <Image
                  src={slide.src}
                  width={500}
                  height={500}
                  alt={slide.alt}
                  className="object-cover w-full h-full object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold">{slide.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slidesData.slice(0, 4).map((_, idx) => (
          <button
            key={idx}
            className={`w-10 h-0.5 rounded-full transition-colors ${
              idx === currentIndex ? "bg-[var(--primary)]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
});

CountryCarousel.displayName = "CountryCarousel";

export default CountryCarousel;