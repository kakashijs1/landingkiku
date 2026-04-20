import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themekiku.example"),
  title: "themeKiku | คาสิโนสดอันดับหนึ่งในเอเชียน",
  description:
    "Landing page โทน luxury gaming แบบ responsive สร้างด้วย Next.js 16, TypeScript และ Tailwind CSS v4",
  openGraph: {
    title: "themeKiku Online",
    description:
      "ประสบการณ์คาสิโนสดโทนหรู สีดำทอง พร้อม section trust, reasons และ CTA ที่ชัดเจน",
    images: ["/themekiku-palace.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
