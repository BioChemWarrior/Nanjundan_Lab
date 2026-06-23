"use client";

import { useEffect } from "react";
import { PageBody, PageBodyInner } from "@/components/PageBody";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageBody>
      <PageBodyInner className="flex flex-1 flex-col items-center justify-center py-12 text-center">
        <h1 className="text-xl font-semibold text-slate-900">Something went wrong</h1>
        <p className="mt-3 text-pretty text-sm text-slate-600">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Try again
        </button>
      </PageBodyInner>
    </PageBody>
  );
}
