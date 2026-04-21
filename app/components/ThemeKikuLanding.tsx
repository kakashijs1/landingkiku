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
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
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
    id: "casino-live",
    title: "เกมคาสิโน",
    subtitle: "โต๊ะสดโทนพรีเมียมสำหรับผู้เล่นที่ชอบบรรยากาศแบบวีไอพี",
    cue: "Royal Live",
    icon: "cards",
    accent: "from-[#57401b]/94 via-[#171318]/92 to-[#100d11]/98",
    imageSrc: "/gameHeader/gamecasino1.png",
    imageAlt: "เกมคาสิโน",
  },
  {
    id: "croupier-selection",
    title: "ดีลเลอร์บิคอน",
    subtitle: "วางหมวดเกมสดหรือดีลเลอร์คู่เด่นให้ใกล้หน้าตาใน reference",
    cue: "Live Croupier",
    icon: "live",
    accent: "from-[#4f3b1e]/94 via-[#171316]/92 to-[#100d11]/98",
    imageSrc: "/gameHeader/banner_slide_croupier.faac5a8d.png",
    imageAlt: "ดีลเลอร์บิคอน",
  },
  {
    id: "baccarat-lobby",
    title: "บาคาร่ามาเก๊าถึง",
    subtitle: "หมวดเด่นกึ่งกลางสำหรับเน้นเกมหลักตามจังหวะของ reference",
    cue: "Macau Baccarat",
    icon: "live",
    accent: "from-[#74521e]/94 via-[#181315]/92 to-[#100d11]/98",
    imageSrc: "/gameHeader/banner_slide_bc.54049352.png",
    imageAlt: "บาคาร่ามาเก๊าถึง",
  },
  {
    id: "fish-hunter",
    title: "เครื่องเกมยิงปลา",
    subtitle: "วางกลุ่มเกมสายแอ็กชันหรือคาแรกเตอร์สดจัดได้ในหมวดนี้",
    cue: "Fish Hunter",
    icon: "fish",
    accent: "from-[#223438]/94 via-[#111518]/92 to-[#100d11]/98",
    imageSrc: "/gameHeader/banner_slide_fish.b3356d05.png",
    imageAlt: "เครื่องเกมยิงปลา",
  },
  {
    id: "slot-premium",
    title: "สล็อตยอดนิยม",
    subtitle: "การ์ดปลายแถวสำหรับโปรโมตเกมทำเงินหรือค่ายที่กำลังมาแรง",
    cue: "Top Winner",
    icon: "star",
    accent: "from-[#4b2d33]/94 via-[#161216]/92 to-[#100d11]/98",
    imageSrc: "/gameHeader/banner_slide_slot.7d5f90b7.png",
    imageAlt: "สล็อตยอดนิยม",
  },
];

