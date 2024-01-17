import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "./context/appProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Ventura | Portfolio",
  description: "Omar Ventura | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
      </head>
      <AppProvider>
        <body className={inter.className}>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </AppProvider>
    </html>
  );
}
