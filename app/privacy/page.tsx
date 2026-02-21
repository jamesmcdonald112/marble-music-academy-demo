import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Online Guitar Lessons",
  description:
    "How your personal data is collected, used, and protected when using this website and booking guitar lessons.",
}

const LAST_UPDATED = "February 2026"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="border-b border-border/50 py-6">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="font-serif text-lg text-foreground transition-colors hover:text-accent"
          >
            Your Name
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {/* Who I Am */}
          <Section title="Who I am">
            <p>
              This website is operated by Your Name, an independent guitar
              teacher based in Ireland offering personalised online guitar
              lessons. If you have any questions about how your data is handled,
              you can contact me at{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
              >
                youremail@example.com
              </a>
              .
            </p>
          </Section>

          {/* What Data I Collect */}
          <Section title="What data I collect">
            <p>When you use this website or book a lesson, I may collect:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                <strong>Name and email address</strong> &mdash; provided when
                you submit the contact form or book a lesson.
              </li>
              <li>
                <strong>Phone number</strong> (optional) &mdash; only if you
                choose to include it in the contact form.
              </li>
              <li>
                <strong>Booking details</strong> &mdash; date, time, and lesson
                preferences collected through Calendly when you schedule a
                lesson.
              </li>
              <li>
                <strong>Basic analytics data</strong> &mdash; such as pages
                visited, browser type, and general location (country level).
                This data is anonymised and used to understand how visitors use
                the site.
              </li>
            </ul>
          </Section>

          {/* How I Use It */}
          <Section title="How I use your data">
            <p>Your data is used for the following purposes:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>To respond to your enquiry or question.</li>
              <li>To schedule and deliver your guitar lessons.</li>
              <li>
                To send occasional follow-up emails related to your lessons
                (never spam or third-party marketing).
              </li>
              <li>
                To understand how the website is used so I can improve it over
                time.
              </li>
            </ul>
            <p className="mt-3">
              I will never sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </Section>

          {/* Third-Party Services */}
          <Section title="Third-party services">
            <p>This website uses a small number of trusted third-party tools:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                <strong>Calendly</strong> &mdash; for scheduling lessons. When
                you book through Calendly, your name, email, and booking details
                are processed by Calendly under their own{" "}
                <a
                  href="https://calendly.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Analytics provider</strong> &mdash; I use a
                privacy-focused analytics tool to collect anonymous usage data.
                No personally identifiable information is tracked.
              </li>
              <li>
                <strong>Vercel</strong> &mdash; this website is hosted on
                Vercel. Vercel may process basic server logs as part of hosting.
              </li>
            </ul>
          </Section>

          {/* Data Retention */}
          <Section title="Data retention">
            <p>
              I keep your contact details and lesson history for as long as we
              have an active teaching relationship. If you enquire but do not
              book, I retain your details for up to 12 months in case you wish
              to follow up, then delete them.
            </p>
            <p className="mt-3">
              You can request deletion of your data at any time by contacting me
              (see below).
            </p>
          </Section>

          {/* GDPR Rights */}
          <Section title="Your rights under GDPR">
            <p>
              As this service is based in Ireland and operates within the EU,
              your data is protected under the General Data Protection
              Regulation (GDPR). You have the right to:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-accent">
              <li>
                <strong>Access</strong> &mdash; request a copy of the personal
                data I hold about you.
              </li>
              <li>
                <strong>Rectification</strong> &mdash; ask me to correct any
                inaccurate or incomplete data.
              </li>
              <li>
                <strong>Erasure</strong> &mdash; ask me to delete your personal
                data.
              </li>
              <li>
                <strong>Restriction</strong> &mdash; ask me to limit how I use
                your data.
              </li>
              <li>
                <strong>Portability</strong> &mdash; request your data in a
                structured, commonly used format.
              </li>
              <li>
                <strong>Objection</strong> &mdash; object to certain types of
                processing.
              </li>
            </ul>
            <p className="mt-3">
              I aim to respond to all data requests within 30 days. If you are
              not satisfied with how I handle your data, you have the right to
              lodge a complaint with the{" "}
              <a
                href="https://www.dataprotection.ie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:text-accent/80"
              >
                Data Protection Commission
              </a>{" "}
              in Ireland.
            </p>
          </Section>

          {/* Contact for Data Requests */}
          <Section title="Contact me about your data">
            <p>
              If you have any questions about this privacy policy or want to
              exercise any of your rights, please get in touch:
            </p>
            <div className="mt-4 rounded-md border border-border bg-secondary/50 px-6 py-5">
              <p className="font-medium text-foreground">Your Name</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:youremail@example.com"
                  className="text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  youremail@example.com
                </a>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Location: Ireland
              </p>
            </div>
          </Section>
        </div>

        {/* Back link */}
        <div className="mt-16 border-t border-border/50 pt-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            &larr; Back to homepage
          </Link>
        </div>
      </main>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}
