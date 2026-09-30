import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-intro wrap">
        <span className="eyebrow">
          CAVIN MACWAN <span className="eyebrow-line" /> BUILDER BY NATURE
        </span>
        <span className="hero-side-note">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </span>
      </div>
      <div className="hero-main wrap">
        <div className="hero-copy">
          <h1>
            Making digital
            <br />
            <em>feel</em> human<span className="period">.</span>
          </h1>
          <p>
            I turn curious ideas into thoughtful products, useful tools, and
            experiences people love to use.
          </p>
          <a className="round-link" href="#work">
            EXPLORE MY WORK <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="portrait-composition">
          <div className="portrait-card">
            <Image
              src="/hero-portrait.jpg"
              alt="Portrait of Cavin Macwan"
              fill
              priority
              sizes="(max-width: 800px) 72vw, 390px"
            />
          </div>
          <span className="portrait-label">
            HELLO, I’M CAVIN. <span aria-hidden="true">✳</span>
          </span>
          <span className="portrait-caption">
            DESIGN MINDED
            <br />
            CODE DRIVEN
          </span>
        </div>
      </div>
      <div className="hero-bottom wrap">
        <span>
          CO-FOUNDER AT{" "}
          <a href="https://meticha.com" target="_blank" rel="noreferrer">
            METICHA ↗
          </a>
        </span>
        <span>
          AVAILABLE FOR GOOD IDEAS <span className="status-dot" />
        </span>
      </div>
    </section>
  );
}
