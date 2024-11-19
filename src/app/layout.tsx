import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Embee cartas",
	description:
		"Cartas de Embeejayz basadas en T1, League of legends y su stream",
};

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang="es">
			<body
				className={`flex flex-col items-center h-full min-h-screen w-screen`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
