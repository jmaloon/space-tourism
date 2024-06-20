import { getImageProps } from "next/image";
import LargePagination from "@/components/LargePagination";
import { TECHNOLOGY_TABS, TechnologyTab } from "@/lib/technology";
import getTechnologyData from "@/lib/getTechnologyData";

export default function TechnologyPage({ name }: { name: TechnologyTab }) {
  const data = getTechnologyData(name);
  if (!data) return;

  const { images, description } = data;

  const sourcePropsList = Object.entries(images).map(([orientation, src]) => {
    const {
      props: { srcSet },
    } = getImageProps({
      alt: `Image of ${name}`,
      src,
      width: 608,
      height: 1021,
      sizes: "(max-width: 1024px) 100vw, 608px",
    });
    return {
      srcSet,
      type: "image/png",
      media:
        orientation === "portrait"
          ? "(min-width: 1024px)"
          : "(max-width: 1023.5px)",
    };
  });

  return (
    <main className="m-6 sm:m-10 max-w-7xl lg:px-20 lg:mx-auto">
      <p className="heading-xs text-white text-center sm:text-left">
        <span className="font-bold opacity-25 mr-6">03</span>
        <span className="uppercase">Space Launch 101</span>
      </p>
      <div className="flex flex-col-reverse gap-8 mt-20 lg:flex lg:items-center">
        <div className="flex flex-col items-center text-center gap-10 max-w-lg mx-auto lg:flex-1 lg:text-left lg:items-start lg:max-w-md lg:mx-12 lg:gap-10">
          <ul role="tablist" className="flex gap-4">
            {TECHNOLOGY_TABS.map((tab, index) => (
              <LargePagination
                key={tab}
                isActive={name === tab}
                label={index + 1}
                href={`/technology/${tab.toLowerCase().replaceAll(" ", "-")}`}
              />
            ))}
          </ul>
          <div role="tabpanel">
            <span className="heading-sm uppercase text-white opacity-50">
              The Terminology...
            </span>
            <h1 className="heading-md uppercase text-white my-4">{name}</h1>
            <p className="body-text">{description}</p>
          </div>
        </div>
        <div className="relative -mx-6">
          <picture className="">
            {sourcePropsList.map((props) => (
              <source key={props.media} {...props} />
            ))}
            <img alt={`Image of ${name}`} className="w-full" />
          </picture>
        </div>
      </div>
    </main>
  );
}
