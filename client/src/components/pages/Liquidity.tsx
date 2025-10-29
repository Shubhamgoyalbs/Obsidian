import Layout from "./Layout.tsx";
import {NavbarType} from "../Navbar.tsx";
import { FaArrowLeft } from "react-icons/fa6";

const Liquidity = () => {

	return (
		<Layout navbarType={NavbarType.Inner}>
			<div className="flex flex-col gap-8 items-start mt-4 w-full">
				<div className="flex gap-2 mt-4 items-center cursor-pointer text-[#5A5A5A] hover:text-[#C4C4C4] transition-all duration-300">
					<FaArrowLeft />
					<span>Back to Markets</span>
				</div>

				<div className="bg-white h-5 w-full mt-2"></div>
			</div>

		</Layout>
	);
};

export default Liquidity;
