"use client";

import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (typeof window !== "undefined") {
  if (token && host) {
    posthog.init(token, {
      api_host: host,
      capture_exceptions: true,
      defaults: "2025-05-24",
      debug: process.env.NODE_ENV === "development",
    });
  } else if (process.env.NODE_ENV === "development") {
    const missingVariable = token
      ? "NEXT_PUBLIC_POSTHOG_HOST"
      : "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN";

    console.error(
      `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
    );
  }
}

export default function PostHogInit() {
  return null;
}
