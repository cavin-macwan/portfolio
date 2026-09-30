# Cavin’s portfolio

Next.js App Router portfolio with articles, Google Analytics, and scroll animations.

## Development

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Run `pnpm lint` and `pnpm build` before submitting changes. Use `pnpm start` to serve the production build.

## Structure

```text
app/
  layout.tsx             Shared layout and site metadata
  page.tsx               Home page
  globals.css            Site styles
  scroll-motion.tsx      Browser animations
  articles/
    data.ts              Shared article details and preview copy
    page.tsx             Article index
    [slug]/page.tsx       Article loading and route metadata
  components/
    articles/            Article cards, rows, and post view
    home/                Hero, work, about, and writing sections
    google-analytics.tsx Google tag
    json-ld.tsx          Structured data rendering
    site-header.tsx      Main navigation
    site-footer.tsx      Contact and social links
content/articles/        Article Markdown
public/                  Images and other static assets
```

To add an article, add its Markdown and cover images, update `app/articles/data.ts`, and add its URL to `app/sitemap.xml`. The home page, article index, static routes, and article metadata use the shared article data.
