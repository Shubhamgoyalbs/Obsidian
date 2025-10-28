import { Button } from "@/components/ui/button.tsx";
import { LuMenu } from "react-icons/lu";
import {
	DropdownMenu,
	DropdownMenuContent, DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator
} from "@/components/ui/dropdown-menu.tsx";
import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";

interface NavbarDropdownProps {
	onLiquidityClick: () => void;
	onDisconnect: () => void;
}

export const NavbarDropdown = ({ onLiquidityClick, onDisconnect }: NavbarDropdownProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="border-[#282828] text-white bg-[#0A0A0A] hover:bg-[#1a1a1a] focus:ring-0 outline-none">
					<LuMenu className="w-5 h-5" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className="w-48 bg-[#141414] border border-[#282828] text-white"
				align="end"
			>
				<DropdownMenuLabel className="text-xs text-gray-400 uppercase tracking-wider">
					Menu
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-[#282828]" />

				<DropdownMenuItem
					onClick={onLiquidityClick}
					className="cursor-pointer hover:bg-[#1f1f1f] focus:bg-[#1f1f1f]"
				>
					My Liquidity
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={onDisconnect}
					className="cursor-pointer text-red-400 hover:bg-[#1f1f1f] focus:bg-[#1f1f1f]"
				>
					Disconnect Wallet
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
