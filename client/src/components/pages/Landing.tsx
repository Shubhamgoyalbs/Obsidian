import Layout from "./Layout.tsx";
import {NavbarType} from "../Navbar.tsx";

const Landing = () => {


	return (
		<Layout navbarType={NavbarType.Landing} style="overflow-y-auto">

			<div className="flex flex-col items-center justify-center h-[calc(90vh-4rem)]">
				<h1 className="text-white text-4xl font-bold mb-4">Welcome to Obsidian</h1>
				<p className="text-gray-400">Connect your wallet to continue</p>
			</div>

		</Layout>
	);
};

export default Landing;
