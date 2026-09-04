import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyQuoteButton from "@/components/StickyQuoteButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Puella Equipment Services Limited",
    template: "%s | PUELLA",
  },
  description:
    "Equipment leasing, heavy machinery, marine services and industrial support for construction, energy and infrastructure projects across Nigeria.",
  keywords: [
    "equipment leasing Nigeria",
    "heavy machinery rental",
    "marine services",
    "construction equipment",
    "Port Harcourt",
    "haulage",
    "oil gas equipment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="sm:pb-0 pb-20 flex-1 flex flex-col">{children}</div>
        <StickyQuoteButton />
      </body>
    </html>
  );
}