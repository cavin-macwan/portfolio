import Image from "next/image";
import Link from "next/link";

const projects = [
  { number: "01", name: "Oren", type: "iOS app / SwiftUI", description: "A calm reading companion that turns small sessions into a lasting habit.", image: "/projects/oren-app-icon.png", href: "https://www.getoren.app/", theme: "blue" },
  { number: "02", name: "Permissions Compose", type: "Open source / Android", description: "Taking the friction out of Android permission handling, one elegant API at a time.", image: "/projects/permissions-compose-logo.png", href: "https://github.com/meticha/permissions-compose", theme: "lime" },
];

const articles = [
  { title: "Why Kotlin uses Coroutines", description: "A look at the ideas that made asynchronous code feel simple again.", date: "APR 06, 2025", slug: "why-kotlin-uses-coroutines", image: "/articles/why-kotlin-uses-coroutines.svg" },
  { title: "Master Permission Handling in Jetpack Compose", description: "Making Android permissions a little less painful.", date: "MAR 05, 2025", slug: "master-permission-handling-in-jetpack-compose", image: "/articles/master-permission-handling-in-jetpack-compose.svg" },
];

export default function Home() {
  return <main>
    <section className="hero" id="top">
      <div className="hero-intro wrap"><span className="eyebrow">CAVIN MACWAN <span className="eyebrow-line" /> BUILDER BY NATURE</span><span className="hero-side-note">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
      <div className="hero-main wrap"><div className="hero-copy"><h1>Making digital<br /><em>feel</em> human<span className="period">.</span></h1><p>I turn curious ideas into thoughtful products, useful tools, and experiences people love to use.</p><a className="round-link" href="#work">EXPLORE MY WORK <span aria-hidden="true">↗</span></a></div><div className="portrait-composition"><div className="portrait-card"><Image src="/hero-portrait.jpg" alt="Portrait of Cavin Macwan" fill priority sizes="(max-width: 800px) 72vw, 390px" /></div><span className="portrait-label">HELLO, I’M CAVIN. <span aria-hidden="true">✳</span></span><span className="portrait-caption">DESIGN MINDED<br />CODE DRIVEN</span></div></div>
      <div className="hero-bottom wrap"><span>CO-FOUNDER AT <a href="https://meticha.com" target="_blank" rel="noreferrer">METICHA ↗</a></span><span>AVAILABLE FOR GOOD IDEAS <span className="status-dot" /></span></div>
    </section>

    <section className="work-section" id="work"><div className="wrap"><div className="section-top"><span className="eyebrow light">01 / SELECTED WORK</span><p>Built with purpose.<br />Made to be used.</p></div><h2 className="section-title">The things I <em>make.</em></h2><div className="project-grid">{projects.map((project) => <a className={`project-card ${project.theme}`} key={project.name} href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><div className="project-art"><span className="project-number">{project.number} / 02</span><Image src={project.image} alt="" width={180} height={180} sizes="180px" /><span className="project-open" aria-hidden="true">↗</span></div><div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-arrow" aria-hidden="true">↗</span></div></a>)}</div><p className="work-note">A little code, a lot of care. <span aria-hidden="true">✳</span></p></div></section>

    <section className="about-section" id="about"><div className="wrap about-layout"><div><span className="eyebrow">02 / A LITTLE ABOUT ME</span><div className="about-mark" aria-hidden="true">✳</div></div><div className="about-copy"><h2>Curiosity is<br />my <em>favorite tool.</em></h2><p>I’m Cavin, co-founder of <a href="https://meticha.com" target="_blank" rel="noreferrer">Meticha ↗</a>. I began with mobile apps and followed the interesting questions into products, design systems, open source, and the cloud.</p><p>I care about the small details that make software feel effortless. Underneath that simplicity is careful engineering, a willingness to experiment, and a belief that useful things can be beautiful too.</p><div className="about-tags"><span>ANDROID</span><span>SWIFTUI</span><span>FLUTTER</span><span>PRODUCT THINKING</span></div></div></div></section>

    <section className="writing-section" id="writing"><div className="wrap"><div className="writing-heading"><div><span className="eyebrow">03 / NOTES FROM THE DESK</span><h2>Ideas, <em>out loud.</em></h2></div><Link href="/articles" className="text-link">ALL ARTICLES <span aria-hidden="true">↗</span></Link></div><div className="writing-grid">{articles.map((article) => <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}><div className="article-image"><Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="article-meta"><span>{article.date}</span><span>TECHNICAL WRITING</span></div><h3>{article.title} <span aria-hidden="true">↗</span></h3><p>{article.description}</p></Link>)}</div></div></section>
  </main>;
}
