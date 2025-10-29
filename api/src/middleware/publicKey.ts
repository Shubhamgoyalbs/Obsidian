import { Request, Response, NextFunction } from 'express';
import { Connection, PublicKey } from '@solana/web3.js';

declare global {
	namespace Express {
		interface Request {
			publicKey?: string;
		}
	}
}

const connection = new Connection(
	process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
	'confirmed'
);

export const publicKeyMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	if (!req.body?.publicKey) {
		res.status(600).json({
			status: 'error',
			message: 'Public key is required in request body'
		});
		return;
	}

	const publicKeyString = req.body.publicKey;

	if (typeof publicKeyString !== 'string') {
		res.status(601).json({
			status: 'error',
			message: 'Public key must be a string'
		});
		return;
	}

	try {
		const publicKey = new PublicKey(publicKeyString);

		if (!PublicKey.isOnCurve(publicKey.toBytes())) {
			res.status(602).json({
				status: 'error',
				message: 'Invalid Solana public key: not on curve'
			});
			return;
		}

		// Check if account exists on Solana blockchain
		try {
			const accountInfo = await connection.getAccountInfo(publicKey);

			if (!accountInfo) {
				res.status(605).json({
					status: 'error',
					message: 'Account does not exist on Solana blockchain'
				});
				return;
			}

			req.publicKey = publicKeyString;
			next();
		} catch (accountError) {
			res.status(604).json({
				status: 'error',
				message: 'Error checking account existence on blockchain',
				details: accountError instanceof Error ? accountError.message : 'Unknown error'
			});
			return;
		}
	} catch (error) {
		res.status(603).json({
			status: 'error',
			message: 'Invalid Solana public key format'
		});
		return;
	}
};
