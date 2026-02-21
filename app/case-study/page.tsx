import type { Metadata } from "next"
import { CaseStudyPage } from "@/components/case-study-page"

export const metadata: Metadata = {
  title: "Case Study | Marble Music Academy",
  description: "Case study page for long-form marketing and performance content.",
}

export default async function CaseStudyRoutePage() {
  return <CaseStudyPage />
}
