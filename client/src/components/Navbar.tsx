import {useWallet} from "@solana/wallet-adapter-react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useWalletModal} from "@solana/wallet-adapter-react-ui";
import WhiteButton from "./ui/WhiteButton.tsx";
import {LuDroplets} from "react-icons/lu";
import {IoWalletOutline} from "react-icons/io5";
import {NavbarDropdown} from "@/components/ui/NavbarDropdown.tsx";

export enum NavbarType {
	Landing,
	Inner,
}

interface NavbarProps {
	type: NavbarType;
}

const Navbar = ({type}: NavbarProps) => {
	const {connected, disconnect} = useWallet();
	const navigate = useNavigate();
	const {setVisible} = useWalletModal();

	useEffect(() => {
		if (type === NavbarType.Landing && connected) {
			console.log("User connected");
			navigate("/market/all");
		}
		if (type === NavbarType.Inner && !connected) {
			console.log("User not connected, redirecting to landing");
			navigate("/");
		}
	}, [connected, navigate, type]);

	const handleConnectWallet = () => setVisible(true);

	const handleDisconnectWallet = async () => {
		try {
			await disconnect();
			navigate("/");
		} catch (err) {
			console.error("Error disconnecting wallet:", err);
		}
	};

	const handleGoToLiquidity = () => navigate("/liquidity");

	return (
		<div className="bg-[#0A0A0A] w-full h-16 flex items-center justify-between px-6 border-b border-[#282828]">
			{/* Left: Logo */}
			<div
				onClick={() => navigate("/")}
				className="flex items-center gap-3 cursor-pointer group"
			>
				<img
					src="/logo.svg"
					alt="logo"
					className="w-6 h-6 rounded-sm transition-transform duration-300 group-hover:scale-105"
				/>
				<h1 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-all duration-200">
					Obsidian
				</h1>
			</div>

			{/* Right: Buttons / Dropdown */}
			{type === NavbarType.Landing ? (
				<WhiteButton
					handleClick={handleConnectWallet}
					text="Connect Wallet"
					icon={<IoWalletOutline/>}
				/>
			) : (
				<>
					{/* Desktop Buttons */}
					<div className="hidden sm:flex gap-2">
						<button
							onClick={handleGoToLiquidity}
							className="flex items-center gap-2 cursor-pointer text-white font-semibold px-5 py-2 rounded-sm hover:text-gray-200 hover:scale-102 transition-all duration-200"
						>
							<LuDroplets/>
							<span>My Liquidity</span>
						</button>
						<WhiteButton
							handleClick={handleDisconnectWallet}
							text="Disconnect Wallet"
							icon={<IoWalletOutline/>}
						/>
					</div>

					{/* Mobile Dropdown */}
					<div className="flex sm:hidden">
						<NavbarDropdown
							onLiquidityClick={handleGoToLiquidity}
							onDisconnect={handleDisconnectWallet}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
