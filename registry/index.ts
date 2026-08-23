import dynamic from "next/dynamic";

export const registry: Record<string, React.ComponentType> = {
  "discord-user-area": dynamic(() =>
    import("./components/discord-user-area").then((m) => m.DiscordUserArea),
  ) as unknown as React.ComponentType,
};

export function getRegistryComponent(slug: string) {
  return registry[slug] ?? null;
}
