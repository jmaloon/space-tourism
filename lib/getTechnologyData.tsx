import data from "./data.json";
import { TechnologyData, TECHNOLOGY_TABS, TechnologyTab } from "./technology";

function isTechnologyData(data: any): data is TechnologyData {
  if (!data || !TECHNOLOGY_TABS.includes(data.name))
    throw new Error("Invalid technology data");
  return true;
}

export default function getTechnologyData(
  technologyName: TechnologyTab
): TechnologyData | undefined {
  const technologyData = data.technology.find(
    (technology) => technology.name === technologyName
  );
  if (!isTechnologyData(technologyData)) return;
  return technologyData;
}
