import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ainea Esrat Esika — Python Developer & ML Engineer",
  description:
    "Portfolio of Ainea Esrat Esika — Python Developer at GLASCUTR, Computer Science graduate of AIUB, working across Django, Node.js, ERPNext, React, and Vue.js, with a research background in machine learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-body text-ink antialiased`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
