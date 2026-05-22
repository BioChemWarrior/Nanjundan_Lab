import type { Metadata } from "next";
import Link from "next/link";
import { TeamHeroStrip } from "@/components/TeamHeroStrip";
import { teamMembers } from "@/lib/content";
import { toTeamPhotoSrc } from "@/lib/teamPhotoSrc";

export const metadata: Metadata = {
  title: "Team",
};

export const runtime = "nodejs";

function memberInitials(name: string) {
  const withoutTitle = name.replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, "");
  const parts = withoutTitle.split(/\s+/).filter((p) => /^[A-Za-z]/.test(p));
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <TeamHeroStrip title="Researchers" />
      <div className="bg-white px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ul className="grid list-none grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => {
              const src = member.photo ? toTeamPhotoSrc(member.photo) : "";
              return (
                <li key={member.id} className="text-center">
                  <Link
                    href={`/team/${member.id}`}
                    className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <div
                      className={`relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl border bg-slate-100 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-300/60 group-hover:shadow-md ${
                        member.id === "nanjundan"
                          ? "border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_22px_50px_-32px_rgba(59,130,246,0.55)]"
                          : "border-slate-200"
                      }`}
                    >
                      {member.id === "nanjundan" ? (
                        <span className="absolute left-3 top-3 z-10 rounded-full border border-cyan-600/35 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                          PI
                        </span>
                      ) : null}
                      {src ? (
                        <img
                          src={src}
                          alt=""
                          width={440}
                          height={550}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-3xl font-semibold tracking-tight text-slate-600"
                          aria-hidden
                        >
                          {memberInitials(member.name)}
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-balance px-1 text-sm font-semibold leading-snug text-slate-900 transition group-hover:text-blue-800 sm:text-base">
                      {member.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
