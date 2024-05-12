import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "react-credit-cards/es/styles-compiled.css";
import CartProvider from "../providers/shoppingCartProvider";
import Layout from "../sections/layout";

const montserrat = Montserrat({
	display: "swap",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Blume",
	description: "Blume Store",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<CartProvider>
					<Layout>{children}</Layout>
				</CartProvider>
			</body>
		</html>
	);
}
