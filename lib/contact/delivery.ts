export type DeliveryConfig =
  | { provider: "web3forms"; accessKey: string }
  | { provider: "formsubmit"; endpoint: string };

export type ContactPayload = {
  subject: string;
  locale: string;
  fields: Record<string, string>;
  replyTo?: string;
};

function isTruthySuccess(value: unknown) {
  return value === true || value === "true";
}

export async function fetchDeliveryConfig(signal?: AbortSignal): Promise<DeliveryConfig | null> {
  try {
    const response = await fetch("/api/contact", { signal });
    if (!response.ok) return null;
    return (await response.json()) as DeliveryConfig;
  } catch {
    return null;
  }
}

export async function submitContact(
  config: DeliveryConfig,
  payload: ContactPayload,
): Promise<{ ok: boolean; needsActivation?: boolean }> {
  let response: Response;

  if (config.provider === "web3forms") {
    response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: config.accessKey,
        subject: payload.subject,
        from_name: "BALANS Hub",
        replyto: payload.replyTo || "",
        locale: payload.locale,
        botcheck: "",
        ...payload.fields,
      }),
    });
  } else {
    const body = new FormData();
    body.set("_subject", payload.subject);
    body.set("_template", "table");
    body.set("_captcha", "false");
    body.set("locale", payload.locale);
    if (payload.replyTo) body.set("_replyto", payload.replyTo);
    Object.entries(payload.fields).forEach(([key, value]) => body.set(key, value));

    response = await fetch(config.endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    });
  }

  const rawText = await response.text();
  let result: { success?: boolean | string; message?: string; ok?: boolean } | null = null;
  try {
    result = JSON.parse(rawText) as {
      success?: boolean | string;
      message?: string;
      ok?: boolean;
    };
  } catch {
    result = null;
  }

  const messageText = String(result?.message || rawText || "").toLowerCase();
  const needsActivation =
    messageText.includes("confirm") ||
    messageText.includes("activate") ||
    messageText.includes("activation") ||
    messageText.includes("check your email");

  if (needsActivation) {
    return { ok: true, needsActivation: true };
  }

  const succeeded =
    response.ok &&
    (isTruthySuccess(result?.success) ||
      result?.ok === true ||
      messageText.includes("thank") ||
      messageText.includes("success") ||
      (!result && response.ok));

  return { ok: succeeded };
}
