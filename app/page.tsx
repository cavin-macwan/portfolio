import type { Metadata } from "next";
import JsonLd from "./components/json-ld";
import HeroSection from "./components/home/hero-section";
import BuildSection from "./components/home/build-section";
import AboutSection from "./components/home/about-section";
import WritingSection from "./components/home/writing-section";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Cavin Macwan",
          url: "https://cavinmacwan.com",
          image: "https://cavinmacwan.com/hero-portrait.jpg",
          sameAs: [
            "https://github.com/cavin-macwan",
            "https://www.linkedin.com/in/cavin-macwan/",
            "https://twitter.com/cavin_dev",
          ],
          jobTitle: "Co-Founder",
          worksFor: {
            "@type": "Organization",
            name: "Meticha",
            url: "https://meticha.com",
          },
        }}
      />
      <HeroSection />
      <BuildSection />
      <AboutSection />
      <WritingSection />
    </main>
  );
}
