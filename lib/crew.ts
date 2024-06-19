export const CREW_TABS = [
  "Douglas Hurley",
  "Mark Shuttleworth",
  "Victor Glover",
  "Anousheh Ansari",
] as const;

export type CrewTab = (typeof CREW_TABS)[number];
export type CrewData = {
  name: CrewTab;
  images: { png: string; webp: string };
  role: string;
  bio: string;
};
