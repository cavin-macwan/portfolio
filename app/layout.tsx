import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import GoogleAnalytics from "./components/google-analytics";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import ScrollMotion from "./scroll-motion";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cavinmacwan.com"),
  title: {
    default: "Cavin Macwan — Developer & Product Builder",
    template: "%s — Cavin Macwan",
  },
  description:
    "Cavin Macwan is a developer and co-founder at Meticha, building thoughtful iOS and Android apps with SwiftUI, Kotlin, and Jetpack Compose.",
  openGraph: {
    title: "Cavin Macwan - Making digital feel human",
    description:
      "Thoughtful products, useful tools, and digital experiences built with care.",
    url: "/",
    siteName: "Cavin Macwan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cavin Macwan - Making digital feel human",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cavin_dev",
    images: [
      { url: "/og-image.png", alt: "Cavin Macwan - Making digital feel human" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <GoogleAnalytics />
        <SiteHeader />
        {children}
        <ScrollMotion />
        <SiteFooter />
      </body>
    </html>
  );
}
