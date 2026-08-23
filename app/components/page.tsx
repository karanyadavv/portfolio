import Link from "next/link";
import Image from "next/image";
import { getAllComponents } from "@/lib/components.server";

export default function ComponentsPage() {
  const components = getAllComponents().filter((c) => c.slug !== "_template");

  return (
    <div className="px-6">
      <div>
        <h1 className="text-4xl font-medium tracking-tight">Components</h1>
        <p className="mt-4 text-lg font-normal text-zinc-500 dark:text-zinc-400">
          A collection of reusable components.
        </p>
      </div>

      {components.length === 0 ? (
        <p className="mt-10 text-zinc-500">
          No components yet. Add a <code>.mdx</code> file to
          <code className="mx-1 rounded bg-zinc-100 px-1 dark:bg-zinc-800">
            content/components
          </code>
          .
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {components.map((component) => (
            <Link
              key={component.slug}
              href={`/components/${component.slug}`}
              className="group flex flex-col gap-4"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-white dark:bg-zinc-900">
                <Image
                  width={1024}
                  height={600}
                  alt={component.title}
                  src={component.image}
                  className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.02]"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-neutral-700 dark:text-neutral-100">
                  {component.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm font-normal text-neutral-500 dark:text-neutral-300">
                  {component.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
