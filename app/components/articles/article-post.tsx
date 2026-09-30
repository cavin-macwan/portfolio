import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Article } from "@/app/articles/data";
import JsonLd from "../json-ld";

export default function ArticlePost({
  article,
  content,
}: {
  article: Article;
  content: string;
}) {
  return (
    <main className="post-page" id="top">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: article.title,
          description: article.description,
          image: `https://cavinmacwan.com${article.socialImage}`,
          datePublished: article.published,
          author: {
            "@type": "Person",
            name: "Cavin Macwan",
            url: "https://cavinmacwan.com",
          },
          mainEntityOfPage: `https://cavinmacwan.com/articles/${article.slug}`,
        }}
      />
      <div className="wrap">
        <div className="page-kicker">
          <span className="eyebrow">CAVIN MACWAN / WRITING</span>
          <Link href="/articles">← ALL ARTICLES</Link>
        </div>
        <div className="post-head">
          <span className="eyebrow">
            <time dateTime={article.published}>{article.date}</time> /
            DEVELOPMENT
          </span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
        <div className="post-hero" data-reveal="">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="(max-width: 800px) 100vw, 1100px"
          />
        </div>
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
        <Link className="post-back" href="/articles">
          ← BACK TO ALL ARTICLES
        </Link>
      </div>
    </main>
  );
}
