"use client";

import { useMemo, useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "usehooks-ts";

import logo from "@/public/shared/logo.svg";
import iconClose from "@/public/shared/icon-close.svg";
import iconHamburger from "@/public/shared/icon-hamburger.svg";

const ROUTES: {
  label: string;
  href: string;
  isExact: boolean;
}[] = [
  { label: "Home", href: "/", isExact: true },
  { label: "Destination", href: "/destination", isExact: false },
  { label: "Crew", href: "/crew", isExact: false },
  { label: "Technology", href: "/technology", isExact: false },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 639.5px)", {
    defaultValue: false,
    initializeWithValue: false,
  });

  const routes = useMemo(
    () =>
      ROUTES.map((route, index) => (
        <NavItem
          key={route.label}
          index={index}
          isActive={
            route.isExact
              ? pathname === route.href
              : pathname.startsWith(route.href)
          }
          label={route.label}
          href={route.href}
          onClick={() => setIsOpen(false)}
        />
      )),
    [pathname]
  );

  return (
    <nav className="flex justify-between p-4 pr-2 sm:items-center sm:p-0 sm:pl-4 sm:gap-6 lg:mt-10 lg:ml-14 lg:gap-10">
      <Link className="p-2 shrink-0" href="/">
        <Image alt="logo" className="size-10 sm:size-12" src={logo} priority />
      </Link>
      {isMobile ? (
        <>
          <button className="px-4 sm:hidden" onClick={() => setIsOpen(true)}>
            <Image alt="menu open icon" className="w-6" src={iconHamburger} />
          </button>

          <div
            className={`fixed h-full w-64 top-0 -right-64${
              isOpen ? " -translate-x-full" : ""
            } pt-4 pl-8 transition-transform bg-navy/15 backdrop-blur-3xl z-50`}
          >
            <div className="text-right pr-2">
              <button className="p-4" onClick={() => setIsOpen(false)}>
                <Image alt="menu close icon" className="w-6" src={iconClose} />
              </button>
            </div>
            <ul role="menubar" className="flex flex-col gap-4 mt-8">
              {routes}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center lg:before:flex-1 lg:before:h-px lg:before:bg-white/25 lg:before:-mr-6">
          <ul
            role="menubar"
            className="flex-1 flex gap-4 px-4 justify-end bg-white/5 lg:flex-initial lg:gap-6 lg:px-8 lg:pl-20"
          >
            {routes}
          </ul>
        </div>
      )}
    </nav>
  );
}
