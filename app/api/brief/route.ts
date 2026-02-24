import { NextResponse } from "next/server";
import { briefSchema } from "@/utils/brief";
import {
  escapeHtml,
  getRecipientEmail,
  MailConfigurationError,
  MailSendError,
  optionalText,
  sendBrevoEmail,
} from "@/utils/server/brevo";
import { createRateLimiter } from "@/utils/server/rate-limit";
import {
  TurnstileConfigurationError,
  verifyTurnstileToken,
} from "@/utils/server/turnstile";

export const runtime = "nodejs";

const rateLimit = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: 6,
});

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit(`brief:${ip}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many submissions. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(limit.retryAfterSeconds),
        },
      }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  const honeypotValue =
    typeof payload === "object" &&
    payload !== null &&
    "website" in payload &&
    typeof (payload as { website?: unknown }).website === "string"
      ? (payload as { website: string }).website
      : "";

  // Silently accept bot submissions that fill the honeypot field.
  if (honeypotValue.trim().length > 0) {
    return NextResponse.json({ ok: true, message: "Brief submitted successfully." });
  }

  const parsed = briefSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Validation failed.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  try {
    const isHuman = await verifyTurnstileToken(data.turnstileToken, ip);
    if (!isHuman) {
      return NextResponse.json(
        { message: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
  } catch (error) {
    if (error instanceof TurnstileConfigurationError) {
      console.error(error.message);
      return NextResponse.json(
        { message: "Server verification configuration is incomplete." },
        { status: 500 }
      );
    }

    console.error("Unexpected turnstile verification error:", error);
    return NextResponse.json(
      { message: "Verification failed. Please try again." },
      { status: 502 }
    );
  }

  const toEmail = getRecipientEmail("brief");
  if (!toEmail) {
    console.error("Missing Brevo recipient env var. Required: BREVO_BRIEF_TO_EMAIL or BREVO_TO_EMAIL");
    return NextResponse.json(
      { message: "Server email configuration is incomplete." },
      { status: 500 }
    );
  }

  const subject = `New brief submission from ${data.name}`;

  const textContent = [
    "A new brief was submitted from the website:",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${optionalText(data.company)}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    `Source: ${optionalText(data.source)}`,
    "",
    "Description:",
    data.description,
  ].join("\n");

  const htmlContent = `
    <h2>New Brief Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(optionalText(data.company))}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(data.projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
    <p><strong>Source:</strong> ${escapeHtml(optionalText(data.source))}</p>
    <p><strong>Description:</strong></p>
    <p>${escapeHtml(data.description).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const result = await sendBrevoEmail({
      toEmail,
      subject,
      textContent,
      htmlContent,
      replyTo: {
        name: data.name,
        email: data.email,
      },
      tags: ["website", "brief"],
    });

    return NextResponse.json({
      ok: true,
      message: "Brief submitted successfully.",
      messageId: result.messageId,
    });
  } catch (error) {
    if (error instanceof MailConfigurationError) {
      console.error(error.message);
      return NextResponse.json(
        { message: "Server email configuration is incomplete." },
        { status: 500 }
      );
    }

    if (error instanceof MailSendError) {
      console.error(error.message);
      return NextResponse.json(
        { message: "Failed to send brief email. Please try again." },
        { status: 502 }
      );
    }

    console.error("Unexpected brief email error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred while sending your brief." },
      { status: 502 }
    );
  }
}
