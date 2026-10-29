import dynamic from "next/dynamic";

export const registry: Record<string, React.ComponentType> = {
  "elevenlabs-button": dynamic(() =>
    import("./components/elevenlabs-button").then((m) => m.ElevenLabsButton),
  ) as unknown as React.ComponentType,
  "try-proven-button": dynamic(() =>
    import("./components/try-proven-button").then((m) => m.TryProvenButton),
  ) as unknown as React.ComponentType,
  "log-task-checkbox": dynamic(() =>
    import("./components/log-task-checkbox").then((m) => m.LogTaskCheckbox),
  ) as unknown as React.ComponentType,
};

export function getRegistryComponent(slug: string) {
  return registry[slug] ?? null;
}
