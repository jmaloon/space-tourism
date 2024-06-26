import { getImageProps } from "next/image";
import { CREW_TABS, CrewTab } from "@/lib/crew";
import getCrewData from "@/lib/getCrewData";
import SmallPagination from "@/components/SmallPagination";

export default function CrewPage({ name }: { name: CrewTab }) {
  const data = getCrewData(name);
  if (!data) return;

  const { images, role, bio } = data;

  const sourcePropsList = Object.entries(images).map(([type, src]) => {
    const {
      props: { srcSet },
    } = getImageProps({
      alt: `Image of ${name}`,
      src,
      width: 539,
      height: 740,
      quality: 100,
      sizes: "(max-width: 639.5px) 280px, (max-width: 1024px) 447px, 512px",
    });
    return { srcSet, type: `image/${type}` };
  });

  return (
    <div className="flex flex-col gap-16 h-full p-6 sm:p-12 max-w-7xl lg:px-20 lg:mx-auto">
      <p className="heading-xs text-white text-center sm:text-left">
        <span className="font-bold opacity-25 mr-6">02</span>
        <span className="uppercase">Meet Your Crew</span>
      </p>
      <div className="grow flex flex-col gap-10 justify-between lg:flex-row lg:items-center lg:gap-12">
        <div className="flex flex-col items-center text-center gap-2 mx-auto lg:h-full lg:text-left lg:items-start lg:gap-20">
          <div
            role="tabpanel"
            className="max-w-lg lg:max-w-none lg:grow lg:flex lg:flex-col lg:justify-center"
          >
            <span className="heading-sm uppercase text-white opacity-50">
              {role}
            </span>
            <h1 className="heading-md uppercase text-white mt-2 mb-6">
              {name}
            </h1>
            <p className="body-text text-blue min-h-52 sm:min-h-32">{bio}</p>
          </div>
          <ul role="tablist" className="flex gap-4 lg:mb-12">
            {CREW_TABS.map((tab) => (
              <SmallPagination
                key={tab}
                isActive={name === tab}
                href={`/crew/${tab.toLowerCase().replaceAll(" ", "-")}`}
              />
            ))}
          </ul>
        </div>
        <picture className="block mx-auto w-72 sm:w-full sm:max-w-lg sm:translate-y-10  lg:translate-y-0">
          {sourcePropsList.map((props) => (
            <source key={props.type} {...props} />
          ))}
          <img
            alt={`Image of ${name}`}
            className="w-full"
            width={539}
            height={740}
          />
        </picture>
      </div>
    </div>
  );
}
