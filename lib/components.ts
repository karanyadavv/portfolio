// deprecated — now markdown-driven via lib/components.server.ts + content/components/*.mdx
// kept for backwards compat / reference.
import Dummy from "../public/dummy.webp";

export const components: {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}[] = [];
