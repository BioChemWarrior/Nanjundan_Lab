"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";

type Project = (typeof projects)[number];

function ProjectRoundIcon({ project }: { project: Project }) {
  return (
    <div className="relative h-36 w-36 overflow-hidden rounded-full border-[3px] border-slate-200 bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 shadow-md transition duration-300 group-hover:border-blue-300/70 group-hover:shadow-lg sm:h-60 sm:w-60 sm:border-4 lg:h-72 lg:w-72">
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center" aria-hidden>
          <svg className="h-14 w-14 text-slate-300 sm:h-16 sm:w-16 lg:h-20 lg:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10.5" r="1.75" fill="currentColor" stroke="none" />
            <path d="M3 16l4.5-4.5 3.5 3.5L14 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/0 transition duration-300 group-hover:bg-blue-500/5" />
    </div>
  );
}

export function ResearchProjectGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelected(project);
  };

  useEffect(() => {
    if (!selected) return;
    dialogRef.current?.showModal();
  }, [selected]);

  const closeDialog = () => {
    setSelected(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-col items-center gap-6 text-center sm:gap-8">
            <button
              type="button"
              onClick={() => openProject(project)}
              className="group rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              aria-label={`Show details for ${project.title}`}
            >
              <ProjectRoundIcon project={project} />
            </button>
            <h3 className="max-w-[9.5rem] text-pretty text-base font-semibold leading-snug text-slate-900 sm:max-w-sm sm:text-2xl lg:max-w-md lg:text-3xl">
              {project.shortTitle ?? project.title}
            </h3>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={closeDialog}
        className="fixed inset-0 z-50 m-auto w-[min(100vw-2rem,44rem)] max-h-[min(100vh-2rem,90vh)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm"
        aria-labelledby={selected ? `project-dialog-title-${selected.slug}` : undefined}
      >
        {selected ? (
          <div className="flex max-h-[min(100vh-2rem,90vh)] flex-col">
            <div className="flex items-start justify-between gap-5 border-b border-slate-100 px-7 py-6 sm:px-8 sm:py-7">
              <div className="flex min-w-0 items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/40 sm:h-24 sm:w-24">
                  {selected.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={selected.image} alt="" className="h-full w-full object-cover object-center" />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">{selected.status}</p>
                  <h2
                    id={`project-dialog-title-${selected.slug}`}
                    className="mt-2 text-pretty text-xl font-semibold leading-snug text-slate-900 sm:text-2xl"
                  >
                    {selected.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-lg p-2.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                aria-label="Close project details"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 overflow-y-auto px-7 py-6 sm:px-8 sm:py-7">
              <p className="text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{selected.summary}</p>
              {selected.partners.length > 0 ? (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Partners</p>
                  <ul className="mt-3 space-y-1.5 text-base text-slate-700">
                    {selected.partners.map((partner) => (
                      <li key={partner}>{partner}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="border-t border-slate-100 px-7 py-5 sm:px-8 sm:py-6">
              <Link
                href={`/projects/${selected.slug}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-blue-700 transition hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                View full program page
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
