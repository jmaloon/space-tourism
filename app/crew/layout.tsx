import backgroundCrewMobile from "@/public/crew/background-crew-mobile.jpg";
import backgroundCrewTablet from "@/public/crew/background-crew-tablet.jpg";
import backgroundCrewDesktop from "@/public/crew/background-crew-desktop.jpg";

import BackgroundImage, { SourceList } from "@/components/BackgroundImage";

const BACKGROUND_SOURCES: SourceList = [
  { screen: "desktop", src: backgroundCrewDesktop },
  { screen: "tablet", src: backgroundCrewTablet },
  { screen: "mobile", src: backgroundCrewMobile },
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
