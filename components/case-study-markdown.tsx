import { readFile } from "node:fs/promises"
import path from "node:path"

type TocItem = {
  id: string
  title: string
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1")
}

function slugify(text: string): string {
  const plain = stripInlineMarkdown(text).toLowerCase().trim()
  const slug = plain
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

  return slug || "section"
}

function formatInline(text: string): string {
  let out = escapeHtml(text)

  out = out.replace(/`([^`]+)`/g, "<code>$1</code>")
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>")
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => {
    // Allow common safe link types, including internal routes.
    const isExternal = /^https?:\/\//.test(href)
    const isSafeInternal = /^(\/(?!\/)|#|mailto:|tel:)/.test(href)

    if (!isExternal && !isSafeInternal) {
      return _match
    }

    if (isExternal) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
    }

    return `<a href="${href}">${label}</a>`
  })

  return out
}

function markdownToHtml(markdown: string): { html: string; toc: TocItem[] } {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n")
  const html: string[] = []
  const toc: TocItem[] = []

  let inCodeBlock = false
  let inUl = false
  let inOl = false
  const slugCounts = new Map<string, number>()

  const closeLists = () => {
    if (inUl) {
      html.push("</ul>")
      inUl = false
    }
    if (inOl) {
      html.push("</ol>")
      inOl = false
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (line.startsWith("```")) {
      closeLists()
      if (!inCodeBlock) {
        inCodeBlock = true
        html.push("<pre><code>")
      } else {
        inCodeBlock = false
        html.push("</code></pre>")
      }
      continue
    }

    if (inCodeBlock) {
      html.push(escapeHtml(rawLine) + "\n")
      continue
    }

    if (line.length === 0) {
      closeLists()
      continue
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/)
    if (headingMatch) {
      closeLists()
      const level = headingMatch[1].length
      const title = headingMatch[2]
      const baseSlug = slugify(title)
      const seen = slugCounts.get(baseSlug) ?? 0
      slugCounts.set(baseSlug, seen + 1)
      const id = seen === 0 ? baseSlug : `${baseSlug}-${seen + 1}`

      if (level === 2) {
        toc.push({ id, title: stripInlineMarkdown(title) })
      }

      html.push(`<h${level} id="${id}" class="scroll-mt-28">${formatInline(title)}</h${level}>`)
      continue
    }

    const quoteMatch = line.match(/^>\s+(.+)$/)
    if (quoteMatch) {
      closeLists()
      html.push(`<blockquote>${formatInline(quoteMatch[1])}</blockquote>`)
      continue
    }

    const ulMatch = line.match(/^-\s+(.+)$/)
    if (ulMatch) {
      if (inOl) {
        html.push("</ol>")
        inOl = false
      }
      if (!inUl) {
        html.push("<ul>")
        inUl = true
      }
      html.push(`<li>${formatInline(ulMatch[1])}</li>`)
      continue
    }

    const olMatch = line.match(/^\d+\.\s+(.+)$/)
    if (olMatch) {
      if (inUl) {
        html.push("</ul>")
        inUl = false
      }
      if (!inOl) {
        html.push("<ol>")
        inOl = true
      }
      html.push(`<li>${formatInline(olMatch[1])}</li>`)
      continue
    }

    closeLists()
    html.push(`<p>${formatInline(line)}</p>`)
  }

  closeLists()
  if (inCodeBlock) html.push("</code></pre>")

  return { html: html.join("\n"), toc }
}

async function readCaseStudyMarkdown(): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "case-study.md")
  return readFile(filePath, "utf8")
}

export async function CaseStudyMarkdown() {
  const markdown = await readCaseStudyMarkdown()
  const { html, toc } = markdownToHtml(markdown)

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
      <article
        className="prose prose-neutral lg:prose-lg max-w-none prose-headings:font-serif prose-headings:text-accent/80 prose-h1:text-accent prose-h2:mt-12 prose-h2:pt-6 prose-h2:border-t prose-h2:border-border/60 prose-a:text-sky-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:marker:text-accent prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-accent prose-blockquote:text-foreground/80"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {toc.length > 0 ? (
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-lg border border-border/60 bg-background/80 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">On this page</p>
            <nav className="mt-3">
              <ol className="list-decimal space-y-2 pl-5 text-sm marker:text-muted-foreground">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>
      ) : null}
    </div>
  )
}
