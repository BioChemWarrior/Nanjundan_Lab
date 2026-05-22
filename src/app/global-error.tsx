"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#030712", color: "#f8fafc", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ padding: "2rem", maxWidth: "32rem", margin: "0 auto" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong</h1>
          <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "#94a3b8", whiteSpace: "pre-wrap" }}>
            {error.message}
          </p>
          <button
            type="button"
            style={{
              marginTop: "1.5rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
