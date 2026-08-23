import Link from "next/link";
import { notFound } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { codeToHtml } from "shiki";
import { getAllSlugs, getComponent } from "@/lib/components.server";
import { ComponentPreview } from "@/components/component-preview";
import { DiscordUserArea } from "@/registry/components/discord-user-area";

export function generateStaticParams() {
  return getAllSlugs()
    .filter((s) => s !== "_template")
    .map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const comp = getComponent(params.slug);
  if (!comp) return { title: "Component not found" };
  return { title: `${comp.title} — Components`, description: comp.description };
}

const previewMap: Record<
  string,
  React.ComponentType<{ replayKey?: number }>
> = {
  "discord-user-area": DiscordUserArea as unknown as React.ComponentType<{
    replayKey?: number;
  }>,
};

export default async function ComponentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const comp = getComponent(params.slug);
  if (!comp) notFound();

  const PreviewComp = previewMap[comp.slug] ?? null;

  const highlightedHtml = comp.code
    ? await codeToHtml(comp.code, {
        lang: "tsx",
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
      })
    : "";

  return (
    <div className="px-6 pb-20">
      <Link
        href="/components"
        className="mb-8 flex items-center gap-2 text-sm text-zinc-500 hover:underline hover:underline-offset-4"
      >
        <IoArrowBack size={16} /> Components
      </Link>

      <h1 className="text-3xl font-semibold tracking-tighter text-zinc-800 dark:text-zinc-200">
        {comp.title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
        {comp.description}
      </p>

      <div className="mt-6">
        <ComponentPreview
          code={comp.code}
          highlightedHtml={highlightedHtml}
          preview={
            PreviewComp ? (
              <PreviewWrapper Preview={PreviewComp} />
            ) : (
              <div className="text-sm text-zinc-500">
                No preview registered for <code>{comp.slug}</code>. Add one in
                <code className="mx-1 rounded bg-zinc-100 px-1 dark:bg-zinc-800">
                  registry/components/{comp.slug}.tsx
                </code>
                and map it in
                <code className="mx-1 rounded bg-zinc-100 px-1 dark:bg-zinc-800">
                  app/components/[slug]/page.tsx
                </code>
                .
              </div>
            )
          }
        />
      </div>
    </div>
  );
}

// wrapper to wire replayKey from ComponentPreview into preview if needed
function PreviewWrapper({
  Preview,
}: {
  Preview: React.ComponentType<{ replayKey?: number }>;
}) {
  // ComponentPreview handles its own replayKey for remount; we also pass a key
  // via remount — for simple previews just render directly.
  return <Preview />;
}
