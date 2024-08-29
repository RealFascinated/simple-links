import { Config } from "@/src/types/config";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const config: Config = require("../../config.yml") as any;
fontAwesomeConfig.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = config.metadata; // Site metadata from the config

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
