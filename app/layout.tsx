import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor challenge",
};

import NavItem from "@/components/NavItem";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}
    >
      <body className="background-home">
        <nav className="m-4">
          <ul role="menubar">
            <NavItem index={0} label="Home" />
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
