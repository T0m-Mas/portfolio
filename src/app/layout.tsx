"use client";
import Navbar from "@/components/NavBar";
import { LanguageProvider } from "@/context/LanguageContext/LanguageContext";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

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
  return (
    <html className={roboto.variable}>
      <body>
        <LanguageProvider>
          <Navbar />
          <div className="content-container">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
