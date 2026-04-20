import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-body",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="th" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
