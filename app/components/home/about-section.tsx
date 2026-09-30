export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="wrap about-layout">
        <div>
          <span className="eyebrow">02 / A LITTLE ABOUT ME</span>
          <div className="about-mark" aria-hidden="true">
            ✳
          </div>
        </div>
        <div className="about-copy">
          <h2>
            Curiosity is
            <br />
            my <em>favorite tool.</em>
          </h2>
          <p>
            I’m Cavin, co-founder of{" "}
            <a href="https://meticha.com" target="_blank" rel="noreferrer">
              Meticha ↗
            </a>
            . I began with mobile apps and followed the interesting questions
            into products, design systems, open source, and the cloud.
          </p>
          <p>
            I care about the small details that make software feel effortless.
            Underneath that simplicity is careful engineering, a willingness to
            experiment, and a belief that useful things can be beautiful too.
          </p>
          <div className="about-tags">
            <span>ANDROID</span>
            <span>SWIFTUI</span>
            <span>FLUTTER</span>
            <span>PRODUCT THINKING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
