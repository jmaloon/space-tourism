"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import logo from "@/public/shared/logo.svg";
import iconClose from "@/public/shared/icon-close.svg";
import iconHamburger from "@/public/shared/icon-hamburger.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 639.5px)");

  return (
    <nav className="flex justify-between p-4 pr-2 sm:items-center sm:p-0 sm:pl-4 sm:gap-6 md:mt-10 md:ml-14 md:gap-10">
      <Link className="p-2 shrink-0" href="/">
        <Image alt="logo" className="w-10 h-10 sm:w-12 sm:h-12" src={logo} />
      </Link>
      {isMobile ? (
        <>
          <button className="px-4 sm:hidden" onClick={() => setIsOpen(true)}>
            <Image alt="menu open icon" className="w-6" src={iconHamburger} />
          </button>

          <div
            className={`fixed h-full w-64 top-0 -right-64${
              isOpen ? " -translate-x-full" : ""
            } pt-4 pl-8 transition-transform bg-navy/15 backdrop-blur-3xl `}
          >
            <div className="text-right pr-2">
              <button className="p-4" onClick={() => setIsOpen(false)}>
                <Image alt="menu close icon" className="w-6" src={iconClose} />
              </button>
            </div>
            <ul role="menubar" className="flex flex-col gap-4 mt-8">
              <NavItem index={0} label="Home" />
              <NavItem index={1} label="Destination" />
              <NavItem index={2} label="Crew" />
              <NavItem index={3} label="Technology" />
            </ul>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center md:before:flex-1 md:before:h-px md:before:bg-white/25 md:before:-mr-6">
          <ul
            role="menubar"
            className="flex-1 flex gap-4 px-4 justify-end bg-white/5 md:flex-initial md:gap-6 md:px-8 md:pl-20"
          >
            <NavItem index={0} label="Home" />
            <NavItem index={1} label="Destination" />
            <NavItem index={2} label="Crew" />
            <NavItem index={3} label="Technology" />
          </ul>
        </div>
      )}
    </nav>
  );
}
