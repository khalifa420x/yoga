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
  title: "Yoga privé Sud de la France | Tous niveaux à domicile | Maison Naya Yoga",
  description:
    "Cours de yoga privé à domicile dans le Sud de la France. Séances personnalisées pour débutants et confirmés à Nice, Cannes, Monaco et Saint-Tropez. Expérience haut de gamme.",
  keywords: [
    "yoga privé sud de la france",
    "cours de yoga à domicile",
    "professeur yoga privé",
    "yoga tous niveaux",
    "yoga nice cannes monaco",
    "yoga débutant",
    "yoga avancé",
    "yoga personnalisé",
    "séance yoga privée",
    "yoga bien-être france",
  ],
  openGraph: {
    title: "Maison Naya Yoga — Yoga privé haut de gamme dans le Sud de la France",
    description:
      "Séances de yoga personnalisées à domicile. Tous niveaux, tous horizons. Nice, Cannes, Monaco, Saint-Tropez.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
