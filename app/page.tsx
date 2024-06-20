import Link from "next/link";
import BackgroundImage, { SourceList } from "@/components/BackgroundImage";

import backgroundHomeMobile from "@/public/home/background-home-mobile.jpg";
import backgroundHomeTablet from "@/public/home/background-home-tablet.jpg";
import backgroundHomeDesktop from "@/public/home/background-home-desktop.jpg";

const BACKGROUND_SOURCES: SourceList = [
  { screen: "desktop", src: backgroundHomeDesktop },
  { screen: "tablet", src: backgroundHomeTablet },
  { screen: "mobile", src: backgroundHomeMobile },
];
export default function Home() {
  return (
    <>
      <main className="flex justify-center p-6 sm:p-32">
        <div className="max-w-6xl flex-1 flex flex-col gap-24 items-center lg:flex-row lg:justify-between">
          <div className="text-center max-w-xl lg:text-left">
            <span className="heading-xs text-blue uppercase">
              So, You want to travel to
            </span>
            <h1 className="heading-xl text-white uppercase my-6">Space</h1>
            <p className="body-text text-blue">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link
            className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:opacity-25 before:transition-transform hover:before:scale-150"
            href="/destination"
          >
            <div className="block grid place-items-center h-36 w-36 bg-white rounded-full sm:h-64 sm:w-64">
              <span className="heading-sm uppercase text-navy">Explore</span>
            </div>
          </Link>
        </div>
      </main>
      <BackgroundImage sourceList={BACKGROUND_SOURCES} />
    </>
  );
}
