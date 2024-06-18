import backgroundDestinationMobile from "@/public/destination/background-destination-mobile.jpg";
import backgroundDestinationTablet from "@/public/destination/background-destination-tablet.jpg";
import backgroundDestinationDesktop from "@/public/destination/background-destination-desktop.jpg";

import BackgroundImage, { SourceList } from "@/components/BackgroundImage";

const BACKGROUND_SOURCES: SourceList = [
  { screen: "desktop", src: backgroundDestinationDesktop },
  { screen: "tablet", src: backgroundDestinationTablet },
  { screen: "mobile", src: backgroundDestinationMobile },
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
