import React from "react";

const ImageCard = ({ image }: { image: string }) => {
	return (
		<>
			<div className=" flex flex-col justify-center min-h-[200px] max-h-[200px] rounded-xl bg-gray-300/80 shadow-lg border mx-1 border-gray-200 w-[140px]  lg:w-[280px] ">
				<img
					src={image}
					className="w-[120px] max-h-[160px] lg:w-[240px] mx-auto py-2"
					alt=""
				/>
				<span className="text-center text-xs font-bold inline-block pb-2">
					SHOW ORIGINAL TWEET
				</span>
			</div>
		</>
	);
};

export default ImageCard;
