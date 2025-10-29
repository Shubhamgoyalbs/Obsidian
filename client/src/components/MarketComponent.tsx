import {useNavigate} from "react-router-dom";
import type {Market} from "../service/types.ts";
import WhiteButton from "./ui/WhiteButton.tsx";
import {IoSwapVertical} from "react-icons/io5";

const MarketComponent = ({market}: { market: Market }) => {
	const navigate = useNavigate();

	const handleTrade = () => {
		navigate(`/market/{market.id}`);
	};

	return (
		<div
			className="w-full border border-[#282828] bg-[#141414] rounded-md px-6 py-6 text-white transition-all duration-200 hover:bg-[#1a1a1a] flex flex-col gap-6">

			<div className="hidden lg:flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="relative flex items-center">
							<img
								src={market.baseToken.icon || "/default-token.svg"}
								alt={market.baseToken.symbol}
								className="w-10 h-10 rounded-full border border-[#282828]"
							/>
							<img
								src={market.quoteToken.icon || "/default-token.svg"}
								alt={market.quoteToken.symbol}
								className="w-10 h-10 rounded-full border border-[#282828] -ml-3 bg-[#141414]"
							/>
						</div>

						<div>
							<h2 className="text-lg font-semibold leading-tight">
								{market.baseToken.symbol}-{market.quoteToken.symbol}
							</h2>
							<p className="text-xs text-[#5a5a5a]">
								{market.baseToken.name} / {market.quoteToken.name}
							</p>
						</div>
					</div>

					<div className="flex gap-10 text-center md:text-left">
						<div>
							<p className="text-[#5a5a5a] text-xs uppercase mb-1">Liquidity</p>
							<p className="text-sm font-medium">
								${Number(market.totalLiquidityUSD).toLocaleString()}
							</p>
						</div>
						<div>
							<p className="text-[#5a5a5a] text-xs uppercase mb-1">24h Volume</p>
							<p className="text-sm font-medium">
								${Number(market.volume24hUSD).toLocaleString()}
							</p>
						</div>
						<div>
							<p className="text-[#5a5a5a] text-xs uppercase mb-1">Fee Rate</p>
							<p className="text-sm font-medium">
								{(market.feeRate * 100).toFixed(2)}%
							</p>
						</div>
					</div>

					<WhiteButton handleClick={handleTrade} text="Trade" icon={<IoSwapVertical className="text-lg"/>}/>
				</div>

				<div className="flex justify-between items-center border-t border-[#282828] pt-4">
					<p className="text-[#5a5a5a] text-sm uppercase">Total Fees Generated</p>
					<p className="text-white text-base font-semibold">
						${Number(market.totalFeeUSD).toLocaleString()}
					</p>
				</div>
			</div>

			<div className="flex flex-col lg:hidden gap-3 px-4 py-4 text-white">

				<div className="flex items-center sm:justify-between gap-3">
					<div className="flex items-center gap-3 flex-none">
						<div className="relative flex items-center">
							<img
								src={market.baseToken.icon || "/default-token.svg"}
								alt={market.baseToken.symbol}
								className="w-9 h-9 rounded-full border border-[#282828]"
							/>
							<img
								src={market.quoteToken.icon || "/default-token.svg"}
								alt={market.quoteToken.symbol}
								className="w-9 h-9 rounded-full border border-[#282828] -ml-2 bg-[#141414]"
							/>
						</div>
						<div>
							<h2 className="text-base font-semibold leading-tight">
								{market.baseToken.symbol}-{market.quoteToken.symbol}
							</h2>
							<p className="text-xs text-[#5a5a5a]">
								{market.baseToken.name} / {market.quoteToken.name}
							</p>
						</div>
					</div>

					<div className="w-full sm:w-auto flex justify-end">
						<WhiteButton handleClick={handleTrade} text="Trade" icon={<IoSwapVertical className="text-lg"/>}/>
					</div>
				</div>

				<div className="flex justify-between gap-3 border-t border-[#282828] pt-2 text-center ">
					<div className="flex-1">
						<p className="text-[#5a5a5a] text-[10px] uppercase mb-1">Liquidity</p>
						<p className="text-sm font-medium">
							${Number(market.totalLiquidityUSD).toLocaleString()}
						</p>
					</div>
					<div className="flex-1">
						<p className="text-[#5a5a5a] text-[10px] uppercase mb-1">24h Volume</p>
						<p className="text-sm font-medium">
							${Number(market.volume24hUSD).toLocaleString()}
						</p>
					</div>
					<div className="flex-1">
						<p className="text-[#5a5a5a] text-[10px] uppercase mb-1">Fee Rate</p>
						<p className="text-sm font-medium">
							{(market.feeRate * 100).toFixed(2)}%
						</p>
					</div>
				</div>

				<div className="flex justify-between items-center border-t border-[#282828] pt-2">
					<p className="text-[#5a5a5a] text-xs uppercase">
						Total Fees Generated
					</p>
					<p className="text-white text-sm font-semibold">
						${Number(market.totalFeeUSD).toLocaleString()}
					</p>
				</div>
			</div>

		</div>
	);
};

export default MarketComponent;
