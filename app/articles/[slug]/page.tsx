import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import ArticlePost from "@/app/components/articles/article-post";
import { articles } from "../data";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  return article
    ? {
        title: article.title,
        description: article.description,
        alternates: { canonical: `/articles/${slug}` },
        openGraph: {
          type: "article",
          title: article.title,
          description: article.description,
          url: `/articles/${slug}`,
          publishedTime: article.published,
          authors: ["Cavin Macwan"],
          images: [article.socialImage],
        },
        twitter: {
          card: "summary_large_image",
          creator: "@cavin_dev",
          images: [article.socialImage],
        },
      }
    : {};
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  if (!article) notFound();
  const source = readFileSync(
    join(process.cwd(), "content", "articles", `${slug}.md`),
    "utf8",
  );
  const content = source
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .trimStart()
    .replaceAll("https://cavinmacwan.com/articles/", "/articles/")
    .replace(/<img src="([^"]+)"[^>]*\/>/g, "![]($1)")
    .replace(/^!\[[^\]]*\]\([^\n]+\)\n/, "");
  return <ArticlePost article={article} content={content} />;
}
