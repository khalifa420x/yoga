import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif-var",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sophie Laurent · Yoga Montpellier · Cours tous niveaux",
  description: "Cours de yoga accessibles à tous niveaux à Montpellier. Hatha, Vinyasa, Yin et cours privés avec Sophie Laurent, professeure certifiée 200h RYT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${notoSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
