import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-top" data-reveal="">
          <span className="eyebrow light">04 / WHAT’S NEXT?</span>
          <span>HAVE A GOOD IDEA?</span>
        </div>
        <a
          className="footer-cta"
          data-reveal=""
          href="mailto:cavin@meticha.com"
        >
          Let’s make
          <br />
          <em>it matter.</em>
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CAVIN MACWAN</span>
          <div>
            <a href="mailto:cavin@meticha.com">EMAIL ↗</a>
            <a
              href="https://github.com/cavin-macwan"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/cavin-macwan/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://twitter.com/cavin_dev"
              target="_blank"
              rel="noreferrer"
            >
              TWITTER ↗
            </a>
          </div>
          <Link href="/#top">BACK TO TOP ↑</Link>
        </div>
      </div>
    </footer>
  );
}
