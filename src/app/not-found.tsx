import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="mx-auto flex max-w-xl flex-1 flex-col items-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The resource you requested is unavailable. Double-check the URL or return home.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:bg-blue-500 active:scale-[0.98]"
      >
        Back to home
      </Link>
    </div>
    </div>
  );
}
