import type { Metadata } from "next";
import { SectionHeading } from "@/components/ContentCard";
import { site } from "@/lib/content";
import { submitContactForm } from "./actions";

export const metadata: Metadata = {
  title: "Contact",
};

type Props = {
  searchParams: Promise<{ sent?: string; error?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Reach us"
        title="Contact the laboratory"
        description="Server-side form demo—wire submitContactForm to email, CRM, or ticketing."
      />

      {params.sent ? (
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100">
          Thanks—your note was recorded locally for this demo. Replace the server action with your integration.
        </div>
      ) : null}

      {params.error ? (
        <div className="rounded-2xl border border-rose-400/40 bg-rose-500/10 px-5 py-4 text-sm text-rose-50">
          Please fill in name, email, and message before submitting.
        </div>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <form action={submitContactForm} className="space-y-6 rounded-3xl border border-white/[0.08] bg-lab-900/70 p-8">
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-lab-950/80 px-4 py-3 text-sm text-white outline-none ring-blue-400/30 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2"
              placeholder="Ada Lovelace"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-lab-950/80 px-4 py-3 text-sm text-white outline-none ring-blue-400/30 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2"
              placeholder="you@institution.edu"
            />
          </div>
          <div>
            <label htmlFor="organization" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Organization (optional)
            </label>
            <input
              id="organization"
              name="organization"
              className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-lab-950/80 px-4 py-3 text-sm text-white outline-none ring-blue-400/30 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2"
              placeholder="Department / company"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-2xl border border-white/[0.08] bg-lab-950/80 px-4 py-3 text-sm text-white outline-none ring-blue-400/30 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2"
              placeholder="Tell us about datasets, timelines, and NDAs."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-950/35 transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-6 text-sm text-slate-400">
          <div className="rounded-3xl border border-white/[0.08] bg-lab-900/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/90">Direct</p>
            <p className="mt-4 text-white">{site.email}</p>
            <p className="mt-2">{site.phone}</p>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-lab-900/50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/90">Postal</p>
            <p className="mt-4">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
