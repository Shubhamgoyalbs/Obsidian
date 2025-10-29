import {useParams} from "react-router-dom";
import Layout from "./Layout.tsx";
import {NavbarType} from "../Navbar.tsx";

const Market = () => {
	const {id} = useParams();

	return (
		<Layout navbarType={NavbarType.Inner}>
			<div style={{padding: "1rem"}}>
				<h1>Market Details</h1>
				<p>Market ID: {id}</p>
			</div>
		</Layout>
	);
};

export default Market;
