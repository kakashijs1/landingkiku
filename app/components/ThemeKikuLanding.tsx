import Image from "next/image";
import AppIcon, { type IconName } from "./AppIcon";
import TopHeader from "./TopHeader";

type GameHighlight = {
  title: string;
  subtitle: string;
  badge: string;
  icon: IconName;
  accent: string;
};

type Reason = {
  title: string;
  eyebrow: string;
  description: string;
  icon: IconName;
};

type SideAction = {
  label: string;
  icon: IconName;
};

type FooterColumn = {
  title: string;
  links: string[];
};

const highlightGames: GameHighlight[] = [
  {
    title: "เครื่องเกมยิงปลา",
    subtitle: "โบนัสแตกต่อเนื่อง",
    badge: "เกมฮิตใหม่",
    icon: "fish",
    accent:
      "from-[#1d5f61]/80 via-[#15464f]/55 to-[#100d11]/95 shadow-[0_28px_60px_rgba(35,136,141,0.26)]",
  },
  {
    title: "สล็อตยอดนิยม",
    subtitle: "แจ็กพอตพรีเมียม",
    badge: "ยอดนิยม",
    icon: "slot",
    accent:
      "from-[#7f4412]/80 via-[#3a2210]/65 to-[#100d11]/95 shadow-[0_28px_60px_rgba(209,132,49,0.26)]",
  },
  {
    title: "เกมคาสิโน",
    subtitle: "ดีลเลอร์สดภาพคมชัด",
    badge: "เลือกเล่นเลย",
    icon: "cards",
    accent:
      "from-[#8d6d25]/80 via-[#3a2d12]/70 to-[#100d11]/95 shadow-[0_32px_70px_rgba(212,175,55,0.35)]",
  },
  {
    title: "ดีลเลอร์ AI",
    subtitle: "โต๊ะแนะนำอัจฉริยะ",
    badge: "Coming soon",
    icon: "spark",
    accent:
      "from-[#4c586b]/80 via-[#1f2430]/70 to-[#100d11]/95 shadow-[0_28px_60px_rgba(102,123,154,0.22)]",
  },
  {
    title: "น้องคาสิโนบันเทิง",
    subtitle: "สีสันแอนิเมชัน",
    badge: "แฟนมีต",
    icon: "esports",
    accent:
      "from-[#83455e]/80 via-[#35212f]/70 to-[#100d11]/95 shadow-[0_28px_60px_rgba(176,95,130,0.22)]",
  },
];

const reasons: Reason[] = [
  {
    eyebrow: "One Account, Unlimited Play",
    title: "บัญชีเดียวเล่นครบทุกเกม",
    description:
      "สลับระหว่างคาสิโนสด สล็อต กีฬา และลอตเตอรี่ได้โดยไม่ต้องสมัครซ้ำ",
    icon: "wallet",
  },
  {
    eyebrow: "Hundreds of Slot Games",
    title: "เกมสล็อตหลายร้อยแบบ",
    description:
      "คัดค่ายเกมยอดนิยมพร้อมหน้าตู้หรูสไตล์คาสิโน เพื่อให้โทนหน้าเว็บสอดคล้องกับ reference",
    icon: "slot",
  },
  {
    eyebrow: "No. 1 in Asia",
    title: "ภาพลักษณ์ระดับเอเชีย",
    description:
      "โครงหน้าและจังหวะการเล่าเรื่องถูกจัดให้อารมณ์พรีเมียม ดูใหญ่ และชัดเรื่องความน่าเชื่อถือ",
    icon: "star",
  },
  {
    eyebrow: "Fast & Secure",
    title: "ระบบเร็วและปลอดภัย",
    description:
      "โทนสีเข้มทองช่วยเน้นความมั่นคง พร้อมปุ่มและจุดโต้ตอบที่มองเห็นได้ชัดบนทุก breakpoint",
    icon: "shield",
  },
  {
    eyebrow: "Trusted Platform",
    title: "แพลตฟอร์มที่ไว้ใจได้",
    description:
      "ใช้ section trust, proof และ iconography แบบสม่ำเสมอเพื่อสร้างความรู้สึก professional",
    icon: "crown",
  },
  {
    eyebrow: "24/7 Customer Support",
    title: "ทีมงานพร้อมดูแลตลอดเวลา",
    description:
      "เพิ่ม rail ด้านข้างและจุดติดต่อหลักให้เหมือนหน้าอ้างอิงแต่ยังคุมความเรียบร้อยบนมือถือ",
    icon: "support",
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: "ความบันเทิงออนไลน์",
    links: ["สด", "สล็อต", "ยิงปลา", "ลอตเตอรี่", "กีฬา", "อีสปอร์ต", "ไพ่"],
  },
  {
    title: "เกี่ยวกับ themeKiku",
    links: ["เกี่ยวกับเรา", "แนะนำคาสิโน", "โปรโมชั่น", "คำถามพบบ่อย"],
  },
  {
    title: "คู่มือผู้ใช้",
    links: ["ศูนย์ดาวน์โหลด", "กฎสมาชิก", "นโยบายความเป็นส่วนตัว", "ลิงก์สำรอง"],
  },
];

