import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const articles = [
  { title: "Why Kotlin uses Coroutines", description: "A look at the ideas that made asynchronous code feel simple again.", date: "APR 06, 2025", slug: "why-kotlin-uses-coroutines", image: "/articles/why-kotlin-uses-coroutines.svg" },
  { title: "Master Permission Handling in Jetpack Compose", description: "Making Android permissions a little less painful.", date: "MAR 05, 2025", slug: "master-permission-handling-in-jetpack-compose", image: "/articles/master-permission-handling-in-jetpack-compose.svg" },
];

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Cavin Macwan", url: "https://cavinmacwan.com", image: "https://cavinmacwan.com/hero-portrait.jpg", sameAs: ["https://github.com/cavin-macwan", "https://www.linkedin.com/in/cavin-macwan/", "https://twitter.com/cavin_dev"], jobTitle: "Co-Founder", worksFor: { "@type": "Organization", name: "Meticha", url: "https://meticha.com" } }).replace(/</g, "\\u003c") }} />
    <section className="hero" id="top">
      <div className="hero-intro wrap"><span className="eyebrow">CAVIN MACWAN <span className="eyebrow-line" /> BUILDER BY NATURE</span><span className="hero-side-note">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
      <div className="hero-main wrap"><div className="hero-copy"><h1>Making digital<br /><em>feel</em> human<span className="period">.</span></h1><p>I turn curious ideas into thoughtful products, useful tools, and experiences people love to use.</p><a className="round-link" href="#work">EXPLORE MY WORK <span aria-hidden="true">↗</span></a></div><div className="portrait-composition"><div className="portrait-card"><Image src="/hero-portrait.jpg" alt="Portrait of Cavin Macwan" fill priority sizes="(max-width: 800px) 72vw, 390px" /></div><span className="portrait-label">HELLO, I’M CAVIN. <span aria-hidden="true">✳</span></span><span className="portrait-caption">DESIGN MINDED<br />CODE DRIVEN</span></div></div>
      <div className="hero-bottom wrap"><span>CO-FOUNDER AT <a href="https://meticha.com" target="_blank" rel="noreferrer">METICHA ↗</a></span><span>AVAILABLE FOR GOOD IDEAS <span className="status-dot" /></span></div>
    </section>

    <section className="build-section" id="work"><div className="wrap"><div className="build-heading" data-reveal=""><span className="eyebrow">01 / INSIDE THE BUILD</span><h2>Beyond the <em>surface.</em></h2><p>Two different products. The same attention to what makes them feel effortless.</p></div>
      <article className="build-feature oren-feature" data-reveal=""><div className="build-copy"><span className="build-index">01 / PRODUCT THINKING · SWIFTUI</span><h3>Make the next page<br /><em>feel easy.</em></h3><p>Reading apps are good at collecting books. Oren is built around the moment you actually open one.</p><div className="build-detail"><span>THE DECISION</span><p>Bring the current book, reading goal, and progress together on one calm home screen. A short session always has a clear next step.</p></div><a className="build-link" href="https://www.getoren.app/" target="_blank" rel="noreferrer">EXPLORE OREN <span aria-hidden="true">↗</span></a></div><div className="oren-stage"><span className="stage-caption">A HOME FOR THE READING HABIT / 01</span><div className="oren-screen"><Image src="/projects/oren-home.webp" alt="Oren home screen showing a current book, reading goal, and progress" width={684} height={1487} sizes="(max-width: 700px) 240px, 340px" /></div><span className="stage-mark" aria-hidden="true">✳</span></div></article>
      <article className="build-feature permissions-feature" data-reveal=""><div className="build-copy"><span className="build-index">02 / OPEN SOURCE · JETPACK COMPOSE</span><h3>Less ceremony.<br /><em>More building.</em></h3><p>Android permissions need careful handling, but asking for one shouldn’t take over a screen.</p><div className="build-detail"><span>THE DECISION</span><p>A composable state keeps permission checks, requests, and required access in one readable flow. Custom rationale UI stays possible when the experience calls for it.</p></div><a className="build-link" href="https://github.com/meticha/permissions-compose" target="_blank" rel="noreferrer">VIEW THE LIBRARY <span aria-hidden="true">↗</span></a></div><div className="code-stage"><div className="code-window"><div className="code-bar"><span>PermissionScreen.kt</span><span>KOTLIN / COMPOSE</span></div><pre><code>{`@Composable
fun PermissionScreen() {
    val permissions = rememberAppPermissionState(
        permissions = listOf(
            AppPermission(
                permission = Manifest.permission.CAMERA,
                description = "Camera access is needed",
                isRequired = true
            )
        )
    )

    Button(onClick = { permissions.requestPermission() }) {
        Text("Allow camera")
    }
}`}</code></pre></div><span className="code-caption">ONE STATE. A CLEARER PERMISSION FLOW. / 02</span></div></article>
    </div></section>

    <section className="about-section" id="about"><div className="wrap about-layout"><div><span className="eyebrow">02 / A LITTLE ABOUT ME</span><div className="about-mark" aria-hidden="true">✳</div></div><div className="about-copy"><h2>Curiosity is<br />my <em>favorite tool.</em></h2><p>I’m Cavin, co-founder of <a href="https://meticha.com" target="_blank" rel="noreferrer">Meticha ↗</a>. I began with mobile apps and followed the interesting questions into products, design systems, open source, and the cloud.</p><p>I care about the small details that make software feel effortless. Underneath that simplicity is careful engineering, a willingness to experiment, and a belief that useful things can be beautiful too.</p><div className="about-tags"><span>ANDROID</span><span>SWIFTUI</span><span>FLUTTER</span><span>PRODUCT THINKING</span></div></div></div></section>

    <section className="writing-section" id="writing"><div className="wrap"><div className="writing-heading" data-reveal=""><div><span className="eyebrow">03 / NOTES FROM THE DESK</span><h2>Ideas, <em>out loud.</em></h2></div><Link href="/articles" className="text-link">ALL ARTICLES <span aria-hidden="true">↗</span></Link></div><div className="writing-grid">{articles.map((article) => <Link className="article-card" data-reveal="" href={`/articles/${article.slug}`} key={article.slug}><div className="article-image"><Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="article-meta"><span>{article.date}</span><span>TECHNICAL WRITING</span></div><h3>{article.title} <span aria-hidden="true">↗</span></h3><p>{article.description}</p></Link>)}</div></div></section>
  </main>;
}
