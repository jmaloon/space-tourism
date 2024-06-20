import backgroundTechnologyMobile from "@/public/technology/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "@/public/technology/background-technology-tablet.jpg";
import backgroundTechnologyDesktop from "@/public/technology/background-technology-desktop.jpg";

import BackgroundImage, { SourceList } from "@/components/BackgroundImage";

const BACKGROUND_SOURCES: SourceList = [
  { screen: "desktop", src: backgroundTechnologyDesktop },
  { screen: "tablet", src: backgroundTechnologyTablet },
  { screen: "mobile", src: backgroundTechnologyMobile },
];

export default function DestinationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BackgroundImage sourceList={BACKGROUND_SOURCES} />
    </>
  );
}
