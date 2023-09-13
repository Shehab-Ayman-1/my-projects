import type { Metadata } from "next";
import type { Children } from "@/types";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/assets/css/styles.css";

export const metadata: Metadata = {
	title: "Youtube Clone",
	icons: [
		{
			url: "https://i.ibb.co/s9Qys2j/logo.png",
			type: "image/png",
			sizes: "32x32",
			rel: "icon",
		},
		{
			url: "https://i.ibb.co/s9Qys2j/logo.png",
			type: "image/png",
			sizes: "180x180",
			rel: "apple-touch-icon",
		},
	],
};

export default function RootLayout({ children }: Children) {
	return (
		<html lang="en">
			<body style={{ background: "#000", minHeight: "100vh" }}>{children}</body>
		</html>
	);
}
