"use client";

import Image from "next/image";
import {
  startTransition,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { type IconName } from "./AppIcon";

export type GameLobbyItem = {
  id: string;
  title: string;
  subtitle: string;
  cue: string;
  icon: IconName;
  accent: string;
  imageSrc: string;
  imageAlt: string;
};

const MAX_VISIBLE_OFFSET = 2;

function normalizeIndex(index: number, total: number) {
  return (index + total) % total;
}

function getRelativeOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getCardStyle(offset: number): CSSProperties {
  const abs = Math.abs(offset);

  if (abs > MAX_VISIBLE_OFFSET) {
    return {
      left: "50%",
      bottom: 0,
      width: "clamp(6rem, 9vw, 8rem)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transform: "translate(-50%, 3.5rem) scale(0.42)",
    };
  }

  const distance = abs === 1 ? "min(19vw, 12rem)" : "min(31vw, 20rem)";
  const translateY = abs === 0 ? "0rem" : abs === 1 ? "0.85rem" : "1.7rem";
  const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.58;
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.52;
  const width =
    abs === 0
      ? "clamp(10rem, 16vw, 15rem)"
      : abs === 1
        ? "clamp(8.25rem, 12vw, 11rem)"
        : "clamp(6.25rem, 8.5vw, 8.5rem)";
  const transform =
    abs === 0
      ? `translate(-50%, ${translateY}) scale(${scale})`
      : `translate(calc(-50% ${offset > 0 ? "+" : "-"} ${distance}), ${translateY}) scale(${scale})`;

  return {
    left: "50%",
    bottom: 0,
    width,
    opacity,
    zIndex: 60 - abs,
    filter:
      abs === 2 ? "saturate(0.8) blur(0.35px)" : abs === 1 ? "saturate(0.92)" : "none",
    transform,
  };
}

export default function GameLobbyCarousel({
  items,
}: {
  items: GameLobbyItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(Math.max(0, Math.min(2, items.length - 1)));
  const swipeStartX = useRef<number | null>(null);
  const swipeTriggered = useRef(false);
  const isPointerActive = useRef(false);

  const setActive = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex(normalizeIndex(nextIndex, items.length));
    });
  };

  const advanceSlide = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((currentIndex) => normalizeIndex(currentIndex + 1, items.length));
    });
  });

  useEffect(() => {
    if (items.length < 2) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const autoplayInterval = window.setInterval(() => {
      if (document.hidden || reducedMotionQuery.matches || isPointerActive.current) {
        return;
      }

      advanceSlide();
    }, 4200);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [items.length]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isPointerActive.current = true;
    swipeStartX.current = event.clientX;
    swipeTriggered.current = false;
  };

  const handlePointerEnd = (clientX: number) => {
    if (swipeStartX.current === null) {
      isPointerActive.current = false;
      return;
    }

    const delta = clientX - swipeStartX.current;
    swipeStartX.current = null;
    isPointerActive.current = false;

    if (Math.abs(delta) < 44) {
      return;
    }

    swipeTriggered.current = true;
    setActive(activeIndex + (delta < 0 ? 1 : -1));
  };

  const handleCardClick = (index: number) => {
    if (swipeTriggered.current) {
      swipeTriggered.current = false;
      return;
    }

    setActive(index);
  };

  return (
    <section id="games" className="relative" aria-label="สไลด์ตัวละครและหมวดเกม">
      <button
        type="button"
        aria-label="หมวดก่อนหน้า"
        onClick={() => setActive(activeIndex - 1)}
        className="absolute left-1 top-[42%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/34 text-accent-gold transition-colors duration-200 hover:border-accent-gold/35 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:left-3 lg:left-5"
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
        aria-label="หมวดถัดไป"
        onClick={() => setActive(activeIndex + 1)}
        className="absolute right-1 top-[42%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-accent-gold/24 bg-accent-gold/12 text-accent-gold transition-colors duration-200 hover:border-accent-gold/45 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:right-3 lg:right-5"
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

      <div className="pointer-events-none absolute inset-x-[8%] bottom-4 z-0 h-12 rounded-full bg-[linear-gradient(180deg,rgba(8,7,10,0),rgba(8,7,10,0.86))]" />
      <div className="pointer-events-none absolute inset-x-[20%] bottom-4 z-0 h-7 rounded-full bg-black/46 blur-[20px]" />
      <div className="pointer-events-none absolute inset-x-[28%] bottom-3 z-0 h-6 rounded-full bg-accent-gold/16 blur-[24px]" />

      <div
        className="relative z-10 h-[11.5rem] sm:h-[13.5rem] lg:h-[16rem] [touch-action:pan-y]"
        onPointerDown={handlePointerDown}
        onPointerUp={(event) => handlePointerEnd(event.clientX)}
        onPointerCancel={() => {
          isPointerActive.current = false;
          swipeStartX.current = null;
          swipeTriggered.current = false;
        }}
      >
        {items.map((item, index) => {
          const offset = getRelativeOffset(index, activeIndex, items.length);
          const abs = Math.abs(offset);
          const isActive = offset === 0;
          const isVisible = abs <= MAX_VISIBLE_OFFSET;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              aria-label={`เลือกหมวด ${item.title}`}
              onClick={() => handleCardClick(index)}
              style={getCardStyle(offset)}
              className={`group absolute transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
                isVisible ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`relative w-full ${
                    isActive
                      ? "h-[9.75rem] sm:h-[11.5rem] lg:h-[13.5rem]"
                      : abs === 1
                        ? "h-[7rem] sm:h-[8.2rem] lg:h-[9.5rem]"
                        : "h-[5.3rem] sm:h-[6.2rem] lg:h-[7rem]"
                  }`}
                >
                  <div
                    className={`absolute inset-x-[18%] bottom-1 rounded-full bg-black/52 blur-[18px] ${
                      isActive ? "h-6 opacity-100" : abs === 1 ? "h-5 opacity-70" : "h-4 opacity-42"
                    }`}
                  />
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className={`object-contain object-bottom drop-shadow-[0_18px_34px_rgba(0,0,0,0.48)] transition-transform duration-500 ${
                      isActive ? "scale-100" : abs === 1 ? "scale-[0.96]" : "scale-[0.92]"
                    }`}
                    sizes="(min-width: 1280px) 15rem, (min-width: 640px) 11rem, 9rem"
                  />
                </div>

                <span
                  className={`-mt-2 inline-flex min-h-10 items-center justify-center rounded-full border px-4 text-center text-[0.78rem] font-semibold shadow-[0_16px_30px_rgba(0,0,0,0.34)] transition-colors duration-300 sm:text-[0.84rem] ${
                    isActive
                      ? "min-w-[10rem] border-accent-gold/30 bg-[linear-gradient(180deg,rgba(48,36,25,0.96),rgba(19,15,18,0.96))] text-accent-gold-light"
                      : abs === 1
                        ? "min-w-[8.5rem] border-white/10 bg-[linear-gradient(180deg,rgba(24,20,26,0.94),rgba(14,11,17,0.94))] text-foreground/76"
                        : "min-w-[7rem] border-white/8 bg-[linear-gradient(180deg,rgba(20,17,23,0.88),rgba(12,10,14,0.88))] text-foreground/56"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative z-20 flex justify-center pt-3">
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`ไปยังหมวด ${item.title}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
                index === activeIndex
                  ? "h-2.5 w-10 bg-accent-gold"
                  : "h-2.5 w-2.5 bg-white/24 hover:bg-white/42"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
