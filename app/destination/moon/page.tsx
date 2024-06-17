import Image from "next/image";

import Tab from "@/components/Tab";

import moon from "@/public/destination/image-moon.png";

export default function MoonPage() {
  return (
    <main>
      <p className="heading-xs text-white">
        <span className="font-bold opacity-25 mr-6">01</span>
        <span className="uppercase">Pick Your Destination</span>
      </p>
      <div>
        <Image src={moon} alt="Picture of the moon" />
        <div>
          <ul role="tablist" className="flex gap-4">
            <Tab isActive label="Moon" href="#" />
            <Tab label="Mars" href="#" />
            <Tab label="Europa" href="#" />
            <Tab label="Titan" href="#" />
          </ul>
          <div role="tabpanel">
            <h1 className="heading-lg uppercase text-white">Moon</h1>
            <p className="body-text">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <dl>
              <dt className="subheading-sm text-blue">Avg. Distance</dt>
              <dd className="subheading-lg text-white">384,400 km</dd>
              <dt className="subheading-sm text-blue">Est. Travel Time</dt>
              <dd className="subheading-lg text-white">3 days</dd>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
