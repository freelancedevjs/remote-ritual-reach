import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json")
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "sacredreach-admin-2024"

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token")
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8")
    const contacts = JSON.parse(raw)

    // Optional filters via query params
    const status  = req.nextUrl.searchParams.get("status")   // new|read|resolved
    const subject = req.nextUrl.searchParams.get("subject")
    const locale  = req.nextUrl.searchParams.get("locale")
    const since   = req.nextUrl.searchParams.get("since")     // ISO date string
    const limit   = parseInt(req.nextUrl.searchParams.get("limit") || "100")
    const offset  = parseInt(req.nextUrl.searchParams.get("offset") || "0")

    let filtered = contacts as any[]
    if (status)  filtered = filtered.filter((c: any) => c.status  === status)
    if (subject) filtered = filtered.filter((c: any) => c.subject === subject)
    if (locale)  filtered = filtered.filter((c: any) => c.locale  === locale)
    if (since)   filtered = filtered.filter((c: any) => c.createdAt >= since)

    // newest first
    filtered.sort((a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    const total  = filtered.length
    const paged  = filtered.slice(offset, offset + limit)

    return NextResponse.json({
      total,
      offset,
      limit,
      returned: paged.length,
      contacts: paged,
    })
  } catch {
    return NextResponse.json({ total: 0, contacts: [] })
  }
}

// Mark a contact as read/resolved
export async function PATCH(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token")
  if (token !== ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { id, status } = body
    if (!id || !["new", "read", "resolved"].includes(status)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const raw  = await fs.readFile(DATA_FILE, "utf-8")
    const all  = JSON.parse(raw) as any[]
    const idx  = all.findIndex((c: any) => c.id === id)
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 })

    all[idx].status = status
    await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2), "utf-8")
    return NextResponse.json({ ok: true, contact: all[idx] })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
