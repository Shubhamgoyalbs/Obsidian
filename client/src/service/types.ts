export interface Token {
	mint: string;
	symbol: string;
	name: string;
	icon?: string;
	decimals: number;
	isNative?: boolean;
}

export interface Market {
	id: string;
	baseToken: Token;
	quoteToken: Token;
	baseReserve: string;
	quoteReserve: string;
	volume24hUSD: string;
	totalLiquidityUSD: string;
	feeRate: number;
	totalFeeUSD: string;
	createdAt?: Date;
	transactions: Transaction[]
}

export interface Transaction {
	signature: string;
	type: "SWAP" | "ADD_LIQUIDITY" | "REMOVE_LIQUIDITY";
	marketId: string;
	traderPublicKey: string;
	tokenInMint: string;
	tokenOutMint: string;
	amountIn: string;
	amountOut: string;
	price: string;
	feePaid: string;
	timestamp: Date;
}
