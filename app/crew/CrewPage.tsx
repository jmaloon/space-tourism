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
    <main className="m-6 sm:m-10 sm:mb-0 max-w-7xl lg:px-20 lg:mx-auto">
      <p className="heading-xs text-white text-center sm:text-left mb-16">
        <span className="font-bold opacity-25 mr-6">02</span>
        <span className="uppercase">Meet Your Crew</span>
      </p>
      <div className="lg:flex lg:items-center lg:gap-12">
        <div className="flex flex-col items-center text-center gap-12 mx-auto lg:text-left lg:items-start lg:gap-20">
          <div role="tabpanel" className="max-w-lg lg:max-w-none">
            <span className="heading-sm uppercase text-white opacity-50">
              {role}
            </span>
            <h1 className="heading-md uppercase text-white mt-2 mb-6">
              {name}
            </h1>
            <p className="body-text text-blue">{bio}</p>
          </div>
          <ul role="tablist" className="flex gap-4 mt-10">
            {CREW_TABS.map((tab) => (
              <SmallPagination
                key={tab}
                isActive={name === tab}
                href={`/crew/${tab.toLowerCase().replaceAll(" ", "-")}`}
              />
            ))}
          </ul>
        </div>
        <picture className="block mx-auto w-72 mt-10 sm:w-full sm:max-w-lg sm:mt-0 sm:translate-y-10 lg:translate-y-0">
          {sourcePropsList.map((props) => (
            <source key={props.type} {...props} />
          ))}
          <img alt={`Image of ${name}`} className="w-full" />
        </picture>
      </div>
    </main>
  );
}
