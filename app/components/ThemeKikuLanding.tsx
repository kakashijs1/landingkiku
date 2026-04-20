import Image from "next/image";
import AppIcon, { type IconName } from "./AppIcon";
import GameLobbyCarousel, { type GameLobbyItem } from "./GameLobbyCarousel";
import HeroCarousel, { type HeroCarouselSlide } from "./HeroCarousel";
import TopHeader from "./TopHeader";

type Reason = {
  title: string;
  eyebrow: string;
  description: string;
  icon: IconName;
  accent: string;
};

type SideAction = {
  label: string;
  icon: IconName;
};

type FooterColumn = {
  title: string;
  links: string[];
};

type FooterSocial = {
  label: string;
  icon: IconName;
};

const heroSlides: HeroCarouselSlide[] = [
  {
    id: "hero-vip",
    badge: "themeKiku Lobby",
    title: "แบนเนอร์หลักสำหรับภาพโปรโมชันแนวนอน",
    description:
      "ใช้ภาพจริงแนวนอนจากโฟลเดอร์ banner โดยเก็บ text summary, ปุ่มเลื่อน และ indicator ไว้ด้านล่าง เพื่อไม่ให้ทับกับงานกราฟิกในภาพ",
    imageSrc: "/banner/banner01.jpg",
    alt: "themeKiku banner 01",
    icon: "crown",
  },
  {
    id: "hero-live",
    badge: "Premium Event",
    title: "รองรับการใส่แบนเนอร์ event และโปรโมชั่น",
    description:
      "เหมาะกับรูปทรง 1920x450 แบบที่คุณใส่มาแล้ว และยังคงทำงานเป็น swiper ได้ทั้ง desktop และ mobile โดยเน้นภาพเต็มความกว้าง",
    imageSrc: "/banner/banner02.jpg",
    alt: "themeKiku banner 02",
    icon: "slot",
  },
];

const gameLobbyItems: GameLobbyItem[] = [
  {
    id: "fish-machine",
    title: "เครื่องเกมยิงปลา",
    subtitle: "พื้นที่ skeleton สำหรับตัวการ์ตูนหรือ artwork หมวดยิงปลา",
    cue: "Character Slot 01",
    icon: "fish",
    accent: "from-[#223438]/94 via-[#111518]/92 to-[#100d11]/98",
  },
  {
    id: "slot-popular",
    title: "สล็อตยอดนิยม",
    subtitle: "วางภาพ key visual ของสล็อตหรือ mascot หลักในหมวดนี้ได้",
    cue: "Character Slot 02",
    icon: "slot",
    accent: "from-[#5f3514]/94 via-[#171316]/92 to-[#100d11]/98",
  },
  {
    id: "casino-game",
    title: "เกมคาสิโน",
    subtitle: "การ์ดกลางถูกเน้นเป็น active state พร้อม pill label ด้านล่าง",
    cue: "Character Slot 03",
    icon: "cards",
    accent: "from-[#6c5124]/94 via-[#181315]/92 to-[#100d11]/98",
  },
  {
    id: "dealer-selection",
    title: "ดีลเลอร์บล็อกเชน",
    subtitle: "ใช้สำหรับภาพคู่หรืองาน character group ที่ต้องการสไลด์เพิ่ม",
    cue: "Character Slot 04",
    icon: "esports",
    accent: "from-[#4f3b1e]/94 via-[#171316]/92 to-[#100d11]/98",
  },
  {
    id: "blackjack-zone",
    title: "แบล็กแจ็กเข้าถึง",
    subtitle: "การ์ด skeleton ปลายแถวสำหรับ artwork เพิ่มเติมหรือหมวดพิเศษ",
    cue: "Character Slot 05",
    icon: "star",
    accent: "from-[#4b2d33]/94 via-[#161216]/92 to-[#100d11]/98",
  },
];

