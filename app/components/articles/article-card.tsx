import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/app/articles/data";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      className="article-card"
      data-reveal=""
      href={`/articles/${article.slug}`}
    >
      <div className="article-image">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
      <div className="article-meta">
        <span>{article.shortDate}</span>
        <span>TECHNICAL WRITING</span>
      </div>
      <h3>
        {article.title} <span aria-hidden="true">↗</span>
      </h3>
      <p>{article.homeDescription}</p>
    </Link>
  );
}
