export const DESTINATION_TABS = ["Moon", "Mars", "Europa", "Titan"] as const;

export type DestinationTab = (typeof DESTINATION_TABS)[number];
export type DestinationData = {
  name: DestinationTab;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};
