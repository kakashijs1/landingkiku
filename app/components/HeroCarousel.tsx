"use client";

import Image from "next/image";
import { startTransition, useState } from "react";
import AppIcon, { type IconName } from "./AppIcon";

export type HeroCarouselSlide = {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  icon: IconName;
};

export default function HeroCarousel({
  slides,
}: {
  slides: HeroCarouselSlide[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (nextIndex: number) => {
    const slideCount = slides.length;
    const normalizedIndex = (nextIndex + slideCount) % slideCount;

    startTransition(() => {
      setActiveIndex(normalizedIndex);
    });
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="space-y-4" aria-label="ภาพสไลด์โปรโมชัน">
      <div className="hero-banner-shell overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,15,21,0.98),rgba(11,9,13,0.94))] shadow-[0_34px_90px_rgba(0,0,0,0.36)]">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <article key={slide.id} className="min-w-full">
                <div className="relative aspect-[16/8] w-full bg-[#0a090c] sm:aspect-[32/11] lg:aspect-[64/15]">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className="object-contain object-center sm:object-cover"
                    sizes="(min-width: 1280px) 1400px, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,8,11,0.62)_0%,rgba(9,8,11,0.14)_20%,rgba(9,8,11,0.08)_80%,rgba(9,8,11,0.64)_100%)] sm:bg-[linear-gradient(90deg,rgba(9,8,11,0.82)_0%,rgba(9,8,11,0.08)_24%,rgba(9,8,11,0.04)_76%,rgba(9,8,11,0.72)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.18),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.12)_70%,rgba(0,0,0,0.48)_100%)]" />
                </div>
              </article>
            ))}
          </div>

          <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-3 rounded-full border border-accent-gold/24 bg-[#120f15]/84 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold-light backdrop-blur-md sm:left-6 sm:top-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent-gold/22 bg-accent-gold/10 text-accent-gold">
              <AppIcon name={activeSlide.icon} className="h-4 w-4" />
            </span>
            {activeSlide.badge}
          </div>

          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 sm:bottom-6 sm:right-6">
            <button
              type="button"
              aria-label="สไลด์ก่อนหน้า"
              onClick={() => goToSlide(activeIndex - 1)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/45 text-accent-gold transition-colors duration-200 hover:border-accent-gold/32 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="m12.5 4.5-5 5 5 5" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="สไลด์ถัดไป"
              onClick={() => goToSlide(activeIndex + 1)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-accent-gold/26 bg-accent-gold/12 text-accent-gold transition-colors duration-200 hover:border-accent-gold/42 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="m7.5 4.5 5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center border-t border-accent-gold/10 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`ไปยังสไลด์ ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
                  activeIndex === index
                    ? "w-10 bg-accent-gold"
                    : "w-2.5 bg-white/22 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
