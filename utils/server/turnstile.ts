import "server-only";

const TURNSTILE_VERIFY_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export class TurnstileConfigurationError extends Error {}

export async function verifyTurnstileToken(token: string, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    throw new TurnstileConfigurationError(
      "Missing TURNSTILE_SECRET_KEY environment variable."
    );
  }

  const formBody = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp && remoteIp !== "unknown") {
    formBody.append("remoteip", remoteIp);
  }

  const response = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileVerifyResponse;
  return result.success;
}
