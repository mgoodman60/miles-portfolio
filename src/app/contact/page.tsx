export const metadata = {
  title: "Contact — Miles Goodman",
  description: "Get in touch with Miles Goodman, Site Superintendent at W Principles, LLC.",
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16 px-6 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)] mb-4">Direct contact</p>
          <h1 className="serif font-light tracking-tight" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>Contact</h1>
        </div>
      </div>

      <section className="border-t py-24 px-6 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Form */}
          <div>
            <h2 className="serif font-light text-2xl mb-8" style={{ color: "var(--ink)" }}>Send a message</h2>
            <form
              action="https://formsubmit.co/msgoodman1997@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="Portfolio Contact — Miles Goodman" />
              <input type="hidden" name="_next" value="https://milesgoodman.com/contact?sent=true" />
              {/* Honeypot — leave empty, bots fill it */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 text-sm rounded border bg-[var(--paper)] focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--ink)",
                    "--tw-ring-color": "var(--accent)",
                  } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 text-sm rounded border bg-[var(--paper)] focus:outline-none focus:ring-2"
                  style={{ borderColor: "var(--border)", color: "var(--ink)", "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 text-sm rounded border bg-white focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: "var(--border)", color: "var(--ink)", "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 text-sm font-medium rounded transition-colors w-full md:w-auto focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 hover:opacity-90 transition-opacity"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Direct details */}
          <div>
            <h2 className="serif font-light text-2xl mb-8" style={{ color: "var(--ink)" }}>Direct</h2>
            <div className="space-y-6">
              {[
                { label: "Email", value: "msgoodman1997@gmail.com", href: "mailto:msgoodman1997@gmail.com" },
                { label: "Location", value: "Lexington, KY", href: null },
                { label: "Company", value: "W Principles, LLC · Mount Sterling, KY", href: null },
                { label: "Role", value: "Site Superintendent", href: null },
                { label: "MBA", value: "Northern Kentucky University · Expected 2026", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium hover:underline" style={{ color: "var(--accent)" }}>
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded p-8" style={{ background: "var(--paper-warm)" }}>
              <p className="serif font-light text-xl mb-3" style={{ color: "var(--ink)" }}>
                Open to conversations about:
              </p>
              <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                <li>· Project superintendent roles (commercial GC)</li>
                <li>· AI tools in construction operations</li>
                <li>· MBA project collaboration</li>
                <li>· Concrete self-perform scopes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
