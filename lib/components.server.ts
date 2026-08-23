import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ComponentMeta = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  rawBody: string;
  code: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "components");

function extractCode(rawBody: string): string {
  const match = rawBody.match(/```(?:tsx|ts|jsx|js)?\n([\s\S]*?)```/);
  return match ? match[1].trim() : "";
}

function parseFile(filePath: string, slug: string): ComponentMeta {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const title = (data.title as string) ?? slug;
  const description = (data.description as string) ?? "";
  const image = (data.image as string) ?? "/dummy.webp";
  const date = (data.date as string) ?? "1970-01-01";

  // allow explicit code field to override fence extraction
  const codeFromFrontmatter = (data.code as string | undefined)?.trim();
  const code = codeFromFrontmatter ?? extractCode(content);

  return {
    slug,
    title,
    description,
    image,
    date,
    rawBody: content.trim(),
    code,
  };
}

export function getAllComponents(): ComponentMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const components = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const filePath = path.join(CONTENT_DIR, file);
    return parseFile(filePath, slug);
  });

  // latest first
  components.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return components;
}

export function getComponent(slug: string): ComponentMeta | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;
  return parseFile(filePath, slug);
}

export function getAllSlugs(): string[] {
  return getAllComponents().map((c) => c.slug);
}
