import { Inter } from "next/font/google";
import "./globals.css";

import Head from "next/head";
import Config from "../../config.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = Config.metadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<meta name="theme-color" content={Config.metadata.color} />
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
