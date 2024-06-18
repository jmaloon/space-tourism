import Image from "next/image";

import Tab from "@/components/Tab";

import moon from "@/public/destination/image-moon.png";

export default function MoonPage() {
  return (
    <main className="m-6 sm:m-10 max-w-6xl lg:mx-auto">
      <p className="heading-xs text-white text-center sm:text-left">
        <span className="font-bold opacity-25 mr-6">01</span>
        <span className="uppercase">Pick Your Destination</span>
      </p>
      <div className="lg:flex">
        <Image
          src={moon}
          alt="Picture of the moon"
          className="size-36 mt-12 mb-14 mx-auto sm:size-72 lg:flex-1 lg:h-auto lg:m-8 lg:self-center"
        />
        <div className="flex flex-col items-center text-center gap-6 max-w-lg mx-auto lg:flex-1 lg:text-left lg:items-start lg:max-w-md lg:mx-12">
          <ul role="tablist" className="flex gap-4">
            <Tab isActive label="Moon" href="#" />
            <Tab label="Mars" href="#" />
            <Tab label="Europa" href="#" />
            <Tab label="Titan" href="#" />
          </ul>
          <div role="tabpanel">
            <h1 className="heading-lg uppercase text-white">Moon</h1>
            <p className="body-text">
              See our planet as you&apos;ve never seen it before. A perfect
              relaxing trip away to help regain perspective and come back
              refreshed. While you&apos;re there, take in some history by
              visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <dl className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/25 sm:flex-row">
              <div className="sm:flex-1">
                <dt className="subheading-sm uppercase text-blue">
                  Avg. Distance
                </dt>
                <dd className="subheading-lg uppercase text-white">
                  384,400 km
                </dd>
              </div>
              <div className="sm:flex-1">
                <dt className="subheading-sm uppercase text-blue">
                  Est. Travel Time
                </dt>
                <dd className="subheading-lg uppercase text-white">3 days</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
