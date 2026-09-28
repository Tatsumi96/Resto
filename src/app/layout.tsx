import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Résto | Restaurant Gastronomique Chic",
  description: "Découvrez l'élégance culinaire chez Résto. Une expérience gastronomique inoubliable alliant tradition et modernité dans un cadre luxueux.",
  keywords: ["restaurant", "gastronomie", "chic", "luxe", "dîner", "résto"],
  openGraph: {
    title: "Résto | Restaurant Gastronomique Chic",
    description: "Une expérience gastronomique inoubliable.",
    url: "https://resto.com",
    siteName: "Résto",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
      }
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
