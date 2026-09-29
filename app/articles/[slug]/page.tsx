import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const articles = {
  "why-kotlin-uses-coroutines": { title: "Why Kotlin uses Coroutines", description: "Why Kotlin introduced coroutines over threads, callbacks, and Rx.", date: "APRIL 06, 2025", image: "/articles/why-kotlin-uses-coroutines.svg" },
  "master-permission-handling-in-jetpack-compose": { title: "Master Permission Handling in Jetpack Compose", description: "Simplify Android runtime permission management in Jetpack Compose.", date: "MARCH 05, 2025", image: "/articles/master-permission-handling-in-jetpack-compose.svg" },
} as const;

type Slug = keyof typeof articles;

export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as Slug];
  return article ? { title: article.title, description: article.description, openGraph: { images: [article.image] } } : {};
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  if (!(slug in articles)) notFound();
  const article = articles[slug as Slug];
  const source = readFileSync(join(process.cwd(), "content", "articles", `${slug}.md`), "utf8");
  const content = source.replace(/^---\n[\s\S]*?\n---\n/, "").trimStart().replaceAll("https://cavinmacwan.com/articles/", "/articles/").replace(/<img src="([^"]+)"[^>]*\/>/g, "![]($1)").replace(/^!\[[^\]]*\]\([^\n]+\)\n/, "");
  return <main className="post-page" id="top"><div className="wrap"><div className="page-kicker"><span className="eyebrow">CAVIN MACWAN / WRITING</span><Link href="/articles">← ALL ARTICLES</Link></div><div className="post-head"><span className="eyebrow">{article.date} / DEVELOPMENT</span><h1>{article.title}</h1><p>{article.description}</p></div><div className="post-hero"><Image src={article.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 1100px" /></div><article className="prose"><ReactMarkdown>{content}</ReactMarkdown></article><Link className="post-back" href="/articles">← BACK TO ALL ARTICLES</Link></div></main>;
}
