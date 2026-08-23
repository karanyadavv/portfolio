"use client";
import { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiCopy, FiCheck } from "react-icons/fi";

type Props = {
  preview: React.ReactNode;
  code: string;
  highlightedHtml?: string;
  onReplay?: () => void;
};

export function ComponentPreview({
  preview,
  code,
  highlightedHtml,
  onReplay,
}: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
    onReplay?.();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white dark:bg-zinc-900">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-border px-2">
        <div className="flex gap-1">
          <button
            onClick={() => setTab("preview")}
            className={`px-3 py-2.5 text-sm font-medium transition ${
              tab === "preview"
                ? "border-b-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={`px-3 py-2.5 text-sm font-medium transition ${
              tab === "code"
                ? "border-b-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            Code
          </button>
        </div>

        <div className="flex items-center gap-1">
          {tab === "preview" && (
            <button
              onClick={handleReplay}
              aria-label="Replay animation"
              className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              title="Replay"
            >
              <HiOutlineRefresh size={16} />
            </button>
          )}
          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            title={copied ? "Copied" : "Copy code"}
          >
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-1">
        {tab === "preview" ? (
          <div
            key={replayKey}
            className="flex min-h-[380px] items-center justify-center rounded-lg bg-zinc-50 p-8 dark:bg-black"
          >
            {preview}
          </div>
        ) : (
          <CodeBlock code={code} highlightedHtml={highlightedHtml} />
        )}
      </div>
    </div>
  );
}

function CodeBlock({
  code,
  highlightedHtml,
}: {
  code: string;
  highlightedHtml?: string;
}) {
  if (!code) {
    return (
      <div className="relative max-h-[480px] overflow-hidden rounded-lg bg-zinc-950">
        <pre className="no-scrollbar max-h-[480px] overflow-auto p-4 text-sm leading-relaxed text-zinc-100">
          <code className="whitespace-pre">{"// No code found"}</code>
        </pre>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent" />
      </div>
    );
  }

  if (highlightedHtml) {
    return (
      <div className="relative max-h-[480px] overflow-hidden rounded-lg bg-zinc-950">
        <div
          className="no-scrollbar max-h-[480px] overflow-auto p-4 text-sm leading-relaxed [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:p-0 [&_pre]:text-sm [&_pre]:leading-relaxed [&_code]:block"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-950 via-zinc-950/70 to-transparent" />
        {/* corner to avoid hard cut where gradients meet */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 bg-gradient-to-tl from-zinc-950 to-transparent" />
      </div>
    );
  }

  // Fallback: plain text (e.g. during dev if highlighting fails)
  return (
    <div className="relative max-h-[480px] overflow-hidden rounded-lg bg-zinc-950">
      <pre className="no-scrollbar max-h-[480px] overflow-auto p-4 text-sm leading-relaxed text-zinc-100">
        <code className="whitespace-pre">{code}</code>
      </pre>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent" />
    </div>
  );
}
