import "server-only";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

type ReplyTo = {
  name: string;
  email: string;
};

type SendBrevoEmailArgs = {
  toEmail: string;
  subject: string;
  textContent: string;
  htmlContent: string;
  replyTo?: ReplyTo;
  tags?: string[];
};

export class MailConfigurationError extends Error {}
export class MailSendError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

function getMailConfig() {
  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME ?? "RANDS Website";

  if (!apiKey || !fromEmail) {
    throw new MailConfigurationError(
      "Missing Brevo env vars. Required: BREVO_API_KEY, BREVO_FROM_EMAIL"
    );
  }

  return { apiKey, fromEmail, fromName };
}

export function getRecipientEmail(type: "brief" | "contact") {
  const legacyDefault = process.env.BREVO_TO_EMAIL;
  if (type === "brief") {
    return process.env.BREVO_BRIEF_TO_EMAIL ?? legacyDefault;
  }
  return process.env.BREVO_CONTACT_TO_EMAIL ?? legacyDefault;
}

export async function sendBrevoEmail({
  toEmail,
  subject,
  textContent,
  htmlContent,
  replyTo,
  tags,
}: SendBrevoEmailArgs) {
  const { apiKey, fromEmail, fromName } = getMailConfig();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: fromName,
          email: fromEmail,
        },
        to: [{ email: toEmail }],
        replyTo,
        subject,
        textContent,
        htmlContent,
        tags,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorBody = (await response.text()).slice(0, 1000);
      throw new MailSendError(
        `Brevo API error (${response.status}): ${errorBody}`,
        response.status
      );
    }

    const result = (await response.json().catch(() => null)) as
      | { messageId?: string }
      | null;

    return {
      messageId: result?.messageId ?? null,
    };
  } catch (error) {
    if (error instanceof MailSendError) {
      throw error;
    }
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new MailSendError("Brevo API timeout", 504);
    }
    throw new MailSendError("Failed to send email through Brevo");
  } finally {
    clearTimeout(timeout);
  }
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function optionalText(value?: string) {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Not provided";
}
