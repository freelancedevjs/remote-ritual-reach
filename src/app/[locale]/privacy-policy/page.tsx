import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Link } from "@/i18n/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy — SacredReach",
  description:
    "Learn how SacredReach (gaia.mom) collects, uses, and protects your personal information when you book rituals, consultations, and prasad deliveries.",
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="min-h-screen bg-[#0d0a1a] text-gray-200">
      {/* Header */}
      <div className="border-b border-white/10 bg-[#0d0a1a]/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-cinzel text-lg text-amber-400 hover:text-amber-300 transition-colors">
            SacredReach
          </Link>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Privacy Policy</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-invert prose-amber max-w-none">
        <h1 className="font-cinzel text-3xl md:text-4xl text-amber-400 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">
          Effective date: June 1, 2025 &nbsp;·&nbsp; Last updated: June 13, 2026
        </p>

        <Section title="1. Who We Are">
          <p>
            SacredReach operates the website <strong>gaia.mom</strong> ("Site"), a platform that
            connects individuals with sacred rituals, spiritual gurus, and holy places worldwide.
            We enable remote ritual bookings, guru consultations, and prasad (blessed offering)
            deliveries across all faith traditions.
          </p>
          <p>
            References to <em>"we"</em>, <em>"us"</em>, or <em>"our"</em> mean SacredReach /
            gaia.mom. For privacy inquiries, contact us at{" "}
            <a href="mailto:privacy@gaia.mom" className="text-amber-400 hover:underline">
              privacy@gaia.mom
            </a>
            .
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <Subsection title="2a. Information you provide directly">
            <ul>
              <li>
                <strong>Full name</strong> — used to personalize your ritual and delivery records.
              </li>
              <li>
                <strong>WhatsApp number</strong> — used to send ritual video proof, booking
                confirmations, and support messages.
              </li>
              <li>
                <strong>Email address</strong> — collected when you contact us or subscribe to
                updates.
              </li>
              <li>
                <strong>Gotra / family lineage identifier</strong> — an optional field for Hindu
                rituals that helps priests dedicate offerings correctly. If omitted, a universal
                default is used — it is never shared beyond the performing priest.
              </li>
              <li>
                <strong>Prayer intention / wish</strong> — the spiritual purpose you describe for
                your ritual or consultation.
              </li>
              <li>
                <strong>Faith tradition / religion</strong> — used to route your request to the
                appropriate sacred site or guru.
              </li>
              <li>
                <strong>Shipping address</strong> — collected only if you opt in to physical prasad
                delivery.
              </li>
              <li>
                <strong>Payment information</strong> — processed by our third-party payment
                provider (Stripe or equivalent). We do <strong>not</strong> store card numbers or
                full payment credentials on our servers.
              </li>
            </ul>
          </Subsection>

          <Subsection title="2b. Information collected automatically">
            <ul>
              <li>
                <strong>Device and browser data</strong> — IP address, browser type, operating
                system, and screen resolution, collected via standard web server logs.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time on site, referring URL, and
                click paths, collected via cookies and analytics tools.
              </li>
              <li>
                <strong>Advertising identifiers</strong> — collected by the Meta (Facebook) Pixel
                and similar tools to measure ad performance and enable interest-based advertising.
              </li>
              <li>
                <strong>Language and region</strong> — inferred from browser settings to serve the
                correct language version of the Site.
              </li>
            </ul>
          </Subsection>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul>
            <li>
              <strong>Fulfil your booking</strong> — coordinate with the temple, guru, or sacred
              site; deliver video proof of the ritual; and ship prasad where ordered.
            </li>
            <li>
              <strong>Communication</strong> — send booking confirmations, scheduling updates,
              follow-up support, and refund confirmations via WhatsApp or email.
            </li>
            <li>
              <strong>Personalization</strong> — display content in your preferred language and
              tailor guru or ritual recommendations to your faith tradition.
            </li>
            <li>
              <strong>Advertising</strong> — measure the effectiveness of our ads on Meta
              (Facebook / Instagram) and other platforms; create custom or lookalike audiences to
              reach people who may benefit from our services.
            </li>
            <li>
              <strong>Analytics and improvement</strong> — understand how visitors use the Site so
              we can improve performance and content.
            </li>
            <li>
              <strong>Legal compliance</strong> — meet applicable tax, consumer protection, and
              cross-border data-transfer obligations.
            </li>
          </ul>
        </Section>

        <Section title="4. Facebook / Meta Pixel and Advertising">
          <p>
            Our Site uses the <strong>Meta Pixel</strong> (formerly Facebook Pixel), a small piece
            of code that tracks visitor actions — such as viewing a service page, initiating a
            booking, or completing a purchase — and reports these events to Meta Platforms, Inc.
          </p>
          <p>This means:</p>
          <ul>
            <li>
              Meta may set cookies on your browser and link your activity on our Site to your
              Facebook or Instagram profile.
            </li>
            <li>
              We may use this data to show our ads to people on Facebook or Instagram who have
              previously visited our Site (<em>retargeting</em>), or to people with similar
              characteristics (<em>lookalike audiences</em>).
            </li>
            <li>
              Meta's handling of this data is governed by{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline"
              >
                Meta's Privacy Policy
              </a>
              .
            </li>
          </ul>
          <p>
            You can opt out of Meta's interest-based ads at{" "}
            <a
              href="https://www.facebook.com/ads/preferences"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              facebook.com/ads/preferences
            </a>{" "}
            or through your device's advertising settings.
          </p>
        </Section>

        <Section title="5. Sharing Your Information">
          <p>We do not sell your personal information. We share it only as follows:</p>
          <ul>
            <li>
              <strong>Sacred-site partners and gurus</strong> — your name, gotra (if provided),
              and ritual intention are shared with the priest or guru performing your service. They
              are bound by confidentiality.
            </li>
            <li>
              <strong>Shipping providers</strong> — your name and address are shared with courier
              partners solely to deliver prasad.
            </li>
            <li>
              <strong>Payment processors</strong> — payment details are processed by PCI-compliant
              third-party processors; they receive only what is necessary to complete the
              transaction.
            </li>
            <li>
              <strong>Analytics and advertising platforms</strong> — aggregated or
              pseudonymised data is shared with Meta, Google Analytics, or similar tools as
              described in Section 4.
            </li>
            <li>
              <strong>Legal requirements</strong> — we may disclose information when required by
              law, court order, or to protect the rights and safety of our users.
            </li>
          </ul>
        </Section>

        <Section title="6. Cookies">
          <p>We use the following types of cookies:</p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2 pr-4 text-amber-400 font-semibold">Type</th>
                <th className="text-left py-2 pr-4 text-amber-400 font-semibold">Purpose</th>
                <th className="text-left py-2 text-amber-400 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <CookieRow type="Essential" purpose="Site functionality, language routing" examples="Session, locale" />
              <CookieRow type="Analytics" purpose="Understanding visitor behaviour" examples="Google Analytics" />
              <CookieRow type="Advertising" purpose="Ad measurement, retargeting, lookalike audiences" examples="Meta Pixel, fbp, fbclid" />
            </tbody>
          </table>
          <p>
            You can control cookies through your browser settings. Disabling advertising cookies
            will not affect your ability to book rituals, but may result in less relevant ads.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain personal data for as long as necessary to fulfil your booking and any
            follow-up support, and for up to <strong>3 years</strong> thereafter for legal and
            financial record-keeping. Advertising event data (Meta Pixel) is retained per Meta's
            own policies, typically up to 180 days for ad targeting.
          </p>
        </Section>

        <Section title="8. International Transfers">
          <p>
            SacredReach serves a global community. Your data may be processed in countries where
            our sacred-site partners, cloud infrastructure, or payment processors operate. When
            transferring data from the European Economic Area or the United Kingdom, we rely on
            Standard Contractual Clauses or equivalent safeguards.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> the personal data we hold about you.
            </li>
            <li>
              <strong>Correct</strong> inaccurate or incomplete information.
            </li>
            <li>
              <strong>Delete</strong> your data ("right to be forgotten"), subject to legal
              retention obligations.
            </li>
            <li>
              <strong>Object</strong> to or restrict processing for marketing purposes.
            </li>
            <li>
              <strong>Data portability</strong> — receive your data in a machine-readable format.
            </li>
            <li>
              <strong>Opt out of sale / sharing</strong> (California residents under CCPA/CPRA).
            </li>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:privacy@gaia.mom" className="text-amber-400 hover:underline">
              privacy@gaia.mom
            </a>
            . We will respond within 30 days.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>
            Our services are intended for adults aged 18 and over. We do not knowingly collect
            personal information from children under 13 (or under 16 in the EEA). If you believe
            a child has submitted data to us, please contact{" "}
            <a href="mailto:privacy@gaia.mom" className="text-amber-400 hover:underline">
              privacy@gaia.mom
            </a>{" "}
            and we will delete it promptly.
          </p>
        </Section>

        <Section title="11. Security">
          <p>
            We use industry-standard measures — HTTPS encryption in transit, access controls, and
            regular security reviews — to protect your data. No method of transmission over the
            internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="12. Third-Party Links">
          <p>
            Our Site may link to external websites (sacred-site pages, guru profiles, payment
            portals). This Privacy Policy does not cover those sites. Please review their privacy
            policies independently.
          </p>
        </Section>

        <Section title="13. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be posted
            on this page with an updated effective date. Your continued use of our Site after any
            changes constitutes acceptance of the new policy.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p>For any privacy-related questions or requests:</p>
          <address className="not-italic mt-3 space-y-1 text-gray-300">
            <p>
              <strong className="text-white">SacredReach</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@gaia.mom" className="text-amber-400 hover:underline">
                privacy@gaia.mom
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://gaia.mom" className="text-amber-400 hover:underline">
                gaia.mom
              </a>
            </p>
          </address>
        </Section>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-600">
        <p>© {new Date().getFullYear()} SacredReach · gaia.mom · All rights reserved.</p>
        <p className="mt-1">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          {" · "}
          <Link href="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
        </p>
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-cinzel text-xl text-amber-300 mb-4 border-b border-amber-900/40 pb-2">
        {title}
      </h2>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold text-gray-100 mb-2">{title}</h3>
      {children}
    </div>
  )
}

function CookieRow({
  type,
  purpose,
  examples,
}: {
  type: string
  purpose: string
  examples: string
}) {
  return (
    <tr className="border-b border-white/10">
      <td className="py-2 pr-4 font-medium text-gray-200">{type}</td>
      <td className="py-2 pr-4 text-gray-400">{purpose}</td>
      <td className="py-2 text-gray-500">{examples}</td>
    </tr>
  )
}
