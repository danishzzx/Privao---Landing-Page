import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Privao | Private Aviation",
  description: "Experience unparalleled luxury and freedom with Privao's exclusive private jet services. Your journey, elevated.",
  keywords: "private jet, luxury aviation, private aviation, jet charter, luxury travel",
  openGraph: {
    title: "Privao | Private Aviation",
    description: "Experience unparalleled luxury and freedom with Privao's exclusive private jet services.",
    type: "website",
  },
};

import DeveloperCredit from "./components/developer-credit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <DeveloperCredit />
      </body>
    </html>
  );
}
