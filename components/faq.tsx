"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteContent } from "@/config/site-content"

const content = siteContent.faq

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {content.tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl text-balance">
          {content.heading}
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {content.items.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline hover:text-accent py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
