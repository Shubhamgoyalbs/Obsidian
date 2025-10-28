import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<div className="w-full h-screen bg-black flex justify-center items-center overflow-hidden px-4">
			<div
				className="flex flex-col items-center text-center gap-4 px-8 py-6 bg-[#0A0A0A] text-white border border-[#282828] rounded-md max-w-sm sm:max-w-md md:max-w-lg">
				<h1 className="text-2xl sm:text-3xl font-bold">404 - Page Not Found</h1>
				<p className="text-sm sm:text-base text-gray-400">
					The page you are looking for does not exist.
				</p>
				<Link
					to="/"
					className="mt-3 px-5 py-2 text-sm sm:text-base rounded-sm border border-[#282828] hover:bg-[#111] transition-all duration-300"
				>
					Go to Landing page
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
