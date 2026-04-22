"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";
import { type IconName } from "./AppIcon";

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
  const [isMobileAutoplayEnabled, setIsMobileAutoplayEnabled] = useState(false);

  const goToSlide = (nextIndex: number) => {
    const slideCount = slides.length;
    const normalizedIndex = (nextIndex + slideCount) % slideCount;

    startTransition(() => {
      setActiveIndex(normalizedIndex);
    });
  };

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncAutoplayState = () => {
      setIsMobileAutoplayEnabled(
        mobileQuery.matches && !reducedMotionQuery.matches,
      );
    };

    const addQueryListener = (
      query: MediaQueryList,
      handler: () => void,
    ) => {
      if (typeof query.addEventListener === "function") {
        query.addEventListener("change", handler);
        return () => query.removeEventListener("change", handler);
      }

      query.addListener(handler);
      return () => query.removeListener(handler);
    };

    syncAutoplayState();

    const removeMobileListener = addQueryListener(mobileQuery, syncAutoplayState);
    const removeReducedMotionListener = addQueryListener(
      reducedMotionQuery,
      syncAutoplayState,
    );

    return () => {
      removeMobileListener();
      removeReducedMotionListener();
    };
  }, [slides.length]);

  useEffect(() => {
    if (!isMobileAutoplayEnabled || slides.length < 2) {
      return;
    }

    const autoplayInterval = window.setInterval(() => {
      if (document.hidden) {
        return;
      }

      startTransition(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
      });
    }, 4600);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [isMobileAutoplayEnabled, slides.length]);

  return (
    <section className="relative" aria-label="ภาพสไลด์โปรโมชัน">
      <div className="relative overflow-hidden bg-[#0a090c]">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article key={slide.id} className="min-w-full">
              <div className="relative aspect-[16/9] w-full bg-[#0a090c] sm:aspect-[32/11] lg:aspect-[64/18]">
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(min-width: 1280px) 1500px, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.6)_100%)]" />
                <div className="absolute inset-y-0 left-0 w-[17%] bg-[linear-gradient(90deg,rgba(9,8,11,0.88),rgba(9,8,11,0.22))]" style={{ clipPath: "polygon(0 0, 72% 0, 100% 100%, 0 100%)" }} />
                <div className="absolute inset-y-0 right-0 w-[17%] bg-[linear-gradient(270deg,rgba(9,8,11,0.88),rgba(9,8,11,0.22))]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 28% 100%)" }} />
                <div className="absolute inset-x-[20%] top-0 h-[24%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.16),transparent_72%)]" />
              </div>
            </article>
          ))}
        </div>

        {slides.length > 1 ? (
          <>
            <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 sm:px-4 lg:px-6">
              <button
                type="button"
                aria-label="สไลด์ก่อนหน้า"
                onClick={() => goToSlide(activeIndex - 1)}
                className="inline-flex h-9 w-9 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/36 text-accent-gold transition-colors duration-200 hover:border-accent-gold/32 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:h-11 sm:w-11"
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
                className="inline-flex h-9 w-9 touch-manipulation cursor-pointer items-center justify-center rounded-full border border-accent-gold/26 bg-accent-gold/12 text-accent-gold transition-colors duration-200 hover:border-accent-gold/42 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:h-11 sm:w-11"
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

            <div className="absolute inset-x-0 bottom-3 z-20 flex justify-center px-4 sm:bottom-5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    aria-label={`ไปยังสไลด์ ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
                      activeIndex === index
                        ? "w-8 bg-accent-gold sm:w-10"
                        : "w-2.5 bg-white/22 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
