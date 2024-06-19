import data from "./data.json";
import {
  DESTINATION_TABS,
  DestinationData,
  DestinationTab,
} from "./destination";

function isDestinationData(data: any): data is DestinationData {
  if (!data || !DESTINATION_TABS.includes(data.name))
    throw new Error("Invalid destination data");
  return true;
}

export default function getDestinationData(
  destinationName: DestinationTab
): DestinationData | undefined {
  const destinationData = data.destinations.find(
    (destination) => destination.name === destinationName
  );
  if (!isDestinationData(destinationData)) return;
  return destinationData;
}
