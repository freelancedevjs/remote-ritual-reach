"use server"

import { promises as fs } from "fs"
import path from "path"
import { randomUUID } from "crypto"

export type ContactEntry = {
  id: string
  name: string
  email: string
  phone: string
  country: string
  subject: string
  relatedPlace: string
  message: string
  source: string
  locale: string
  createdAt: string
  status: "new" | "read" | "resolved"
}

export type ContactResult =
  | { ok: true; id: string }
  | { ok: false; error: string }

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json")

async function readContacts(): Promise<ContactEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeContacts(entries: ContactEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8")
}

export async function submitContact(
  locale: string,
  prevState: ContactResult | null,
  formData: FormData
): Promise<ContactResult> {
  const name        = (formData.get("name")         as string || "").trim()
  const email       = (formData.get("email")        as string || "").trim()
  const phone       = (formData.get("phone")        as string || "").trim()
  const country     = (formData.get("country")      as string || "").trim()
  const subject     = (formData.get("subject")      as string || "").trim()
  const relatedPlace= (formData.get("relatedPlace") as string || "").trim()
  const message     = (formData.get("message")      as string || "").trim()
  const source      = (formData.get("source")       as string || "").trim()

  if (!name || !email || !subject || !message || !country) {
    return { ok: false, error: "Please fill in all required fields." }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  if (message.length < 10) {
    return { ok: false, error: "Message must be at least 10 characters." }
  }

  const entry: ContactEntry = {
    id: randomUUID(),
    name,
    email,
    phone,
    country,
    subject,
    relatedPlace,
    message,
    source,
    locale,
    createdAt: new Date().toISOString(),
    status: "new",
  }

  const all = await readContacts()
  all.push(entry)
  await writeContacts(all)

  return { ok: true, id: entry.id }
}
