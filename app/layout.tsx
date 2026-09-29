import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import ScrollMotion from "./scroll-motion";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cavinmacwan.com"),
  title: { default: "Cavin Macwan — Developer & Product Builder", template: "%s — Cavin Macwan" },
  description: "Cavin Macwan is a developer and co-founder at Meticha, building thoughtful iOS and Android apps with SwiftUI, Kotlin, and Jetpack Compose.",
  openGraph: { title: "Cavin Macwan — Making digital feel human", description: "Thoughtful products, useful tools, and digital experiences built with care.", url: "/", siteName: "Cavin Macwan", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cavin Macwan — Making digital feel human" }] },
  twitter: { card: "summary_large_image", creator: "@cavin_dev", images: [{ url: "/og-image.png", alt: "Cavin Macwan — Making digital feel human" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>
    <header className="site-header"><div className="wrap header-inner"><Link className="wordmark" href="/" aria-label="Cavin Macwan home">cavin<span>✳</span></Link><nav aria-label="Main navigation"><Link href="/#work">WORK</Link><Link href="/articles">ARTICLES</Link><Link href="/#about">ABOUT</Link></nav><a className="header-contact" href="mailto:cavin@meticha.com">LET’S TALK <span aria-hidden="true">↗</span></a></div></header>
    {children}
    <ScrollMotion />
    <footer className="site-footer" id="contact"><div className="wrap"><div className="footer-top" data-reveal=""><span className="eyebrow light">04 / WHAT’S NEXT?</span><span>HAVE A GOOD IDEA?</span></div><a className="footer-cta" data-reveal="" href="mailto:cavin@meticha.com">Let’s make<br /><em>it matter.</em><span aria-hidden="true">↗</span></a><div className="footer-bottom"><span>© {new Date().getFullYear()} CAVIN MACWAN</span><div><a href="mailto:cavin@meticha.com">EMAIL ↗</a><a href="https://github.com/cavin-macwan" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/cavin-macwan/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://twitter.com/cavin_dev" target="_blank" rel="noreferrer">TWITTER ↗</a></div><Link href="/#top">BACK TO TOP ↑</Link></div></div></footer>
  </body></html>;
}
