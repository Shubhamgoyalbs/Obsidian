import './App.css';

import Landing from "./components/pages/Landing.tsx";
import Liquidity from "./components/pages/Liquidity.tsx";
import Markets from "./components/pages/Markets.tsx";
import Market from "./components/pages/Market.tsx";

import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import NotFound from "./components/NotFound.tsx";

function App() {
	const endpoint = "https://solana-devnet.g.alchemy.com/v2/qAiy1qJntzS3CIGQEoPxX";

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Landing/>,
		},
		{
			path: "/liquidity",
			element: <Liquidity/>,
		},
		{
			path: "/market",
			children: [
				{
					index: true,
					element: <Navigate to="all" replace/>,
				},
				{
					path: "all",
					element: <Markets/>,
				},
				{
					path: ":id",
					element: <Market/>,
				},
			],
		},
		{
			path: "*",
			element: <NotFound/>
		}
	]);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={[]} autoConnect>
				<WalletModalProvider>
					<RouterProvider router={router}/>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
}

export default App;