const reasons: Reason[] = [
  {
    eyebrow: "One Account, Unlimited Play",
    title: "บัญชีเดียวเล่นครบทุกเกม",
    description:
      "สลับระหว่างคาสิโนสด สล็อต กีฬา และลอตเตอรี่ได้โดยไม่ต้องสมัครซ้ำ",
    icon: "wallet",
    accent: "from-[#3c2a1a] via-[#171318] to-[#100d11]",
  },
  {
    eyebrow: "Hundreds of Slot Games",
    title: "เกมสล็อตหลายร้อยแบบ",
    description:
      "คัดค่ายเกมยอดนิยมพร้อมหน้าตู้หรูสไตล์คาสิโน เพื่อให้โทนหน้าเว็บสอดคล้องกับ reference",
    icon: "slot",
    accent: "from-[#6d4a1c] via-[#221913] to-[#100d11]",
  },
  {
    eyebrow: "No. 1 in Asia",
    title: "ภาพลักษณ์ระดับเอเชีย",
    description:
      "โครงหน้าและจังหวะการเล่าเรื่องถูกจัดให้อารมณ์พรีเมียม ดูใหญ่ และชัดเรื่องความน่าเชื่อถือ",
    icon: "star",
    accent: "from-[#4a331b] via-[#181318] to-[#100d11]",
  },
  {
    eyebrow: "Fast & Secure",
    title: "ระบบเร็วและปลอดภัย",
    description:
      "โทนสีเข้มทองช่วยเน้นความมั่นคง พร้อมปุ่มและจุดโต้ตอบที่มองเห็นได้ชัดบนทุก breakpoint",
    icon: "shield",
    accent: "from-[#5a3d18] via-[#1b1617] to-[#100d11]",
  },
  {
    eyebrow: "Trusted Platform",
    title: "แพลตฟอร์มที่ไว้ใจได้",
    description:
      "ใช้ section trust, proof และ iconography แบบสม่ำเสมอเพื่อสร้างความรู้สึก professional",
    icon: "crown",
    accent: "from-[#6a4f1e] via-[#1e1714] to-[#100d11]",
  },
  {
    eyebrow: "24/7 Customer Support",
    title: "ทีมงานพร้อมดูแลตลอดเวลา",
    description:
      "เพิ่ม rail ด้านข้างและจุดติดต่อหลักให้เหมือนหน้าอ้างอิงแต่ยังคุมความเรียบร้อยบนมือถือ",
    icon: "support",
    accent: "from-[#4d3518] via-[#1c1617] to-[#100d11]",
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

const footerSocials: FooterSocial[] = [
  { label: "โทรศัพท์", icon: "phone" },
  { label: "แชต", icon: "message" },
  { label: "ไลน์", icon: "line" },
];

function getStripClipPath(index: number, total: number) {
  if (index === 0) {
    return "polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)";
  }

  if (index === total - 1) {
    return "polygon(30px 0, 100% 0, 100% 100%, 0 100%)";
  }

  return "polygon(30px 0, 100% 0, calc(100% - 30px) 100%, 0 100%)";
}

function getStripPanelClipPath(index: number, total: number) {
  if (index === 0) {
    return "polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)";
  }

  if (index === total - 1) {
    return "polygon(22px 0, 100% 0, 100% 100%, 0 100%)";
  }

  return "polygon(22px 0, 100% 0, calc(100% - 22px) 100%, 0 100%)";
}

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
        <div className="hero-shell section-surface relative overflow-hidden rounded-[34px] px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="hero-backdrop absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,227,157,0.22),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(13,11,16,0.82))]" />

          <div className="relative z-10 space-y-6">
            <div
              id="hero-swiper"
              data-reveal
              style={{ animationDelay: "120ms" }}
            >
              <HeroCarousel slides={heroSlides} />
            </div>

            <div
              className="relative z-20 -mt-4 sm:-mt-6 lg:-mt-8"
              data-reveal
              style={{ animationDelay: "200ms" }}
            >
              <GameLobbyCarousel items={gameLobbyItems} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="section-surface about-section-shell mx-auto max-w-[1360px] overflow-hidden rounded-[34px] px-5 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
        <div className="about-frame-shine absolute inset-0" aria-hidden="true" />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-center">
          <div className="about-copy-shell relative z-10 space-y-5 lg:pr-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="about-pill">
                <span>ทำไมเลือกเรา</span>
              </div>
              <div className="about-brand-token">
                <AppIcon name="star" className="h-4.5 w-4.5" />
                <span>themeKiku International</span>
              </div>
              <div className="about-brand-token about-brand-token--primary">
                <AppIcon name="crown" className="h-6 w-6" />
                <span className="font-display text-base font-semibold text-white sm:text-lg">
                  themeKiku Online
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="max-w-[18ch] text-balance text-[clamp(1.8rem,3.4vw,3.1rem)] font-semibold leading-tight text-white">
                ไม่ต้องสงสัยเลยว่า{" "}
                <span className="text-[#f3d18d]">themeKiku</span>{" "}
                คือคาสิโนออนไลน์อันดับต้นของประเทศไทย
              </h2>
              <p className="max-w-[39rem] text-[15px] leading-8 text-foreground/74 sm:text-base">
                โครงนี้ถูกออกแบบให้เป็นแถบแนวยาวแบบ reference โดยเว้นฝั่งขวาเป็น
                placeholder สำหรับภาพหลักและภาพกิจกรรมที่คุณจะใส่เองภายหลัง
                ทั้งหมดถูกจัดจังหวะให้อ่านง่าย ดูพรีเมียม และไม่อัดแน่นเกินไป
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground/62">
              {[
                "เลย์เอาต์แนวยาว",
                "พร้อมแทนรูปจริง",
                "คุมโทนหรูบนทุกจอ",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#reasons"
              className="gold-button w-fit px-8 py-3 text-sm font-semibold"
            >
              เรียนรู้เพิ่มเติม
            </a>
          </div>

          <div className="about-visual-cluster relative min-h-[19rem] sm:min-h-[21rem] lg:min-h-[23rem]">
            <div className="about-visual-glow absolute inset-0" />
            <div className="about-stage-lines absolute inset-0" />

            <div
              className="about-main-panel skeleton-shimmer absolute bottom-[14%] left-[2%] h-[55%] w-[60%] overflow-hidden border border-accent-gold/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]"
              style={{
                clipPath: "polygon(8% 0,100% 0,92% 100%,0 100%)",
              }}
            >
              <div className="absolute inset-[0.8rem] border border-white/8 bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.12))]" />
              <div className="absolute inset-x-8 top-6 h-3 rounded-full bg-accent-gold/22" />
              <div className="absolute inset-x-12 top-12 h-3 rounded-full bg-white/10" />
              <div className="absolute inset-x-8 bottom-7 rounded-[16px] border border-dashed border-accent-gold/18 bg-black/10 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-gold/56">
                Main Image Slot
              </div>
            </div>

            <div
              className="about-triangle-frame absolute right-[11%] top-[8%] h-[34%] w-[31%] sm:right-[10%] sm:w-[29%] lg:right-[11%] lg:h-[36%] lg:w-[30%]"
              style={{
                clipPath: "polygon(18% 0,100% 0,82% 100%,0 100%)",
              }}
            >
              <div
                className="skeleton-shimmer absolute inset-[0.55rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))]"
                style={{
                  clipPath: "polygon(18% 0,100% 0,82% 100%,0 100%)",
                }}
              >
                <div className="absolute inset-x-6 top-5 h-3 rounded-full bg-accent-gold/24" />
                <div className="absolute inset-x-8 top-10 h-3 rounded-full bg-white/10" />
                <div className="absolute inset-x-6 bottom-6 rounded-[14px] border border-dashed border-accent-gold/18 bg-black/10 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-gold/54">
                  Gallery A
                </div>
              </div>
            </div>

            <div
              className="about-triangle-frame absolute right-[1%] top-[18%] h-[42%] w-[17%] sm:right-[2%] sm:w-[16%] lg:right-[2%] lg:h-[46%] lg:w-[15%]"
              style={{
                clipPath: "polygon(0 0,78% 0,100% 100%,22% 100%)",
              }}
            >
              <div
                className="skeleton-shimmer absolute inset-[0.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.08))]"
                style={{
                  clipPath: "polygon(0 0,78% 0,100% 100%,22% 100%)",
                }}
              >
                <div className="absolute inset-x-3 top-5 h-3 rounded-full bg-accent-gold/22" />
                <div className="absolute inset-x-3 bottom-6 rounded-[12px] border border-dashed border-accent-gold/18 bg-black/10 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-gold/54">
                  B
                </div>
              </div>
            </div>

            <div
              className="about-base-panel absolute bottom-[8%] left-[37%] h-[18%] w-[34%] overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(87,59,27,0.34),rgba(27,20,18,0.12))]"
              style={{
                clipPath: "polygon(12% 0,100% 0,86% 100%,0 100%)",
              }}
            >
              <div className="absolute inset-[0.6rem] border border-dashed border-accent-gold/16 bg-black/8" />
            </div>

            <div className="about-visual-caption absolute bottom-[1%] left-[30%] inline-flex min-h-12 min-w-[14rem] items-center justify-center rounded-full border border-accent-gold/20 bg-[linear-gradient(180deg,rgba(31,24,18,0.96),rgba(21,16,18,0.96))] px-6 text-sm font-semibold text-accent-gold-light shadow-[0_18px_40px_rgba(0,0,0,0.34)]">
              Premium Visual Story
            </div>
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
        <div className="overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,15,21,0.98),rgba(11,9,13,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
          <div className="relative border-b border-accent-gold/14 px-5 py-6 text-center sm:px-8 lg:px-12 lg:py-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,225,137,0.16),transparent_46%)]" />
            <div className="relative flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
              <span className="text-xl italic tracking-[0.38em] text-accent-gold-light/88 sm:text-3xl">
                Top
              </span>
              <span className="reason-top-number font-display text-[clamp(4rem,10vw,7.4rem)] font-semibold leading-none text-transparent">
                6
              </span>
              <h2 className="text-balance text-[clamp(1.35rem,3vw,2.45rem)] font-semibold italic tracking-[0.08em] text-[#f3d18d]">
                เหตุผลหลักที่ควรเลือก themeKiku Online
              </h2>
            </div>
          </div>

          <div className="grid gap-px bg-accent-gold/10 md:grid-cols-2 xl:grid-cols-6">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`reason-strip-card relative min-h-[24rem] overflow-hidden bg-gradient-to-br ${reason.accent}`}
                data-reveal
                style={{
                  animationDelay: `${index * 70}ms`,
                  clipPath: getStripClipPath(index, reasons.length),
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,10,0.1),rgba(8,7,10,0.72))]" />
                <div
                  className="absolute left-4 right-4 top-4 border border-white/6 bg-white/3 p-4"
                  style={{
                    clipPath: getStripPanelClipPath(index, reasons.length),
                  }}
                >
                  <div
                    className="skeleton-shimmer reason-panel-shell relative h-32 overflow-hidden border border-accent-gold/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]"
                    style={{
                      clipPath: getStripPanelClipPath(index, reasons.length),
                    }}
                  >
                    <div className="absolute inset-x-4 top-4 h-3 rounded-full bg-accent-gold/22" />
                    <div className="absolute inset-x-4 top-11 h-3 rounded-full bg-white/10" />
                    <div className="absolute inset-x-5 bottom-4 rounded-[14px] border border-dashed border-accent-gold/18 bg-black/12 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-gold/54">
                      Image Slot {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-end p-5 pt-44">
                  <div className="inline-flex items-center gap-2 text-accent-gold-light">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-gold/22 bg-black/16">
                      <AppIcon name={reason.icon} className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-gold-light/86">
                      {reason.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/72">
                    {reason.description}
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

function SiteFooter() {
  return (
    <footer className="relative z-10 mt-8 overflow-hidden border-t border-accent-gold/10 bg-[#0c0a0f]">
      <div className="footer-lounge-backdrop absolute inset-0" />
      <Image
        src="/themekiku-palace.svg"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.08] blur-[1px] saturate-0"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,9,13,0.92),rgba(11,9,13,0.84)_28%,rgba(11,9,13,0.9))]" />

      <div className="relative mx-auto max-w-[1400px] px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-accent-gold/10 pb-10 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.55fr))]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,226,145,0.88),rgba(191,139,28,0.38)_58%,transparent_74%)]">
                <AppIcon name="crown" className="h-11 w-11 text-accent-gold" />
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground/54">
                  themeKiku คาสิโน ออนไลน์
                </p>
                <p className="font-display text-3xl font-semibold text-[#f3d18d]">
                  themeKiku Online
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-accent-gold-light">
              {["G Club", "18+", "Gaming Lab", "Secure Payment"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent-gold/16 bg-black/18 px-3 py-1.5 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="max-w-[44rem] text-sm leading-8 text-foreground/76">
              ไม่ต้องสงสัยเลยว่า themeKiku คือคาสิโนออนไลน์โทนพรีเมียมที่ออกแบบมาให้
              ใช้งานง่ายบนทุกอุปกรณ์ พร้อมเมนูหลักชัดเจน, จุดสื่อสารแบรนด์เด่น,
              และโครงสร้าง section ที่รองรับการแทนภาพจริงได้ทันทีในรอบถัดไป
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              {footerSocials.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-accent-gold/18 bg-[linear-gradient(180deg,rgba(244,210,135,0.96),rgba(198,144,48,0.96))] text-[#20160b] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  <AppIcon name={item.icon} className="h-5 w-5" />
                </button>
              ))}

              <a
                href="#top"
                className="footer-action-button inline-flex min-h-12 items-center justify-center px-8 text-sm font-semibold text-[#20160b] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
              >
                เรียนรู้เพิ่มเติม
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-5 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-[#f3d18d]">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-base text-foreground/72 transition-colors duration-200 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 py-6 text-center text-xs text-foreground/46">
          <p>Copyright © 2026 Casino Online Entertainment All Rights Reserved</p>
          <p>ความละเอียด 1920x768 และแนะนำการใช้งานบนอุปกรณ์มือถือ</p>
        </div>
      </div>

      <div className="relative border-t border-accent-gold/10 bg-black/44">
        <div className="mx-auto max-w-[1800px] px-3 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-[clamp(1rem,1.6vw,1.65rem)] font-semibold uppercase tracking-[0.08em] text-accent-gold/40">
            {providerNames.map((provider) => (
              <span key={provider}>{provider}</span>
            ))}
          </div>
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
