import Link from "next/link";
import { articles } from "@/app/articles/data";
import ArticleCard from "../articles/article-card";

export default function WritingSection() {
  return (
    <section className="writing-section" id="writing">
      <div className="wrap">
        <div className="writing-heading" data-reveal="">
          <div>
            <span className="eyebrow">03 / NOTES FROM THE DESK</span>
            <h2>
              Ideas, <em>out loud.</em>
            </h2>
          </div>
          <Link href="/articles" className="text-link">
            ALL ARTICLES <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="writing-grid">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
