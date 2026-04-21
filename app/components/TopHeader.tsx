"use client";

import Image from "next/image";
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
  { id: "esports", label: "อีสปอร์ต", icon: "esports" },
  { id: "cards", label: "ไพ่", icon: "cards" },
  { id: "news", label: "ข่าวกิจกรรม", icon: "news" },
];

export default function TopHeader() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const mobilePanelId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-accent-gold/10 bg-[#100d11]/92 backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] px-3 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,15,21,0.96),rgba(12,10,16,0.94))] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <Image
              src="/bgother/bg_header.6eb70f3d.jpg"
              alt=""
              fill
              aria-hidden="true"
              className="pointer-events-none object-cover opacity-70"
              sizes="100vw"
            />
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-3">
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
                className={`inline-flex h-12 w-12 flex-none touch-manipulation cursor-pointer items-center justify-center rounded-full border text-accent-gold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
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

            <div className="border-t border-accent-gold/12 px-2 pb-2 pt-1">
              <HeaderNav mobile onNavigate={() => setIsMobileExpanded(false)} />
            </div>

            <div
              id={mobilePanelId}
              className={`grid min-w-0 overflow-hidden transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-out ${
                isMobileExpanded
                  ? "grid-rows-[1fr] px-3 pb-3 opacity-100"
                  : "grid-rows-[0fr] px-3 pb-0 opacity-0"
              }`}
            >
              <div className="min-h-0 min-w-0">
                <HeaderAuthForm mobile />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,15,21,0.98),rgba(13,11,16,0.95))] shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
            <Image
              src="/bgother/bg_header.6eb70f3d.jpg"
              alt=""
              fill
              aria-hidden="true"
              className="pointer-events-none object-cover opacity-78"
              sizes="(min-width: 1024px) 1400px, 100vw"
            />
            <div className="header-ornament pointer-events-none absolute inset-y-0 left-0 w-[28rem] opacity-80" />
            <div className="relative flex items-center justify-between gap-6 px-6 py-5 xl:px-8">
              <HeaderLogo />
              <HeaderAuthForm />
            </div>

            <div className="relative border-t border-accent-gold/12 px-3 py-3 xl:px-4">
              <HeaderNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderLogo({ mobile = false }: { mobile?: boolean }) {
  return (
    <a
      href="#top"
      className={`group flex min-w-0 items-center transition-colors duration-200 ${
        mobile
          ? "gap-3 rounded-[24px] border border-white/8 bg-white/4 px-3 py-2.5"
          : "gap-4 py-1"
      }`}
    >
      <div
        className={`flex flex-none items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,226,145,0.82),rgba(191,139,28,0.34)_58%,transparent_74%)] ${
          mobile ? "h-12 w-12" : "h-16 w-16"
        }`}
      >
        <AppIcon
          name="crown"
          className={`text-accent-gold drop-shadow-[0_0_16px_rgba(212,175,55,0.55)] ${
            mobile ? "h-8 w-8" : "h-11 w-11"
          }`}
        />
      </div>

      <div className="min-w-0 space-y-1">
        <p
          className={`truncate font-semibold uppercase text-foreground/56 ${
            mobile
              ? "text-[10px] tracking-[0.26em]"
              : "text-[12px] tracking-[0.34em]"
          }`}
        >
          themeKiku คาสิโน ออนไลน์
        </p>
        <p
          className={`truncate font-display font-semibold leading-none transition-colors duration-200 group-hover:text-accent-gold-light ${
            mobile
              ? "text-[clamp(1.35rem,6vw,1.8rem)] text-white"
              : "text-[2rem] text-[#f5d894]"
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
      <div className="w-full min-w-0 overflow-hidden rounded-[26px] border border-white/8 bg-black/25 shadow-[0_18px_40px_rgba(0,0,0,0.24)]">
        <div className="flex min-w-0 flex-col gap-2.5 p-3">
          <FieldInput label="ชื่อผู้ใช้" placeholder="กรุณาใส่ยูสเซอร์" />
          <FieldInput
            label="รหัสผ่าน"
            placeholder="กรุณาใส่รหัสผ่าน"
            type="password"
            trailing="?"
          />

          <div className="flex min-w-0 flex-col gap-2">
            <button
              type="button"
              className="gold-button touch-manipulation cursor-pointer min-h-11 min-w-0 w-full justify-center px-4 text-sm font-semibold"
            >
              ล็อกอิน
            </button>
            <LanguageButton mobile />
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="flex w-full max-w-[860px] flex-wrap items-center justify-end gap-3">
      <FieldInput
        compact
        label="ชื่อผู้ใช้"
        placeholder="กรุณาใส่ยูสเซอร์"
      />
      <FieldInput
        compact
        label="รหัสผ่าน"
        placeholder="กรุณาใส่รหัสผ่าน"
        type="password"
        trailing="?"
      />
      <button
        type="button"
        className="gold-button min-h-12 cursor-pointer justify-center px-8 text-base font-semibold"
      >
        ล็อกอิน
      </button>
      <LanguageButton />
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
  if (mobile) {
    return (
      <nav
        className="hide-scrollbar w-full min-w-0 overflow-x-auto"
        aria-label="เมนูหลัก"
      >
        <ul className="flex min-w-max items-stretch gap-2 px-1 py-1">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                className={`flex w-[5.1rem] cursor-pointer flex-col items-center justify-center gap-2 rounded-[22px] border px-3 py-3 text-center transition-all duration-200 ${
                  index === 0
                    ? "border-accent-gold/35 bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(212,175,55,0.04))] text-accent-gold-light"
                    : "border-transparent bg-white/3 text-accent-gold/88 hover:border-accent-gold/18 hover:bg-accent-gold/8"
                }`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/18 bg-black/14">
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold leading-tight">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="เมนูหลัก">
      <ul className="grid grid-cols-4 gap-2 xl:grid-cols-8">
        {navItems.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`group flex min-h-[6.6rem] cursor-pointer flex-col items-center justify-center gap-2.5 rounded-[26px] border px-4 py-4 text-center transition-all duration-200 ${
                index === 0
                  ? "border-accent-gold/28 bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(212,175,55,0.02))] text-accent-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "border-transparent text-accent-gold/88 hover:border-accent-gold/18 hover:bg-accent-gold/6"
              }`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/18 bg-black/12 transition-colors duration-200 group-hover:bg-accent-gold/10">
                <AppIcon name={item.icon} className="h-6 w-6" />
              </span>
              <span className="text-base font-semibold leading-none">
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
  compact = false,
}: {
  label: string;
  placeholder: string;
  type?: "text" | "password";
  trailing?: string;
  compact?: boolean;
}) {
  return (
    <label
      className={`flex min-w-0 items-center gap-2 overflow-hidden rounded-full border px-4 ${
        compact
          ? "min-h-12 w-full min-w-[13rem] border-accent-gold/18 bg-[#17131a]/92 text-foreground xl:w-[13.7rem]"
          : "min-h-12 w-full border-white/10 bg-white/4"
      }`}
    >
      <span className="sr-only">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={`min-w-0 flex-1 bg-transparent focus:outline-none ${
          compact
            ? "text-sm text-foreground placeholder:text-foreground/34"
            : "text-sm text-foreground placeholder:text-foreground/35"
        }`}
      />
      {trailing ? (
        <span
          className={`inline-flex flex-none items-center justify-center rounded-full text-xs font-semibold ${
            compact
              ? "h-7 w-7 border border-accent-gold/20 bg-accent-gold/8 text-accent-gold"
              : "h-7 w-7 rounded-full border border-accent-gold/25 bg-accent-gold/8 text-accent-gold"
          }`}
        >
          {trailing}
        </span>
      ) : null}
    </label>
  );
}

function LanguageButton({ mobile = false }: { mobile?: boolean }) {
  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border transition-colors duration-200 hover:border-accent-gold/42 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70 ${
        mobile
          ? "min-h-11 w-full border-white/10 bg-white/4 px-4 text-sm font-medium text-foreground"
          : "min-h-12 border-transparent bg-transparent px-2 text-base font-medium text-foreground/88"
      }`}
    >
      <span className="inline-flex h-5 w-5 flex-none overflow-hidden rounded-full border border-white/20 bg-[linear-gradient(180deg,#0a4ab8_0_33%,#ffffff_33%_66%,#cc1829_66%_100%)]" />
      <span className="truncate">ภาษาไทย</span>
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4 flex-none text-accent-gold"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        <path d="m5 7.5 5 5 5-5" />
      </svg>
    </button>
  );
}
