import { Header } from "@/components/header"
import { CaseStudyMarkdown } from "@/components/case-study-markdown"

export async function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="border-t border-border/50 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl px-6">
          <CaseStudyMarkdown />
        </div>
      </main>
    </>
  )
}
