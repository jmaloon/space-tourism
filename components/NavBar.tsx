"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/shared/logo.svg";
import iconClose from "@/public/shared/icon-close.svg";
import iconHamburger from "@/public/shared/icon-hamburger.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between p-4 pr-2">
      <Link className="p-2" href="/">
        <Image alt="logo" className="w-10 h-10 sm:w-12 sm:h-12" src={logo} />
      </Link>
      <button className="px-4 sm:hidden" onClick={() => setIsOpen(true)}>
        <Image alt="menu open icon" className="w-6" src={iconHamburger} />
      </button>

      <div
        className={`fixed h-full w-64 top-0 -right-64${
          isOpen ? " -translate-x-full" : ""
        } pt-4 pl-8 transition-transform bg-navy/15 backdrop-blur-3xl `}
      >
        <div className="text-right pr-2">
          <button className="p-4 sm:hidden" onClick={() => setIsOpen(false)}>
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
    </nav>
  );
}
