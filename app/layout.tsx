import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor challenge by Josh Maloon",
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
      <body>
        <NavBar />
        <main className="fixed inset-0 top-[88px] sm:top-24 lg:top-[136px] bottom-0 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
