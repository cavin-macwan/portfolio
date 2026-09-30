import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "./data";
import ArticleRow from "../components/articles/article-row";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Thoughts on building products, Android, and the craft of software by Cavin Macwan.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles — Cavin Macwan",
    description:
      "Thoughts on building products, Android, and the craft of software by Cavin Macwan.",
    url: "/articles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cavin Macwan - Making digital feel human",
      },
    ],
  },
};

export default function ArticlesPage() {
  return (
    <main className="index-page" id="top">
      <div className="wrap">
        <div className="page-kicker">
          <span className="eyebrow">CAVIN MACWAN / WRITING</span>
          <Link href="/">← BACK HOME</Link>
        </div>
        <h1 className="page-title">
          A few things
          <br />
          <em>worth sharing.</em>
        </h1>
        <p className="page-intro">
          Notes on building, learning, and figuring things out along the way.
        </p>
        <div className="article-list">
          {articles.map((article, index) => (
            <ArticleRow
              article={article}
              index={index}
              total={articles.length}
              key={article.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
