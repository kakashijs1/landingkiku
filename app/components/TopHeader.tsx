"use client";

import { useId, useState } from "react";
import AppIcon, { type IconName } from "./AppIcon";

type NavItem = {
  id: string;
  label: string;
  icon: IconName;
};

const navItems: NavItem[] = [
  { id: "live", label: "สด", icon: "live" },
  { id: "slot", label: "สล็อต", icon: "slot" },
  { id: "fish", label: "ยิงปลา", icon: "fish" },
  { id: "lottery", label: "ลอตเตอรี่", icon: "lottery" },
  { id: "sports", label: "กีฬา", icon: "sports" },
  { id: "cards", label: "ไพ่", icon: "cards" },
  { id: "esports", label: "อีสปอร์ต", icon: "esports" },
  { id: "news", label: "ข่าวกิจกรรม", icon: "news" },
];

export default function TopHeader() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(true);
  const mobilePanelId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[linear-gradient(180deg,rgba(13,11,16,0.96),rgba(13,11,16,0.88))] backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="lg:hidden">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
            <HeaderLogo mobile />
            <button
              type="button"
              aria-controls={mobilePanelId}
              aria-expanded={isMobileExpanded}
              aria-label={
                isMobileExpanded
                  ? "ย่อส่วนหัวของหน้า"
                  : "ขยายส่วนหัวของหน้า"
              }
              onClick={() => setIsMobileExpanded((value) => !value)}
              className={`inline-flex h-12 w-12 flex-none touch-manipulation cursor-pointer items-center justify-center rounded-full border text-accent-gold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 sm:h-14 sm:w-14 ${
                isMobileExpanded
                  ? "border-accent-gold/35 bg-accent-gold/10"
                  : "border-white/10 bg-white/5 hover:border-accent-gold/45"
              }`}
            >
              <svg
                viewBox="0 0 20 20"
                className={`h-5 w-5 transition-transform duration-200 ${
                  isMobileExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>
          </div>

          <div
            id={mobilePanelId}
            className={`grid min-w-0 overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
              isMobileExpanded
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 min-w-0">
              <HeaderAuthForm mobile />
              <div className="mt-4">
                <HeaderNav mobile onNavigate={() => setIsMobileExpanded(false)} />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <HeaderLogo />
            <HeaderAuthForm />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

function HeaderLogo({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      href="#top"
      className={`group flex items-center rounded-full border border-white/10 bg-white/4 transition-colors duration-200 hover:border-accent-gold/50 ${
        mobile
          ? "min-w-0 flex-1 gap-3 px-4 py-2.5"
          : "w-fit gap-4 px-5 py-3"
      }`}
    >
      <div
        className={`flex flex-none items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,226,145,0.82),rgba(191,139,28,0.34)_58%,transparent_74%)] ${
          mobile ? "h-12 w-12" : "h-14 w-14"
        }`}
      >
        <AppIcon
          name="crown"
          className={`text-accent-gold drop-shadow-[0_0_16px_rgba(212,175,55,0.55)] ${
            mobile ? "h-8 w-8" : "h-10 w-10"
          }`}
        />
      </div>
      <div className="min-w-0 space-y-1">
        <p
          className={`truncate font-semibold uppercase text-foreground/55 ${
            mobile ? "text-[9px] tracking-[0.3em]" : "text-[11px] tracking-[0.42em]"
          }`}
        >
          themeKiku คาสิโน ออนไลน์
        </p>
        <p
          className={`truncate font-display text-white transition-colors duration-200 group-hover:text-accent-gold-light ${
            mobile
              ? "text-[clamp(1.5rem,6.5vw,1.85rem)] leading-none"
              : "text-2xl"
          }`}
        >
          themeKiku Online
        </p>
      </div>
    </a>
  );
}

function HeaderAuthForm({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="w-full min-w-0 overflow-hidden rounded-[26px] border border-white/8 bg-black/30 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
        <div className="flex min-w-0 flex-col gap-2.5 p-3">
          {/* Username */}
          <label className="flex h-11 w-full items-center overflow-hidden rounded-full border border-white/10 bg-white/4 px-4">
            <span className="sr-only">ชื่อผู้ใช้</span>
            <input
              type="text"
              placeholder="กรุณาใส่ยูสเซอร์"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
            />
          </label>

          {/* Password */}
          <label className="flex h-11 w-full items-center overflow-hidden rounded-full border border-white/10 bg-white/4 px-4">
            <span className="sr-only">รหัสผ่าน</span>
            <input
              type="password"
              placeholder="กรุณาใส่รหัสผ่าน"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
            />
            <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-accent-gold/25 bg-accent-gold/8 text-xs font-semibold text-accent-gold">
              ?
            </span>
          </label>

          {/* Buttons row */}
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              className="gold-button touch-manipulation cursor-pointer min-h-11 min-w-0 w-full justify-center px-4 text-sm font-semibold sm:flex-1"
            >
              ล็อกอิน
            </button>
            <button
              type="button"
              className="inline-flex touch-manipulation cursor-pointer items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent-gold/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 min-h-11 min-w-0 w-full sm:flex-1"
            >
              <span className="inline-flex h-4 w-4 flex-none overflow-hidden rounded-full border border-white/20 bg-[linear-gradient(180deg,#0a4ab8_0_33%,#ffffff_33%_66%,#cc1829_66%_100%)]" />
              <span className="truncate">ภาษาไทย</span>
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 flex-none text-accent-gold"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="w-full min-w-0 grid rounded-[28px] border border-white/8 bg-black/30 shadow-[0_24px_60px_rgba(0,0,0,0.28)] gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto] sm:items-center">
      <FieldInput label="ชื่อผู้ใช้" placeholder="กรุณาใส่ยูสเซอร์" />
      <FieldInput
        label="รหัสผ่าน"
        placeholder="กรุณาใส่รหัสผ่าน"
        type="password"
        trailing="?"
      />
      <button
        type="button"
        className="gold-button touch-manipulation cursor-pointer justify-center font-semibold min-h-11 w-full px-5 py-2 text-sm sm:w-auto"
      >
        ล็อกอิน
      </button>
      <button
        type="button"
        className="inline-flex touch-manipulation cursor-pointer items-center justify-center gap-2 rounded-full border border-white/10 bg-white/4 font-medium text-foreground transition-colors duration-200 hover:border-accent-gold/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 min-h-11 w-full px-4 text-sm sm:w-auto"
      >
        <span className="inline-flex h-5 w-5 overflow-hidden rounded-full border border-white/20 bg-[linear-gradient(180deg,#0a4ab8_0_33%,#ffffff_33%_66%,#cc1829_66%_100%)]" />
        ภาษาไทย
        <svg
          viewBox="0 0 20 20"
          className="h-4 w-4 text-accent-gold"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        >
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </button>
    </form>
  );
}

