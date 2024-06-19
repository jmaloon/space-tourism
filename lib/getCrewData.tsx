import data from "./data.json";
import { CREW_TABS, CrewData, CrewTab } from "./crew";

function isCrewData(data: any): data is CrewData {
  if (!data || !CREW_TABS.includes(data.name))
    throw new Error("Invalid destination data");
  return true;
}

export default function getCrewData(crewName: CrewTab): CrewData | undefined {
  const crewData = data.crew.find((crew) => crew.name === crewName);
  if (!isCrewData(crewData)) return;
  return crewData;
}
