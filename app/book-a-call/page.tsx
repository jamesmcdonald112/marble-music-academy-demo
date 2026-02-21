export default function BookACallPage() {
  return (
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
        </div>
      </div>
    </main>
  )
}