const sideActions: SideAction[] = [
  { label: "โปรโมชัน", icon: "shield" },
  { label: "แชร์", icon: "globe" },
  { label: "โทร", icon: "phone" },
  { label: "แชต", icon: "message" },
  { label: "ไลน์", icon: "line" },
];

const providerNames = [
  "NEXTSPIN",
  "JOKER",
  "PLAY'N GO",
  "RICH88",
  "WM CASINO",
  "JDB",
  "DRAGOON SOFT",
  "JILI",
  "AMEBA",
  "CMD368",
  "YS168",
];

export default function ThemeKikuLanding() {
  return (
    <div className="luxury-page text-foreground">
      <TopHeader />

      <main className="relative z-10 overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <ReasonsSection />
      </main>

      <SiteFooter />
      <FloatingSupportRail />
      <SupportBubble />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative px-4 pb-10 pt-6 sm:px-6 sm:pb-16 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="hero-shell section-surface relative overflow-hidden rounded-[34px] px-4 pb-24 pt-8 sm:px-8 sm:pb-28 sm:pt-10 lg:px-12 lg:pb-32">
          <div className="hero-backdrop absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,227,157,0.28),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(13,11,16,0.86))]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-end">
            <div className="max-w-[720px] space-y-6 pt-6" data-reveal>
              <div className="gold-pill w-fit">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent-gold/40 bg-accent-gold/10">
                  <AppIcon name="crown" className="h-4 w-4 text-accent-gold" />
                </span>
                คาสิโนสดอันดับหนึ่งในเอเชียน
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.55em] text-accent-gold/70">
                  themeKiku Experience
                </p>
                <h1 className="font-display max-w-[12ch] text-balance text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                  themeKiku <span className="text-gold-gradient">G Club</span>
                </h1>
                <p className="max-w-[30ch] text-lg leading-8 text-foreground/76 sm:text-xl">
                  สดจากคาสิโนจริง ดีลเลอร์สายเอเชียลุคหรู พร้อมบรรยากาศเข้ม
                  ทอง และโครงหน้าเหมือน reference แบบ modernized สำหรับโปรดักชัน
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#live" className="gold-button px-7 py-4 text-base font-semibold">
                  เลือกโต๊ะเล่นเลย
                </a>
                <a
                  href="#about"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold tracking-[0.14em] text-foreground transition-colors duration-200 hover:border-accent-gold/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  ทำไมต้องเลือกเรา
                </a>
              </div>

              <dl className="grid max-w-[580px] gap-4 pt-4 sm:grid-cols-3">
                {[
                  ["250+", "โต๊ะเกมสด"],
                  ["24/7", "ทีมซัพพอร์ต"],
                  ["4K", "ภาพสตรีมคมชัด"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className="stat-card"
                    data-reveal
                    style={{ animationDelay: `${index * 90 + 100}ms` }}
                  >
                    <dt className="text-xs uppercase tracking-[0.28em] text-foreground/45">
                      {label}
                    </dt>
                    <dd className="mt-2 font-display text-3xl text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="relative mx-auto flex w-full max-w-[420px] items-end justify-center lg:justify-end"
              data-reveal
              style={{ animationDelay: "180ms" }}
            >
              <div className="absolute inset-x-10 bottom-4 h-8 rounded-full bg-accent-gold/40 blur-3xl" />
              <div className="relative aspect-[10/12] w-full max-w-[360px] overflow-hidden rounded-[32px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,237,191,0.26),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.08))]" />
                <Image
                  src="/themekiku-hostess.svg"
                  alt="Illustrated themeKiku hostess"
                  fill
                  priority
                  className="object-contain object-bottom p-3"
                  sizes="(min-width: 1280px) 360px, (min-width: 1024px) 28vw, 80vw"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {highlightGames.map((game, index) => (
              <article
                key={game.title}
                className={`game-card bg-gradient-to-br ${game.accent} ${
                  index === 2 ? "xl:-mt-10 xl:scale-[1.04]" : ""
                }`}
                data-reveal
                style={{ animationDelay: `${index * 80 + 220}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-white/14 bg-black/18 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-gold-light/85">
                    {game.badge}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-black/20 text-accent-gold">
                    <AppIcon name={game.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-14 space-y-2">
                  <p className="font-display text-3xl leading-none text-white">
                    {game.title}
                  </p>
                  <p className="max-w-[18ch] text-sm leading-6 text-foreground/72">
                    {game.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.94fr)] lg:items-center">
        <div className="section-surface relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
          <div className="relative z-10 space-y-6">
            <span className="gold-pill w-fit">ทำไมเลือกเรา</span>

            <div className="flex flex-wrap items-center gap-5 text-accent-gold/85">
              <div className="inline-flex items-center gap-3">
                <AppIcon name="crown" className="h-8 w-8" />
                <span className="font-display text-2xl text-white">
                  themeKiku Online
                </span>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold">
                <AppIcon name="star" className="h-4 w-4" />
                G Club International
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="max-w-[14ch] text-balance font-display text-4xl leading-tight text-white sm:text-5xl">
                themeKiku G-club คือคาสิโนออนไลน์อันดับต้นของประเทศไทย
              </h2>
              <p className="max-w-[62ch] text-base leading-8 text-foreground/72">
                เนื้อหาส่วนนี้ตีความจาก reference เป็น trust section ที่ชัดขึ้น:
                มีจุดขาย, brand stamp, และภาพประกอบให้รู้สึกว่าเป็นคาสิโนหรู
                แต่ยังคงรักษาโครงที่อ่านง่ายและ responsive ตาม guideline ของ skill
                ที่ใช้ในงานนี้
              </p>
              <p className="max-w-[62ch] text-base leading-8 text-foreground/58">
                ผมตั้งใจให้ section นี้ทำหน้าที่แทนทั้ง “why choose us” และ
                “proof of credibility” ในภาพตัวอย่าง โดยไม่ต้องพึ่ง carousel
                หรือเอฟเฟกต์หนักเกินจำเป็น
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "รับชมดีลเลอร์สดแบบ realtime",
                "รองรับทุกอุปกรณ์ตั้งแต่ 375px ถึง desktop",
                "action rail และ CTA ชัดเจนตาม reference",
                "โทนดำทองคุมความหรูโดยไม่เสีย contrast",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent-gold/35 bg-accent-gold/10 text-accent-gold">
                    <AppIcon name="spark" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm leading-6 text-foreground/74">{item}</p>
                </div>
              ))}
            </div>

            <a href="#reasons" className="gold-button w-fit px-6 py-3 text-sm font-semibold">
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="section-surface absolute inset-x-0 bottom-0 top-16 overflow-hidden rounded-[34px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,225,137,0.26),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
            <Image
              src="/themekiku-palace.svg"
              alt="Stylized themeKiku palace illustration"
              fill
              className="object-contain p-6"
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 42vw, 100vw"
            />
          </div>

          <div className="section-surface absolute right-0 top-0 w-[52%] overflow-hidden rounded-[28px] px-5 py-5">
            <div
              className="absolute inset-0 bg-[linear-gradient(160deg,rgba(212,175,55,0.2),rgba(38,32,17,0.1))]"
              style={{ clipPath: "polygon(14% 0,100% 0,100% 100%,0 100%)" }}
            />
            <div className="relative z-10 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-gold/72">
                พรีเมียร์โซน
              </p>
              <p className="font-display text-2xl text-white">
                ห้อง VIP และ live table
              </p>
              <p className="text-sm leading-6 text-foreground/65">
                พื้นที่ภาพประกอบนี้วางซ้อนเพื่อจำลอง collage ด้านขวาใน reference
              </p>
            </div>
          </div>

          <div className="section-surface absolute bottom-6 right-8 w-[40%] rounded-[28px] px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-gold/72">
              Social Proof
            </p>
            <p className="mt-3 font-display text-3xl text-white">98%</p>
            <p className="mt-2 text-sm leading-6 text-foreground/65">
              ผู้เล่นกลับมาใช้งานซ้ำจากภาพลักษณ์ที่ดูเชื่อถือได้และ CTA ชัดเจน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section id="reasons" className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 space-y-4 text-center">
          <p className="font-display text-4xl text-accent-gold sm:text-6xl">6</p>
          <h2 className="text-balance font-display text-4xl text-white sm:text-5xl">
            Top <span className="text-gold-gradient">6</span>{" "}
            เหตุผลหลักที่ควรเลือก themeKiku Online
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-foreground/66">
            การ์ดด้านล่างยึด reference เดิมเรื่อง “tile strip”
            แต่ปรับให้เป็นระบบการ์ดที่อ่านง่ายและ responsive กว่าเดิม
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-6">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="reason-card"
              data-reveal
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="max-w-[18ch] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-gold/72">
                  {reason.eyebrow}
                </p>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/7 text-accent-gold">
                  <AppIcon name={reason.icon} className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-12 text-balance font-display text-3xl leading-none text-white">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-foreground/66">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 mt-6 border-t border-white/8 bg-[linear-gradient(180deg,rgba(13,11,16,0.82),rgba(9,8,11,0.96))]">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="section-surface relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(212,175,55,0.14),transparent_28%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.05),transparent_30%)]" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,226,145,0.82),rgba(191,139,28,0.34)_58%,transparent_74%)]">
                  <AppIcon name="crown" className="h-10 w-10 text-accent-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.36em] text-foreground/48">
                    themeKiku Online
                  </p>
                  <p className="font-display text-3xl text-white">
                    Casino Live Entertainment
                  </p>
                </div>
              </div>

              <p className="max-w-[58ch] text-sm leading-7 text-foreground/65">
                หน้า landing นี้ออกแบบให้ใช้งานกับ stack ปัจจุบันของโปรเจ็คเท่านั้น:
                Next.js 16, React 19, TypeScript และ Tailwind v4 ไม่มีไลบรารีเพิ่ม
                และไม่มี dependency สำหรับ animation ภายนอก
              </p>

              <div className="flex flex-wrap gap-3">
                {["18+", "Gaming Certified", "VIP Table", "Secure Payment"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/72"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-[28px] border border-white/8 bg-white/4 px-5 py-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-gold/78">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-foreground/66 transition-colors duration-200 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-white/8 bg-black/20 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent-gold/45">
            {providerNames.map((provider) => (
              <span key={provider}>{provider}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/8 pt-6 text-center text-xs text-foreground/42 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>Copyright © 2026 Casino Online Entertainment All Rights Reserved</p>
          <p>ความเร็วเว็บ 1920x768 และปรับตัวขึ้นบนอุปกรณ์มือถือ</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingSupportRail() {
  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {sideActions.map((action) => (
        <button
          key={action.label}
          type="button"
          aria-label={action.label}
          className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-accent-gold transition-colors duration-200 hover:border-accent-gold/45 hover:text-accent-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
        >
          <AppIcon name={action.icon} className="h-5 w-5" />
        </button>
      ))}
    </aside>
  );
}

function SupportBubble() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-white px-2 py-2 pr-4 text-sm text-black shadow-[0_12px_40px_rgba(0,0,0,0.26)]">
      <button
        type="button"
        aria-label="ปิดกล่องช่วยเหลือ"
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/5 text-black transition-colors duration-200 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
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
          <path d="M5 5l10 10M15 5 5 15" />
        </svg>
      </button>
      <span className="rounded-full bg-[#f4d075] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black">
        ถามเรา
      </span>
      <p className="hidden text-sm font-medium text-black/72 sm:block">
        สวัสดี, ต้องการความช่วยเหลือไหม?
      </p>
    </div>
  );
}
