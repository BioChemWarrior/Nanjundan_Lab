import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { site } from "@/lib/content";
import { submitContactForm } from "./actions";

export const metadata: Metadata = {
  title: "Contact",
};

type Props = {
  searchParams: Promise<{
    sent?: string;
    dev?: string;
    error?: "missing" | "config" | "send" | string;
    hint?: string;
  }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <SectionHeading title="Contact the laboratory" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
      {params.sent ? (
        <div className="space-y-3">
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
            {params.dev ? (
              <>
                Your submission was accepted in <strong>local development</strong> mode. No email was sent—check the
                terminal where <code className="rounded bg-emerald-100/90 px-1">npm run dev</code> is running for the
                full message.
              </>
            ) : (
              <>Thank you—your message was sent. We will get back to you as soon as we can.</>
            )}
          </div>
          {params.dev ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700">
              To send real mail: create <code className="rounded bg-white px-1">.env.local</code> in the project root
              with <code className="rounded bg-white px-1">RESEND_API_KEY</code> and{" "}
              <code className="rounded bg-white px-1">RESEND_FROM_EMAIL</code> (see{" "}
              <code className="rounded bg-white px-1">.env.example</code>), then restart the dev server.
            </div>
          ) : null}
        </div>
      ) : null}

      {params.error === "missing" ? (
        <div className="rounded-2xl border border-rose-300 bg-rose-50 px-5 py-4 text-sm text-rose-900">
          Please fill in name, email, and message (and keep the message under 12,000 characters).
        </div>
      ) : null}

      {params.error === "config" ? (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-950">
          The contact form cannot send email until Resend is configured. Please email{" "}
          <a className="font-semibold text-amber-950 underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          instead. For local development, add <code className="rounded bg-amber-100/80 px-1">RESEND_API_KEY</code> and{" "}
          <code className="rounded bg-amber-100/80 px-1">RESEND_FROM_EMAIL</code> to{" "}
          <code className="rounded bg-amber-100/80 px-1">.env.local</code> and restart{" "}
          <code className="rounded bg-amber-100/80 px-1">npm run dev</code>. On production, set the same variables in
          your host&apos;s environment (see <code className="rounded bg-amber-100/80 px-1">.env.example</code>).
        </div>
      ) : null}

      {params.error === "send" ? (
        <div className="rounded-2xl border border-rose-300 bg-rose-50 px-5 py-4 text-sm text-rose-900">
          <p>
            We could not send your message right now. Please try again later, or email{" "}
            <a className="font-semibold text-rose-950 underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            directly.
          </p>
          {params.hint === "resend-sandbox" ? (
            <p className="mt-3 text-pretty border-t border-rose-200/80 pt-3 text-rose-950/95">
              Resend is blocking delivery, often because <code className="rounded bg-rose-100/90 px-1">onboarding@resend.dev</code>{" "}
              may only send to addresses allowed for your account until you{" "}
              <a
                className="font-semibold underline"
                href="https://resend.com/docs/dashboard/domains/introduction"
                target="_blank"
                rel="noreferrer"
              >
                verify a sending domain
              </a>
              . For local testing, set <code className="rounded bg-rose-100/90 px-1">RESEND_DEV_TO</code> in{" "}
              <code className="rounded bg-rose-100/90 px-1">.env.local</code> to one allowed inbox (see{" "}
              <code className="rounded bg-rose-100/90 px-1">.env.example</code>), or set{" "}
              <code className="rounded bg-rose-100/90 px-1">CONTACT_TO_EMAIL</code> to a single allowed address, then
              restart <code className="rounded bg-rose-100/90 px-1">npm run dev</code>. Check the terminal for the exact
              Resend error.
            </p>
          ) : (
            <p className="mt-3 text-pretty border-t border-rose-200/80 pt-3 text-rose-950/95">
              If you use Resend, confirm the API key, <code className="rounded bg-rose-100/90 px-1">RESEND_FROM_EMAIL</code>, and
              that recipients are allowed for your sender (verified domain or Resend test rules). The server logs print the
              provider error.
            </p>
          )}
        </div>
      ) : null}

      <form action={submitContactForm} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-blue-400/30 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-blue-400/30 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2"
              placeholder="you@institution.edu"
            />
          </div>
          <div>
            <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Organization (optional)
            </label>
            <input
              id="organization"
              name="organization"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-blue-400/30 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2"
              placeholder="Department / company"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-blue-400/30 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2"
              placeholder="Tell us about datasets, timelines, and NDAs."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto"
          >
            Send message
          </button>
      </form>
        </div>
      </div>
    </>
  );
}
