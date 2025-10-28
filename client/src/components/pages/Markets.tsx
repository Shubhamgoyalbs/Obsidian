import {NavbarType} from "../Navbar.tsx";
import Layout from "./Layout.tsx";
import {useEffect, useState} from "react";
import type {Market} from "../../service/types.ts";
import WhiteButton from "../ui/WhiteButton.tsx";
import {GoSearch} from "react-icons/go";
import MarketComponent from "../MarketComponent.tsx";
import { FiPlus } from "react-icons/fi";
import {dummyMarkets} from "../../service/dummyMarket.ts";

const Markets = () => {
	const [markets, setMarkets] = useState<Market[]>([]);
	const [filteredMarkets, setFilteredMarkets] = useState<Market[]>([]);
	const [marketLoading, setMarketLoading] = useState<Boolean>(false);


	useEffect(() => {
		//todo: call al market fn
		setMarketLoading(true);
		setMarkets(dummyMarkets)
		setFilteredMarkets(dummyMarkets)
		setMarketLoading(false);
	}, []);

	const handleFilter = () => {
		//todo
		setFilteredMarkets(markets)
	}

	const handleCreateMarket = () => {

	}

	return (
		<Layout navbarType={NavbarType.Inner} style="">

			{/*HERO*/}
			<div className="w-full flex flex-col items-center justify-center text-center mt-16 mb-10 px-4">
				<h1
					className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#5C5C5C] via-[#222222] to-[#5C5C5C] p-2 bg-clip-text text-transparent tracking-tight">
					Trade & Provide Liquidity
				</h1>
				<p className="text-gray-400 text-lg mt-3 max-w-2xl">
					Swap tokens and earn fees by providing liquidity to trading pairs
				</p>
			</div>

			{/*Search Bar*/}
			<div className="w-full flex gap-3 mt-6">
				<div className="w-full flex gap-2 items-center px-2 border-[#282828] border overflow-x-auto rounded-md">
					<GoSearch className="text-xl"/>
					<input onChange={handleFilter} placeholder="serach markets"
					       className="outline-none w-full border-none focus:ring-0"/>
				</div>
				<WhiteButton text={"CreateMarket"} icon={<FiPlus className="font-semibold text-lg"/>} handleClick={handleCreateMarket}/>
			</div>

			<div className="w-full mt-10">
				{marketLoading ? (
					// LOADING ANIMATION
					<div className="w-full border border-[#282828] bg-[#141414] rounded-md px-28 py-14 flex justify-center items-center">
						<p className="text-white text-xl font-semibold flex items-center">
							Loading Markets
							<span className="flex ml-1">
								<span className="animate-[blink_1.5s_steps(1)_infinite]">.</span>
								<span className="animate-[blink_1.5s_steps(1)_infinite_0.3s]">.</span>
								<span className="animate-[blink_1.5s_steps(1)_infinite_0.6s]">.</span>
							</span>
						</p>
						<style>
							{`
								@keyframes blink {
									0%, 20% { opacity: 0; }
									25%, 100% { opacity: 1; }
								}
							`}
						</style>
					</div>
				) : filteredMarkets.length === 0 ? (
					// EMPTY STATE
					<div className="w-full border border-[#282828] bg-[#141414] rounded-md px-28 py-14 flex justify-center items-center">
						<p className="text-gray-400 text-lg font-medium">
							No markets available. Please wait or create a new market.
						</p>
					</div>
				) : (
					<div>
						<p className="text-gray-400 mb-4">
							Total markets: {filteredMarkets.length}
						</p>

						<div className="flex flex-col gap-3">
							{filteredMarkets.map((m) => (
								<MarketComponent market={m}/>
							))}
						</div>
					</div>
				)}
			</div>

		</Layout>
	);
};

export default Markets;
