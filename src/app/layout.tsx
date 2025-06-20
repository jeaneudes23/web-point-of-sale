import type { Metadata } from "next";
import "./globals.css";

import { AppProviders } from "./providers/AppProviders";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "WEB POS",
  description: "a web point of sale by jeaneudes23",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>{children}</body>
      </html>
    </AppProviders>
  );
}
