import React from "react";
import Navbar, {NavbarType} from "../Navbar";

interface LayoutProps {
	children: React.ReactNode;
	style?: string;
	navbarType: NavbarType;
}

const Layout: React.FC<LayoutProps> = ({children, style, navbarType}) => {
	return (
		<div
			className={`flex flex-col items-center min-h-screen w-full bg-black text-white ${style ?? ""}`}
		>
			<Navbar type={navbarType}/>

			<main className="flex-1 w-full max-w-260 px-5 md:px-8 lg:px-0">
				{children}
			</main>

			<footer className="h-12">

			</footer>
		</div>
	);
};

export default Layout;