function HeaderNav({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <nav
      className={`hide-scrollbar w-full min-w-0 overflow-x-auto border border-white/8 bg-black/18 ${
        mobile
          ? "snap-x snap-mandatory scroll-px-2 rounded-[28px] p-2"
          : "mt-4 rounded-full px-2 py-2"
      }`}
    >
      <ul
        className={`flex items-center gap-2 ${
          mobile ? "min-w-full" : "min-w-max"
        }`}
      >
        {navItems.map((item, index) => (
          <li key={item.id} className={mobile ? "snap-start" : undefined}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              className={`nav-item min-h-12 touch-manipulation ${
                mobile ? "shrink-0 px-4" : ""
              } ${
                index === 0
                  ? "border-accent-gold/55 bg-accent-gold/10 text-accent-gold-light"
                  : "border-transparent text-foreground/70 hover:border-white/10 hover:text-white"
              }`}
            >
              <AppIcon
                name={item.icon}
                className="h-5 w-5 flex-none text-current"
              />
              <span className="whitespace-nowrap text-sm font-medium tracking-[0.08em]">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FieldInput({
  label,
  placeholder,
  type = "text",
  trailing,
}: {
  label: string;
  placeholder: string;
  type?: "text" | "password";
  trailing?: string;
}) {
  return (
    <label className="flex min-h-12 w-full min-w-0 items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/4 px-4">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
      />
      {trailing ? (
        <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-accent-gold/25 bg-accent-gold/8 text-xs font-semibold text-accent-gold">
          {trailing}
        </span>
      ) : null}
    </label>
  );
}
