import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Articles", description: "Thoughts on building products, Android, and the craft of software by Cavin Macwan." };

const articles = [
  { title: "Why Kotlin uses Coroutines", description: "Why did Kotlin choose coroutines over threads, callbacks, and promises? A closer look at the tradeoffs behind the design.", date: "APRIL 06, 2025", slug: "why-kotlin-uses-coroutines", image: "/articles/why-kotlin-uses-coroutines.svg", number: "01" },
  { title: "Master Permission Handling in Jetpack Compose", description: "An approachable way to simplify Android runtime permissions, dialogs, and lifecycle events.", date: "MARCH 05, 2025", slug: "master-permission-handling-in-jetpack-compose", image: "/articles/master-permission-handling-in-jetpack-compose.svg", number: "02" },
];

export default function ArticlesPage() {
  return <main className="index-page" id="top"><div className="wrap"><div className="page-kicker"><span className="eyebrow">CAVIN MACWAN / WRITING</span><Link href="/">← BACK HOME</Link></div><h1 className="page-title">A few things<br /><em>worth sharing.</em></h1><p className="page-intro">Notes on building, learning, and figuring things out along the way.</p><div className="article-list">{articles.map((article) => <Link className="article-row" data-reveal="" href={`/articles/${article.slug}`} key={article.slug}><span className="article-row-number">{article.number} / 02</span><div className="article-row-image"><Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 230px" /></div><div className="article-row-copy"><span className="project-type">{article.date} / DEVELOPMENT</span><h2>{article.title}</h2><p>{article.description}</p></div><span className="article-row-arrow" aria-hidden="true">↗</span></Link>)}</div></div></main>;
}
