export const TECHNOLOGY_TABS = [
  "Launch vehicle",
  "Spaceport",
  "Space capsule",
] as const;

export type TechnologyTab = (typeof TECHNOLOGY_TABS)[number];
export type TechnologyData = {
  name: TechnologyTab;
  images: { png: string; webp: string };
  description: string;
};
