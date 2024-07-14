import { ClerkProvider } from "@clerk/nextjs";
import "./sass/classes.scss";
import "./sass/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}
