"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const isRanking = pathname === "/ranking";

	return (
		<nav className="flex gap-4 p-4 w-fit">
			<Link
				href="/"
				className={`font-serif font-bold duration-150 ${
					isHome ? "text-red-600" : "opacity-50"
				}`}
			>
				Inicio
			</Link>
			<Link
				href="/ranking"
				className={`font-serif font-bold duration-150 ${
					isRanking ? "text-red-600" : "opacity-50"
				}`}
			>
				Clasificatoria
			</Link>
		</nav>
	);
}
