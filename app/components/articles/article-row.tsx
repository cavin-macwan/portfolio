import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/app/articles/data";

export default function ArticleRow({
  article,
  index,
  total,
}: {
  article: Article;
  index: number;
  total: number;
}) {
  return (
    <Link
      className="article-row"
      data-reveal=""
      href={`/articles/${article.slug}`}
    >
      <span className="article-row-number">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="article-row-image">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 230px"
        />
      </div>
      <div className="article-row-copy">
        <span className="project-type">{article.date} / DEVELOPMENT</span>
        <h2>{article.title}</h2>
        <p>{article.listingDescription}</p>
      </div>
      <span className="article-row-arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
