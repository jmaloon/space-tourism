import { StaticImageData, getImageProps } from "next/image";

export type SourceList = {
  screen: "desktop" | "tablet" | "mobile";
  src: StaticImageData;
}[];

export default function BackgroundImage({
  sourceList,
}: {
  sourceList: SourceList;
}) {
  const sourceListProps = sourceList.map(({ src, screen, ...rest }) => {
    const {
      props: { srcSet },
    } = getImageProps({
      alt: "",
      src: src.src,
      fill: true,
      quality: 100,
      sizes: "100vw",
    });
    const media =
      screen === "desktop"
        ? "(min-width: 1024px)"
        : screen === "tablet"
        ? "(min-width: 640px)"
        : "";

    return { key: screen, srcSet, media, ...rest };
  });

  return (
    <picture>
      {sourceListProps.map((props) => (
        <source {...props} key={props.key} type="image/jpeg" />
      ))}
      <img
        alt=""
        className="fixed inset-0 w-screen h-screen object-cover -z-50"
      />
    </picture>
  );
}
