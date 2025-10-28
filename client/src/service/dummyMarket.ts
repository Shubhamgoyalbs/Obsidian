import type { Market, Token, Transaction } from "./types.ts";

const SOL: Token = {
	mint: "So11111111111111111111111111111111111111112",
	symbol: "SOL",
	name: "Solana",
	decimals: 9,
	isNative: true,
};

const USDC: Token = {
	mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
	symbol: "USDC",
	name: "USD Coin",
	decimals: 6,
	isNative: false,
};

const BONK: Token = {
	mint: "DezXAZ8z7P3xZzQJZVtXDJvVQ9g1k7T3bZ5dWkXD3a5t",
	symbol: "BONK",
	name: "Bonk",
	decimals: 5,
	isNative: false,
};

const JUP: Token = {
	mint: "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB",
	symbol: "JUP",
	name: "Jupiter",
	decimals: 6,
	isNative: false,
};

const dummyTransactions: Transaction[] = [
	{
		signature: "5Z6hH8gX1k2rT3",
		type: "SWAP",
		marketId: "SOL-USDC",
		traderPublicKey: "5ABC...XYZ1",
		tokenInMint: SOL.mint,
		tokenOutMint: USDC.mint,
		amountIn: "1.23",
		amountOut: "220.15",
		price: "178.91",
		feePaid: "0.0005",
		timestamp: new Date(),
	},
];

export const dummyMarkets: Market[] = [
	{
		id: "SOL-USDC",
		baseToken: SOL,
		quoteToken: USDC,
		baseReserve: "12000",
		quoteReserve: "2100000",
		volume24hUSD: "340000",
		totalLiquidityUSD: "2150000",
		feeRate: 0.003,
		totalFeeUSD: "10200",
		createdAt: new Date("2024-10-10T10:00:00Z"),
		transactions: dummyTransactions,
	},
	{
		id: "BONK-USDC",
		baseToken: BONK,
		quoteToken: USDC,
		baseReserve: "950000000",
		quoteReserve: "1500000",
		volume24hUSD: "120000",
		totalLiquidityUSD: "1600000",
		feeRate: 0.0025,
		totalFeeUSD: "7500",
		createdAt: new Date("2024-09-15T10:00:00Z"),
		transactions: dummyTransactions,
	},
	{
		id: "JUP-SOL",
		baseToken: JUP,
		quoteToken: SOL,
		baseReserve: "200000",
		quoteReserve: "1800",
		volume24hUSD: "89000",
		totalLiquidityUSD: "980000",
		feeRate: 0.002,
		totalFeeUSD: "4500",
		createdAt: new Date("2024-11-05T09:00:00Z"),
		transactions: dummyTransactions,
	},
];
