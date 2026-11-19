"use client";

import PostHogInit from "@/components/posthog-init";
import NextError from "next/error";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <PostHogInit />
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
