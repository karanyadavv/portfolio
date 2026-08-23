import Dummy from "../public/dummy.webp";

// deprecated — now markdown-driven via lib/components.server.ts + content/components/*.mdx
// kept for backwards compat / reference.
export const components = [
  {
    id: 1,
    title: "Discord user area",
    description:
      "Bottom-left section of Discord that displays your profile info and user settings.",
    image: Dummy,
    slug: "discord-user-area",
  },
];
