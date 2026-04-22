"use client";

import Image from "next/image";
import {
  startTransition,
  useEffect,
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

type CarouselVars = CSSProperties & {
  "--game-lobby-gap"?: string;
  "--game-lobby-offset"?: string;
  "--game-lobby-visible"?: string;
};

function normalizeIndex(index: number, total: number) {
  return (index % total + total) % total;
}

function getVisibleCount(width: number) {
  if (width >= 1024) {
    return 4;
  }

  if (width >= 640) {
    return 3;
  }

  return 2;
}

export default function GameLobbyCarousel({
  items,
}: {
  items: GameLobbyItem[];
}) {
  const [visibleCount, setVisibleCount] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [isAnimating, setIsAnimating] = useState(true);
  const swipeStartX = useRef<number | null>(null);
  const isInteracting = useRef(false);

  const effectiveVisibleCount = Math.min(Math.max(1, visibleCount), Math.max(1, items.length));
  const isCarouselEnabled = items.length > effectiveVisibleCount;
  const loopedItems = isCarouselEnabled ? [...items, ...items, ...items] : items;
  const displayCount = isCarouselEnabled ? effectiveVisibleCount : Math.max(1, items.length);
  const slideGap = visibleCount >= 4 ? "1.15rem" : visibleCount === 3 ? "1rem" : "0.85rem";

  const viewportStyle: CarouselVars = {
    "--game-lobby-gap": slideGap,
    "--game-lobby-visible": String(displayCount),
  };

  const trackStyle: CarouselVars = {
    "--game-lobby-offset": String(isCarouselEnabled ? currentIndex : 0),
    transform: isCarouselEnabled
      ? "translateX(calc(-1 * var(--game-lobby-offset) * (((100% - (var(--game-lobby-visible) - 1) * var(--game-lobby-gap)) / var(--game-lobby-visible)) + var(--game-lobby-gap))))"
      : "translateX(0)",
  };

  const slideStyle = {
    width: "calc((100% - (var(--game-lobby-visible) - 1) * var(--game-lobby-gap)) / var(--game-lobby-visible))",
  } satisfies CSSProperties;

  const shiftBy = (delta: number) => {
    if (!isCarouselEnabled) {
      return;
    }

    startTransition(() => {
      setIsAnimating(true);
      setCurrentIndex((currentValue) => currentValue + delta);
    });
  };

  const goToPrevious = () => {
    shiftBy(-1);
  };

  const goToNext = () => {
    shiftBy(1);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    syncVisibleCount();
    window.addEventListener("resize", syncVisibleCount);

    return () => {
      window.removeEventListener("resize", syncVisibleCount);
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isAnimating]);

  useEffect(() => {
    if (!isCarouselEnabled) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const autoplayInterval = window.setInterval(() => {
      if (document.hidden || reducedMotionQuery.matches || isInteracting.current) {
        return;
      }

      startTransition(() => {
        setIsAnimating(true);
        setCurrentIndex((currentValue) => currentValue + 1);
      });
    }, 3200);

    return () => {
      window.clearInterval(autoplayInterval);
    };
  }, [isCarouselEnabled]);

  const handleTrackTransitionEnd = () => {
    if (!isCarouselEnabled) {
      return;
    }

    if (currentIndex >= items.length * 2 || currentIndex < items.length) {
      const nextIndex = normalizeIndex(currentIndex, items.length) + items.length;
      setIsAnimating(false);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isInteracting.current = true;
    swipeStartX.current = event.clientX;
  };

  const handlePointerEnd = (clientX: number) => {
    if (swipeStartX.current === null) {
      isInteracting.current = false;
      return;
    }

    const delta = clientX - swipeStartX.current;
    swipeStartX.current = null;
    isInteracting.current = false;

    if (!isCarouselEnabled || Math.abs(delta) < 40) {
      return;
    }

    if (delta < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="games" className="relative" aria-label="สไลด์หมวดเกมยอดนิยม">
      {isCarouselEnabled ? (
        <>
          <button
            type="button"
            aria-label="หมวดก่อนหน้า"
            onClick={goToPrevious}
            className="absolute left-1 top-[44%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/34 text-accent-gold transition-colors duration-200 hover:border-accent-gold/35 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:left-3 lg:left-5"
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
            onClick={goToNext}
            className="absolute right-1 top-[44%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-accent-gold/24 bg-accent-gold/12 text-accent-gold transition-colors duration-200 hover:border-accent-gold/45 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:right-3 lg:right-5"
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
        </>
      ) : null}

      <div className="pointer-events-none absolute inset-x-[10%] bottom-5 z-0 h-10 rounded-full bg-[linear-gradient(180deg,rgba(8,7,10,0),rgba(8,7,10,0.88))]" />
      <div className="pointer-events-none absolute inset-x-[20%] bottom-4 z-0 h-7 rounded-full bg-black/44 blur-[22px]" />
      <div className="pointer-events-none absolute inset-x-[27%] bottom-4 z-0 h-7 rounded-full bg-accent-gold/12 blur-[28px]" />

      <div
        className="relative z-10 overflow-hidden px-10 sm:px-12 lg:px-16"
        style={viewportStyle}
        onPointerEnter={() => {
          isInteracting.current = true;
        }}
        onPointerLeave={() => {
          isInteracting.current = false;
          swipeStartX.current = null;
        }}
      >
        <div
          className="relative [touch-action:pan-y]"
          onPointerDown={handlePointerDown}
          onPointerUp={(event) => handlePointerEnd(event.clientX)}
          onPointerCancel={() => {
            isInteracting.current = false;
            swipeStartX.current = null;
          }}
        >
          <div
            className={`flex items-end gap-[var(--game-lobby-gap)] ${
              isAnimating
                ? "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                : ""
            }`}
            style={trackStyle}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {loopedItems.map((item, index) => {
              return (
                <article
                  key={`${item.id}-${index}`}
                  style={slideStyle}
                  className="shrink-0"
                  aria-hidden={isCarouselEnabled && (index < items.length || index >= items.length * 2)}
                >
                  <div className="group relative block w-full rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(26,22,30,0.96),rgba(12,10,15,0.96))] px-3 pb-4 pt-3 text-left shadow-[0_22px_52px_rgba(0,0,0,0.34)] transition-transform duration-300 hover:-translate-y-1 sm:px-4 sm:pb-4 sm:pt-3.5">
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0))]" />
                    <div className="pointer-events-none absolute inset-x-[18%] bottom-4 h-5 rounded-full bg-black/54 blur-[20px]" />
                    <div className="relative flex h-[7rem] items-end justify-center sm:h-[8.25rem] lg:h-[9.4rem]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        priority={
                          isCarouselEnabled
                            ? index >= items.length && index < items.length + displayCount
                            : index < displayCount
                        }
                        className="object-contain object-bottom drop-shadow-[0_18px_34px_rgba(0,0,0,0.48)] transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 16rem, (min-width: 640px) 12rem, 50vw"
                      />
                    </div>

                    <div className="relative mt-3">
                      <span className="flex min-h-11 w-full items-center justify-center rounded-full border border-accent-gold/16 bg-[linear-gradient(180deg,rgba(45,34,24,0.82),rgba(18,14,17,0.94))] px-3 text-center text-[0.78rem] font-semibold text-accent-gold-light shadow-[0_16px_30px_rgba(0,0,0,0.3)] sm:text-[0.84rem]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
