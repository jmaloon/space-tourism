import type { Metadata } from "next";
import { barlow, barlow_condensed, bellefair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor challenge",
};

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
        <main>
          <nav className="nav-text text-white">Navigation goes here</nav>

          {children}
        </main>
      </body>
    </html>
  );
}
