import React from "react";

interface NavbarButtonProps {
	handleClick?: () => void;
	text: string;
	icon?: React.ReactNode;
}

const WhiteButton = ({handleClick, text, icon}: NavbarButtonProps) => {
	return (
		<button
			onClick={handleClick}
			className="flex items-center gap-2 bg-white cursor-pointer text-black font-semibold px-5 py-2 rounded-sm hover:bg-gray-200 active:scale-95 transition-all duration-200"
		>
			{icon && icon}
			<span>{text}</span>
		</button>
	);
};

export default WhiteButton;
