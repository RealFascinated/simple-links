import { Inter } from "next/font/google";
import "./globals.css";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
