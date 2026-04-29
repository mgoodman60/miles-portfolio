import Link from "next/link"

export function Footer() {
  return (
    <footer data-surface="dark" style={{ background: "var(--footer-bg)", color: "var(--footer-fg)" }}>
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Brand */}
        <div>
          <p className="serif text-xl font-light text-white mb-3">Miles Goodman</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--footer-fg)" }}>
            Site Superintendent · W Principles, LLC<br />
            MBA Candidate — Project Management &amp; AI<br />
            Northern Kentucky University
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>
            Pages
          </p>
          <nav className="flex flex-col gap-0">
            {[
              ["Projects", "/projects"],
              ["My Reports", "/my-reports"],
              ["AI Tools", "/ai-tools"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm py-2 transition-colors hover:text-white"
                style={{ color: "var(--footer-fg)" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] mb-4" style={{ color: "var(--footer-fg-soft)" }}>
            Contact
          </p>
          <div className="text-sm flex flex-col gap-0" style={{ color: "var(--footer-fg)" }}>
            <a href="mailto:msgoodman1997@gmail.com" className="py-2 hover:text-white transition-colors">
              msgoodman1997@gmail.com
            </a>
            <span className="py-2">Lexington, KY</span>
          </div>
        </div>
      </div>

      <div
        className="border-t mx-auto max-w-[1480px] px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs"
        style={{ borderColor: "rgba(207,205,199,0.12)", color: "var(--footer-fg-faint)" }}
      >
        <span>© {new Date().getFullYear()} Miles Goodman. All rights reserved.</span>
        <span>Site Superintendent · W Principles, LLC · Mount Sterling, KY</span>
      </div>
    </footer>
  )
}
