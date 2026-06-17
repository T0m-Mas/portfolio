"use client";
import "../styles/globals.css";
import SideMenu from "@/components/SideMenu/SideMenu";
import MobileFloatingButton from "@/components/MobileFloatingButton";
import { useState } from "react";
import { Roboto } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext/LanguageContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto", // Creates a CSS custom property
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <html className={roboto.variable}>
      <body>
        <LanguageProvider>
          <SideMenu open={openSideMenu} />
          <MobileFloatingButton
            onClick={() => setOpenSideMenu(!openSideMenu)}
            open={openSideMenu}
          />
          <div className="content-container">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
