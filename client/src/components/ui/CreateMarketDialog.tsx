import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaArrowRightLong } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import WhiteButton from "@/components/ui/WhiteButton";

const CreateMarketDialog = () => {
	const [open, setOpen] = React.useState(false);
	const [tokenA, setTokenA] = React.useState<string>("");
	const [tokenB, setTokenB] = React.useState<string>("");

	const handleCreateMarket = () => {
		//todo soner
		//check selected or not or both are same or not
		if (tokenA === tokenB){
			//todo
		}
		//todo api
	};

	return (
		<div className="min-w-fit">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<WhiteButton
						text="Create Market"
						icon={<FiPlus className="font-semibold text-lg" />}
						handleClick={() => setOpen(true)}
					/>
				</DialogTrigger>

				<DialogContent className="bg-[#141414] border border-[#282828]">
					<DialogHeader>
						<DialogTitle className="text-white text-xl font-semibold">
							Create a New Market
						</DialogTitle>
						<DialogDescription className="text-[#C4C4C4]">
							Please select two tokens to create a market.
						</DialogDescription>
					</DialogHeader>

					<div className="w-full flex flex-col gap-4">
						<div className="flex justify-between items-center w-full">
							<Select onValueChange={setTokenA}>
								<SelectTrigger className="w-[180px] bg-[#1C1C1C] text-white border-[#2A2A2A]">
									<SelectValue placeholder="Select token A" />
								</SelectTrigger>
								<SelectContent className="bg-[#1C1C1C] text-white border-[#2A2A2A]">
									<SelectGroup>
										<SelectLabel>Tokens</SelectLabel>
										<SelectItem value="BTC">BTC</SelectItem>
										<SelectItem value="ETH">ETH</SelectItem>
										<SelectItem value="USDT">USDT</SelectItem>
										<SelectItem value="SOL">SOL</SelectItem>
										<SelectItem value="DOGE">DOGE</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							<FaArrowRightLong className="text-[#C4C4C4] text-3xl font-extrabold" />

							{/* Token B */}
							<Select onValueChange={setTokenB}>
								<SelectTrigger className="w-[180px] bg-[#1C1C1C] text-white border-[#2A2A2A]">
									<SelectValue placeholder="Select token B" />
								</SelectTrigger>
								<SelectContent className="bg-[#1C1C1C] text-white border-[#2A2A2A]">
									<SelectGroup>
										<SelectLabel>Tokens</SelectLabel>
										<SelectItem value="BTC">BTC</SelectItem>
										<SelectItem value="ETH">ETH</SelectItem>
										<SelectItem value="USDT">USDT</SelectItem>
										<SelectItem value="SOL">SOL</SelectItem>
										<SelectItem value="DOGE">DOGE</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						{/* Create Button */}
						<button
							onClick={handleCreateMarket}
							className="flex w-full justify-center items-center gap-2 bg-white cursor-pointer text-black font-semibold px-5 py-2 rounded-sm hover:bg-gray-200 active:scale-95 transition-all duration-200"
						>
							<FiPlus />
							<span>Create Market</span>
						</button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CreateMarketDialog;
