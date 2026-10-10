import Link from "next/link"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ContactSentNotice } from "@/components/sections/ContactSentNotice"
import { profile } from "@/lib/profile"
import { LIVE_ORIGIN, withCanonical } from "@/lib/site"

export const metadata = withCanonical("/contact", {
  title: "Contact | Miles Goodman",
  description: "Discuss a construction project or field reporting question with Miles Goodman in Kentucky.",
})

const fieldClass =
  "w-full rounded border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-base text-[var(--ink)]"

const direct = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phoneDisplay, href: profile.phoneHref },
  { label: "Location", value: profile.location, href: null },
  { label: "Employer", value: profile.company, href: null },
  { label: "Role", value: profile.role, href: null },
  {
    label: "MBA",
    value: `Candidate · ${profile.mbaSchool} · ${profile.mbaExpected}`,
    href: null,
  },
] as const

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-10 px-6 md:pt-40 md:pb-16 md:px-12" style={{ background: "var(--paper-warm)" }}>
        <div className="mx-auto max-w-[1480px]">
          <SectionEyebrow className="mb-4">Direct contact</SectionEyebrow>
          <h1 className="serif font-light leading-[0.95] tracking-tight" style={{ fontSize: "clamp(40px,5.5vw,80px)", color: "var(--ink)" }}>Contact</h1>
          <p className="max-w-xl mt-5 text-sm leading-relaxed text-[var(--muted)]">
            Discuss a construction project or field reporting question with Miles Goodman.
            Include the project location, what you need help with, and how you prefer to hear back.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-solid inline-flex min-h-11 items-center rounded px-5 py-3 text-sm font-medium">Email Miles</a>
            <a href={profile.phoneHref} className="btn-line inline-flex min-h-11 items-center rounded border px-5 py-3 text-sm font-medium">Call {profile.phoneDisplay}</a>
          </div>
          <ContactSentNotice />
        </div>
      </div>

      <section className="border-t py-12 px-6 md:py-24 md:px-12" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 id="send-a-message" className="serif font-light text-2xl mb-3" style={{ color: "var(--ink)" }}>Send a message</h2>
            <p id="contact-form-help" className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              This form submits your message to FormSubmit for processing. This page cannot confirm email delivery. You can also email or call Miles directly above.
            </p>
            <form
              action={`https://formsubmit.co/${profile.email}`}
              method="POST"
              aria-labelledby="send-a-message"
              aria-describedby="contact-form-help"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="Miles Goodman portfolio inquiry" />
              <input type="hidden" name="_next" value={`${LIVE_ORIGIN}/contact?sent=true`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                defaultValue=""
                className="hidden"
              />

              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  autoCapitalize="words"
                  className={fieldClass}
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
                  autoComplete="email"
                  autoCapitalize="off"
                  inputMode="email"
                  spellCheck={false}
                  className={fieldClass}
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
                  className={`${fieldClass} min-h-36 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center rounded bg-[var(--ink)] px-8 py-3 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-[var(--accent)] sm:w-auto"
              >
                Send Message
              </button>
            </form>
            <p className="mt-5 max-w-xl text-xs leading-relaxed text-[var(--muted)]">
              Messages are handled by FormSubmit. Please keep confidential project details out of the initial inquiry.
            </p>
          </div>

          <div>
            <h2 className="serif font-light text-2xl mb-8" style={{ color: "var(--ink)" }}>Direct</h2>
            <dl className="space-y-6">
              {direct.map(({ label, value, href }) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-1">{label}</dt>
                  <dd>
                    {href ? (
                      <a href={href} className="text-sm font-medium underline underline-offset-2 hover:opacity-80" style={{ color: "var(--accent)" }}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>{value}</p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center px-4 py-2.5 text-sm font-medium rounded border transition-colors hover:bg-black/5"
                style={{ borderColor: "var(--border)", color: "var(--ink)" }}
              >
                About
              </Link>
              <Link
                href="/resume"
                className="inline-flex min-h-11 items-center px-4 py-2.5 text-sm font-medium rounded bg-[var(--ink)] text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