const reasons: Reason[] = [
  {
    eyebrow: "Hundreds of Slot Games",
    title: "เกมสล็อตหลายร้อยแบบ",
    description: "รวมเกมยอดนิยมและตู้เด่นในหน้าเดียว",
    icon: "slot",
    accent: "from-[#6d4a1c] via-[#221913] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg03.30ba153b.png",
    imageAlt: "เกมสล็อตหลายร้อยแบบ",
    imagePosition: "center center",
  },
  {
    eyebrow: "No. 1 in Asia",
    title: "อันดับหนึ่งของเอเชีย",
    description: "ตอกย้ำภาพลักษณ์และความน่าเชื่อถือระดับภูมิภาค",
    icon: "star",
    accent: "from-[#4a331b] via-[#181318] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg04.de84ae19.png",
    imageAlt: "อันดับหนึ่งของเอเชีย",
    imagePosition: "center center",
  },
  {
    eyebrow: "Fast & Secure",
    title: "ระบบเร็วและปลอดภัย",
    description: "สื่อเรื่อง speed และ security ชัดเจนในบัตรเดียว",
    icon: "shield",
    accent: "from-[#5a3d18] via-[#1b1617] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg05.0c9414d0.png",
    imageAlt: "ระบบเร็วและปลอดภัย",
    imagePosition: "center center",
  },
  {
    eyebrow: "Trusted Platform",
    title: "แพลตฟอร์มที่ไว้ใจได้",
    description: "ให้ภาพของ trust และ proof แบบตรงกับ ref",
    icon: "crown",
    accent: "from-[#6a4f1e] via-[#1e1714] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg06.0780365d.png",
    imageAlt: "แพลตฟอร์มที่ไว้ใจได้",
    imagePosition: "center center",
  },
  {
    eyebrow: "24/7 Customer Support",
    title: "บริการลูกค้าตลอด 24 ชั่วโมง",
    description: "ช่องทางช่วยเหลือพร้อมตอบไวทั้งวัน",
    icon: "support",
    accent: "from-[#4d3518] via-[#1c1617] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg01.3529caef.png",
    imageAlt: "บริการลูกค้าตลอด 24 ชั่วโมง",
    imagePosition: "center center",
  },
  {
    eyebrow: "One Account, Unlimited Play",
    title: "บัญชีเดียวเล่นครบทุกเกม",
    description: "สลับเล่นได้ครบทุกหมวดในระบบเดียว",
    icon: "wallet",
    accent: "from-[#3c2a1a] via-[#171318] to-[#100d11]",
    imageSrc: "/whyme/bg_avtg02.e7caeb5f.png",
    imageAlt: "บัญชีเดียวเล่นครบทุกเกม",
    imagePosition: "center center",
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
      className="relative px-4 pb-16 pt-4 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="relative overflow-visible pb-[10.4rem] sm:pb-[12.2rem] lg:pb-[14.2rem]">
          <div
            className="absolute inset-0 rounded-[36px] bg-[linear-gradient(180deg,rgba(17,14,20,0.86),rgba(10,9,13,0.92)),repeating-linear-gradient(90deg,rgba(255,216,138,0.06)_0_4px,transparent_4px_126px,rgba(255,216,138,0.05)_126px_128px,transparent_128px_248px)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,226,145,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true">
            <Image
              src="/mask/obj_mask.96351921.png"
              alt=""
              fill
              className="object-fill opacity-[0.96]"
              sizes="(min-width: 1280px) 1500px, 100vw"
            />
          </div>

          <div
            id="hero-swiper"
            className="relative z-10"
            data-reveal
            style={{ animationDelay: "120ms" }}
          >
            <HeroCarousel slides={heroSlides} />
          </div>

          <div
            className="absolute inset-x-0 -bottom-3 z-30 px-3 sm:-bottom-4 sm:px-6 lg:-bottom-6 lg:px-8"
            data-reveal
            style={{ animationDelay: "200ms" }}
          >
            <GameLobbyCarousel items={gameLobbyItems} />
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(560px,1.14fr)] lg:items-center">
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
                เลย์เอาต์ส่วนนี้ถูกจัดให้ใกล้กับ reference มากขึ้น โดยฝั่งซ้ายเล่า
                เรื่องแบรนด์แบบกระชับ ส่วนฝั่งขวาใช้ภาพ palace และ hostess จริงที่มีใน
                โปรเจคเพื่อให้หน้าดูแน่นแบบคาสิโนพรีเมียม แต่ยังอ่านง่ายบนทุกขนาดจอ
              </p>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-foreground/62">
              {[
                "เลย์เอาต์ใกล้ภาพอ้างอิง",
                "ใช้ asset จริงที่มีแล้ว",
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

          <div className="about-visual-cluster relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-[26rem]">
            <div className="about-visual-glow absolute inset-0" />
            <div className="absolute inset-0 overflow-hidden rounded-[30px] border border-accent-gold/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
              <Image
                src="/bgother/bg_homeWhy.a8b2d0a0.png"
                alt="ภาพประกอบทำไมเลือกเรา"
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 44vw, 92vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,9,13,0.08),rgba(11,9,13,0)_30%,rgba(11,9,13,0.16)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section id="reasons" className="overflow-hidden pb-14 pt-10">
      <div className="relative bg-[linear-gradient(180deg,#111015,#0d0b10)]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="relative px-2 pb-7 pt-6 text-center sm:px-4 lg:pb-9 lg:pt-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,225,137,0.14),transparent_48%)]" />
            <div className="relative flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
              <span className="text-[1.15rem] italic tracking-[0.34em] text-accent-gold-light/88 sm:text-[1.75rem]">
                Top
              </span>
              <span className="reason-top-number font-display text-[clamp(3.9rem,9vw,7rem)] font-semibold leading-none text-transparent">
                6
              </span>
              <h2 className="text-balance text-[clamp(1.18rem,2.35vw,2.35rem)] font-semibold italic tracking-[0.06em] text-[#f3d18d]">
                เหตุผลหลักที่ควรเลือก themeKiku Online
              </h2>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-accent-gold/10 bg-[linear-gradient(180deg,rgba(28,23,18,0.36),rgba(14,12,16,0.94))]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#0d0b10,transparent)] sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#0d0b10,transparent)] sm:w-24" />
          <div className="reasons-marquee-track flex w-max items-stretch">
            {[...reasons, ...reasons].map((reason, index) => (
              <article
                key={`${reason.title}-${index}`}
                className={`reason-strip-card group relative min-h-[12rem] w-[min(74vw,19rem)] flex-none overflow-hidden bg-gradient-to-br ${reason.accent} sm:w-[min(54vw,19.5rem)] lg:w-[min(19vw,21rem)] xl:w-[min(18vw,22rem)]`}
                style={{
                  clipPath:
                    "polygon(30px 0, 100% 0, calc(100% - 30px) 100%, 0 100%)",
                }}
              >
                <Image
                  src={reason.imageSrc}
                  alt={reason.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: reason.imagePosition ?? "center" }}
                  sizes="(min-width: 1280px) 21rem, (min-width: 640px) 19rem, 74vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,10,0.06),rgba(8,7,10,0.26)_100%)]" />
                <div className="absolute inset-y-0 left-0 w-[68%] bg-[linear-gradient(90deg,rgba(9,8,11,0.86),rgba(9,8,11,0.58)_48%,rgba(9,8,11,0.12)_82%,transparent)]" />

                <div className="absolute inset-0 z-10 flex items-start p-4 sm:p-5">
                  <div className="max-w-[10rem] space-y-2 sm:max-w-[11rem]">
                    <h3 className="text-balance text-[clamp(0.98rem,1.05vw,1.52rem)] font-semibold leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
                      {reason.title}
                    </h3>
                    <div className="inline-flex items-start gap-1.5 text-[0.8rem] italic leading-[1.16] text-[#ebcf92] sm:text-[0.9rem]">
                      <span className="mt-[0.12rem] inline-flex h-4.5 w-4.5 items-center justify-center rounded-full border border-accent-gold/32 bg-black/18 text-[0.58rem] not-italic text-[#ebcf92]">
                        &gt;
                      </span>
                      <span className="text-balance drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
                        {reason.eyebrow}
                      </span>
                    </div>
                  </div>
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
        src="/bgother/bg_footer.ef483996.jpg"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none object-cover opacity-[0.34]"
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

      <div className="relative overflow-hidden border-t border-accent-gold/10 bg-black/44">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#0c0a0f,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#0c0a0f,transparent)]" />
        <div className="provider-marquee-track flex w-max items-center gap-x-8 gap-y-4 px-3 py-4 text-center text-[clamp(1rem,1.6vw,1.65rem)] font-semibold uppercase tracking-[0.08em] text-accent-gold/40 sm:px-6">
          {[...providerNames, ...providerNames].map((provider, index) => (
            <span key={`${provider}-${index}`}>{provider}</span>
          ))}
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
