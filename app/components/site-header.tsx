import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" href="/" aria-label="Cavin Macwan home">
          cavin<span>✳</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">WORK</Link>
          <Link href="/articles">ARTICLES</Link>
          <Link href="/#about">ABOUT</Link>
        </nav>
        <a className="header-contact" href="mailto:cavin@meticha.com">
          LET’S TALK <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
