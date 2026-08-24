import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type CreditLink = {
  label: string;
  url: string;
};

export type ComponentMeta = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  rawBody: string;
  code: string;
  credits: CreditLink[];
};

const CONTENT_DIR = path.join(process.cwd(), "content", "components");

function extractCode(rawBody: string): string {
  const match = rawBody.match(/```(?:tsx|ts|jsx|js)?\n([\s\S]*?)```/);
  return match ? match[1].trim() : "";
}

function deriveLabel(url: string): string {
  try {
    const u = new URL(url);
    // pretty label for x/twitter
    if (u.hostname.includes("x.com") || u.hostname.includes("twitter.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      // e.g. /username/status/... -> @username
      if (parts[0]) return parts[0].startsWith("@") ? parts[0] : `@${parts[0]}`;
    }
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function parseCredits(data: Record<string, unknown>): CreditLink[] {
  // 1) explicit credits array: credits: [{ label, url|href }, ...]
  if (Array.isArray(data.credits)) {
    return (data.credits as Array<Record<string, unknown>>)
      .map((c) => {
        const url = (c.url ?? c.href ?? c.link) as string | undefined;
        const label = (c.label ?? c.name ?? c.title) as string | undefined;
        if (!url) return null;
        return { url: String(url).trim(), label: label ? String(label).trim() : deriveLabel(String(url)) };
      })
      .filter(Boolean) as CreditLink[];
  }

  // 2) single inspiration / credit fields (backwards compat + simple case)
  // inspiration: "https://x.com/..."  +  inspirationLabel: "JaceThings"
  // credit: "https://..."  /  creditLabel
  const candidates: Array<{ urlKey: string; labelKey: string }> = [
    { urlKey: "inspiration", labelKey: "inspirationLabel" },
    { urlKey: "credit", labelKey: "creditLabel" },
    { urlKey: "source", labelKey: "sourceLabel" },
  ];

  for (const { urlKey, labelKey } of candidates) {
    const rawUrl = data[urlKey];
    if (typeof rawUrl === "string" && rawUrl.trim()) {
      const labelRaw = data[labelKey] as string | undefined;
      return [{ url: rawUrl.trim(), label: labelRaw?.trim() || deriveLabel(rawUrl.trim()) }];
    }
    // also support object form: inspiration: { url, label }
    if (rawUrl && typeof rawUrl === "object" && !Array.isArray(rawUrl)) {
      const obj = rawUrl as Record<string, unknown>;
      const url = (obj.url ?? obj.href ?? obj.link) as string | undefined;
      if (url) {
        const label = (obj.label ?? obj.name ?? data[labelKey]) as string | undefined;
        return [{ url: String(url).trim(), label: label ? String(label).trim() : deriveLabel(String(url)) }];
      }
    }
  }

  return [];
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

  const credits = parseCredits(data as Record<string, unknown>);

  return {
    slug,
    title,
    description,
    image,
    date,
    rawBody: content.trim(),
    code,
    credits,
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
