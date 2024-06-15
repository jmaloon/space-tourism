import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor challenge",
};

import NavBar from "@/components/NavBar";

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
        <NavBar />

        {children}
      </body>
    </html>
  );
}
