import { getImageProps } from "next/image";
import Tab from "@/components/Tab";
import { DESTINATION_TABS, DestinationTab } from "@/lib/destination";
import getDestinationData from "@/lib/getDestinationData";

export default function DestinationPage({ name }: { name: DestinationTab }) {
  const data = getDestinationData(name);
  if (!data) return;

  const { images, description, distance, travel } = data;

  const sourcePropsList = Object.entries(images).map(([type, src]) => {
    const {
      props: { srcSet },
    } = getImageProps({
      alt: `Image of ${name}`,
      src,
      width: 512,
      height: 512,
      sizes: "(max-width: 639.5px) 150px, (max-width: 1024px) 300px, 512px",
      priority: true,
      quality: 100,
    });
    return { srcSet, type: `image/${type}` };
  });

  return (
    <div className="min-h-full flex flex-col p-6 sm:p-10 max-w-7xl lg:px-20 lg:mx-auto">
      <p className="heading-xs text-white text-center sm:text-left">
        <span className="font-bold opacity-25 mr-6">01</span>
        <span className="uppercase">Pick Your Destination</span>
      </p>
      <div className="grow flex flex-col justify-center lg:flex-row lg:items-center">
        <picture className="block size-36 mt-12 mb-14 mx-auto sm:size-72 lg:flex-1 lg:h-auto lg:mx-8 lg:my-12">
          {sourcePropsList.map((props) => (
            <source key={props.type} {...props} />
          ))}
          <img
            alt={`Image of ${name}`}
            className="w-full"
            width="512"
            height="512"
          />
        </picture>
        <div className="flex flex-col items-center text-center gap-6 max-w-lg mx-auto lg:flex-1 lg:text-left lg:items-start lg:max-w-md lg:mx-12 lg:gap-10">
          <ul role="tablist" className="flex gap-4">
            {DESTINATION_TABS.map((tab) => (
              <Tab
                key={tab}
                isActive={name === tab}
                label={tab}
                href={`/destination/${tab.toLowerCase()}`}
              />
            ))}
          </ul>
          <div role="tabpanel">
            <h1 className="heading-lg uppercase text-white">{name}</h1>
            <p className="body-text">{description}</p>
            <dl className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/25 sm:flex-row lg:mt-10 lg:pt-10">
              <div className="sm:flex-1">
                <dt className="subheading-sm uppercase text-blue">
                  Avg. Distance
                </dt>
                <dd className="subheading-lg uppercase text-white">
                  {distance}
                </dd>
              </div>
              <div className="sm:flex-1">
                <dt className="subheading-sm uppercase text-blue">
                  Est. Travel Time
                </dt>
                <dd className="subheading-lg uppercase text-white">{travel}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
