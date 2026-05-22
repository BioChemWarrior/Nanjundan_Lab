"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";
import { site } from "@/lib/content";

const MAX_MESSAGE_LENGTH = 12_000;

function parseRecipientList(raw: string | undefined): string[] {
  if (!raw?.trim()) return [];
  return raw
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter((s) => s.includes("@"));
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    redirect("/contact?error=missing");
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    redirect("/contact?error=missing");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const envRecipients = parseRecipientList(process.env.CONTACT_TO_EMAIL);
  const defaultRecipients = [
    ...new Set(
      [site.email, ...site.contactFormAdditionalRecipients]
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    ),
  ];
  let to = envRecipients.length > 0 ? envRecipients : defaultRecipients;

  const devToOverride =
    process.env.NODE_ENV === "development" ? process.env.RESEND_DEV_TO?.trim() : undefined;
  if (devToOverride) {
    console.warn("[contact] RESEND_DEV_TO is set — delivering only to this address (dev):", devToOverride);
    to = [devToOverride];
  }

  if (!apiKey || !from) {
    if (process.env.NODE_ENV === "development") {
      console.info(
        "\n[contact] Dev mode — Resend not configured (no email sent). Submission:\n",
        { name, email, organization: organization || "(none)", to, message },
        "\nAdd RESEND_API_KEY and RESEND_FROM_EMAIL to .env.local, then restart npm run dev.\n",
      );
      redirect("/contact?sent=1&dev=1");
    }
    console.error("[contact] Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
    redirect("/contact?error=config");
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeOrg = escapeHtml(organization);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  const html = `
    <h2 style="font-family:system-ui,sans-serif;">Website contact</h2>
    <p style="font-family:system-ui,sans-serif;"><strong>Name:</strong> ${safeName}</p>
    <p style="font-family:system-ui,sans-serif;"><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${organization ? `<p style="font-family:system-ui,sans-serif;"><strong>Organization:</strong> ${safeOrg}</p>` : ""}
    <p style="font-family:system-ui,sans-serif;"><strong>Message:</strong></p>
    <p style="font-family:system-ui,sans-serif;">${safeMessage}</p>
  `;

  const text = [
    "Website contact",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    ...(organization ? [`Organization: ${organization}`] : []),
    "",
    "Message:",
    message,
  ].join("\n");

  const subjectBase = `Website contact from ${name}`;
  const subject = subjectBase.length > 200 ? `${subjectBase.slice(0, 197)}...` : subjectBase;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    const detail = [error.name, error.statusCode, error.message].filter(Boolean).join(" — ");
    console.error("[contact] Resend error:", detail);
    const resendSandboxLikely = /testing emails|only send|verify a domain|not allowed to send|invalid.? ?to/i.test(
      error.message,
    );
    redirect(resendSandboxLikely ? "/contact?error=send&hint=resend-sandbox" : "/contact?error=send");
  }

  console.info("[contact] delivered", { to: to.join(", "), messageLength: message.length });

  redirect("/contact?sent=1");
}
