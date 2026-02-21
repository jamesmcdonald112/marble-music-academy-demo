import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function BookACallPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-8 md:p-10">
          <h1 className="font-serif text-3xl text-foreground md:text-4xl">
            Book a Free Consultation
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            This is a placeholder for Calendly integration. In the live version,
            this is where you would be able to pick a date and time to book a
            free introductory guitar lesson consultation.
          </p>
          <div className="mt-8 rounded-md border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            Calendly scheduling widget will appear here once connected.
            <div className="mt-4 rounded-md border border-accent/40 bg-accent/10 p-4 text-foreground">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Work enquiries
              </p>
              <p className="mt-1 text-sm font-medium">
                Interested in working together? Contact me directly:
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.linkedin.com/in/jamesmcdonald-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent underline underline-offset-4"
                >
                  linkedin.com/in/jamesmcdonald-dev
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a
                  href="mailto:james@jamesmcdonald.dev"
                  className="font-semibold text-accent underline underline-offset-4"
                >
                  james@jamesmcdonald.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
