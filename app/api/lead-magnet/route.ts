import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  /** Honeypot – must be empty */
  website: z.string().max(0, "Bot detected").optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.website) {
      // Silently accept to not reveal the trap
      return NextResponse.json({ success: true })
    }

    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    // In production, store the lead in your database / email list provider here
    // e.g. await addToMailingList(result.data.name, result.data.email)
    console.log("[Lead Magnet] New lead:", result.data.name, result.data.email)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: ["Something went wrong. Please try again."] } },
      { status: 500 }
    )
  }
}
