"use client";

import {
  startTransition,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import AppIcon, { type IconName } from "./AppIcon";

export type GameLobbyItem = {
  id: string;
  title: string;
  subtitle: string;
  cue: string;
  icon: IconName;
  accent: string;
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
      width: "clamp(7rem, 10vw, 9rem)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transform: "translate(-50%, 4rem) scale(0.5)",
    };
  }

  const distance =
    abs === 1 ? "min(24vw, 15rem)" : "min(40vw, 24rem)";
  const translateY = abs === 0 ? "0rem" : abs === 1 ? "1.4rem" : "3.2rem";
  const scale = abs === 0 ? 1 : abs === 1 ? 0.84 : 0.66;
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.92 : 0.62;
  const width =
    abs === 0
      ? "clamp(13rem, 18vw, 17rem)"
      : abs === 1
        ? "clamp(10rem, 14vw, 13rem)"
        : "clamp(8rem, 10vw, 10rem)";
  const transform =
    abs === 0
      ? `translate(-50%, ${translateY}) scale(${scale})`
      : `translate(calc(-50% ${offset > 0 ? "+" : "-"} ${distance}), ${translateY}) scale(${scale})`;

  return {
    left: "50%",
    bottom: 0,
    width,
    opacity,
    zIndex: 50 - abs,
    filter:
      abs === 2 ? "saturate(0.78) blur(0.7px)" : abs === 1 ? "saturate(0.9)" : "none",
    transform,
  };
}

export default function GameLobbyCarousel({
  items,
}: {
  items: GameLobbyItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(Math.min(2, items.length - 1));
  const swipeStartX = useRef<number | null>(null);
  const swipeTriggered = useRef(false);

  const setActive = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex(normalizeIndex(nextIndex, items.length));
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    swipeStartX.current = event.clientX;
    swipeTriggered.current = false;
  };

  const handlePointerEnd = (clientX: number) => {
    if (swipeStartX.current === null) {
      return;
    }

    const delta = clientX - swipeStartX.current;
    swipeStartX.current = null;

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
    <section className="relative" aria-label="สไลด์ตัวละครและหมวดเกม">
      <div className="relative overflow-hidden rounded-[38px] pb-3 pt-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,226,145,0.12),transparent_24%),linear-gradient(180deg,rgba(10,9,13,0.02),rgba(10,9,13,0.72)_54%,rgba(10,9,13,0.96))]" />
        <div
          className="absolute inset-x-[4%] bottom-[16%] top-[15%] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(24,20,28,0.78),rgba(10,9,13,0.88))] shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-[6px]"
          style={{
            clipPath: "polygon(6% 0,94% 0,100% 100%,0 100%)",
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),transparent_18%,transparent_82%,rgba(0,0,0,0.42))]" />
          <div className="absolute inset-x-[14%] inset-y-[8%] rounded-[34px] border border-accent-gold/8 bg-[radial-gradient(circle_at_50%_100%,rgba(255,220,132,0.12),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        </div>

        <div
          className="absolute inset-y-[12%] left-0 w-[20%] bg-[linear-gradient(90deg,rgba(9,8,11,0.74),transparent)]"
          style={{ clipPath: "polygon(0 0,86% 0,58% 100%,0 100%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-[12%] right-0 w-[20%] bg-[linear-gradient(270deg,rgba(9,8,11,0.74),transparent)]"
          style={{ clipPath: "polygon(14% 0,100% 0,100% 100%,42% 100%)" }}
          aria-hidden="true"
        />

        <button
          type="button"
          aria-label="หมวดก่อนหน้า"
          onClick={() => setActive(activeIndex - 1)}
          className="absolute left-2 top-[44%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/38 text-accent-gold transition-colors duration-200 hover:border-accent-gold/35 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:left-4"
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
          className="absolute right-2 top-[44%] z-40 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-accent-gold/24 bg-accent-gold/12 text-accent-gold transition-colors duration-200 hover:border-accent-gold/45 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:right-4"
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

        <div
          className="relative z-10 h-[18rem] sm:h-[21rem] lg:h-[23rem] [touch-action:pan-y]"
          onPointerDown={handlePointerDown}
          onPointerUp={(event) => handlePointerEnd(event.clientX)}
          onPointerCancel={() => {
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
                <div
                  className={`relative overflow-hidden rounded-[30px] border transition-colors duration-300 ${
                    isActive
                      ? "border-accent-gold/28 bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(255,255,255,0.02))] shadow-[0_26px_60px_rgba(0,0,0,0.34)]"
                      : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]"
                  }`}
                >
                  <div
                    className={`skeleton-shimmer relative overflow-hidden rounded-[28px] border bg-gradient-to-b ${item.accent} ${
                      isActive
                        ? "h-[12.75rem] border-accent-gold/20 sm:h-[14.25rem]"
                        : abs === 1
                          ? "h-[10.25rem] border-white/8 sm:h-[11.25rem]"
                          : "h-[8.5rem] border-white/8 sm:h-[9rem]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18))]" />
                    <div className="absolute left-1/2 top-[16%] h-[48%] w-[58%] -translate-x-1/2 rounded-[34px] border border-dashed border-accent-gold/18 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
                    <div className="absolute inset-x-6 top-5 h-3 rounded-full bg-accent-gold/24" />
                    <div className="absolute inset-x-9 top-11 h-3 rounded-full bg-white/10" />
                    <div className="absolute inset-x-5 bottom-5 rounded-[16px] border border-dashed border-accent-gold/18 bg-black/10 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-gold/56">
                      {item.cue}
                    </div>

                    <span
                      className={`absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-current/16 bg-black/16 text-accent-gold ${
                        isActive ? "h-11 w-11" : "h-9 w-9"
                      }`}
                    >
                      <AppIcon
                        name={item.icon}
                        className={isActive ? "h-5.5 w-5.5" : "h-4.5 w-4.5"}
                      />
                    </span>
                  </div>
                </div>

                <span
                  className={`mx-auto -mt-4 inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-center font-semibold shadow-[0_16px_34px_rgba(0,0,0,0.26)] transition-colors duration-300 ${
                    isActive
                      ? "min-w-[11rem] border-accent-gold/22 bg-[linear-gradient(180deg,rgba(255,219,133,0.26),rgba(146,105,29,0.34))] text-accent-gold-light"
                      : abs === 1
                        ? "min-w-[9rem] border-white/10 bg-[linear-gradient(180deg,rgba(26,22,28,0.96),rgba(15,12,18,0.96))] text-foreground/78"
                        : "min-w-[7.5rem] border-white/8 bg-[linear-gradient(180deg,rgba(21,18,24,0.92),rgba(12,10,14,0.92))] text-foreground/58"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}

          <div className="absolute bottom-[0.6rem] left-1/2 h-5 w-[16rem] -translate-x-1/2 rounded-full bg-accent-gold/26 blur-[26px] sm:w-[18rem]" />
          <div className="absolute bottom-0 left-1/2 h-12 w-[14rem] -translate-x-1/2 rounded-full border border-accent-gold/20 bg-[linear-gradient(180deg,rgba(31,24,18,0.96),rgba(15,12,18,0.96))] shadow-[0_20px_40px_rgba(0,0,0,0.32)] sm:w-[16rem]" />
        </div>

        <div className="relative z-20 flex justify-center px-4 pt-1">
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
      </div>
    </section>
  );
}
