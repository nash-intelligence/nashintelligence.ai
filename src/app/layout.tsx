import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nashintelligence.ai"),
  title: "Nash Intelligence — Governed AI infrastructure for enterprise work",
  description:
    "Nash Intelligence combines organisational memory, governed agents, workflow control, and private deployment into one controlled AI infrastructure layer.",
  keywords: [
    "Nash Intelligence",
    "governed AI",
    "private AI",
    "agent orchestration",
    "enterprise AI infrastructure",
    "organisational memory",
  ],
  authors: [{ name: "Nash Intelligence" }],
  openGraph: {
    title: "Nash Intelligence — Governed AI infrastructure for enterprise work",
    description:
      "Private, governed AI infrastructure across Cloud, Edge, and BYOD deployment modes.",
    type: "website",
    url: "https://nashintelligence.ai",
    siteName: "Nash Intelligence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nash Intelligence — Governed AI infrastructure for enterprise work",
    description:
      "Private, governed AI infrastructure across Cloud, Edge, and BYOD deployment modes.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${hanken.variable} ${geistMono.variable}`} data-theme="dark">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
