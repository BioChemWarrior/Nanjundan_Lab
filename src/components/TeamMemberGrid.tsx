import Link from "next/link";
import type { TeamMember } from "@/lib/content";
import { memberInitials, teamPhotoPosition } from "@/lib/teamUtils";
import { toTeamPhotoSrc } from "@/lib/teamPhotoSrc";

type Props = {
  members: readonly TeamMember[];
  emptyMessage?: string;
};

export function TeamMemberGrid({ members, emptyMessage = "No members listed yet." }: Props) {
  if (members.length === 0) {
    return <p className="text-center text-sm text-slate-500 sm:text-base">{emptyMessage}</p>;
  }

  return (
    <ul className="grid list-none grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => {
        const src = "photo" in member && member.photo ? toTeamPhotoSrc(member.photo) : "";
        const isPi = member.group === "pi";
        const photoPosition = teamPhotoPosition(member.id);

        return (
          <li key={member.id} className="text-center">
            <Link
              href={`/team/${member.id}`}
              className="group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <div
                className={`relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full border bg-slate-100 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-300/60 group-hover:shadow-md ${
                  isPi
                    ? "border-blue-400/55 shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_22px_50px_-32px_rgba(59,130,246,0.55)]"
                    : "border-slate-200"
                }`}
              >
                {isPi ? (
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-cyan-600/35 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                    PI
                  </span>
                ) : null}
                {src ? (
                  <img
                    src={src}
                    alt=""
                    width={440}
                    height={440}
                    className="h-full w-full object-cover"
                    style={photoPosition ? { objectPosition: photoPosition } : undefined}
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
              {member.role ? (
                <p className="mt-1 whitespace-pre-line text-pretty px-1 text-xs text-slate-500 sm:text-sm">{member.role}</p>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
