import { Config } from "@/src/types/config";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

const Config: Config = require("../../config.yml") as any;
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = Config.metadata; // Site metadata from the config

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
