const ImageCard = ({ image }: { image: string }) => {
	return (
		<>
			<div className=" flex flex-col justify-center shadow-md shadow-gray-500 border mx-1 w-[280px] ">
				<img
					src={image}
					className="w-[280px] max-h-[160px] lg:w-[240px] mx-auto "
					alt=""
				/>
			</div>
			<span className="text-center text-xs font-bold inline-block py-2">
				SHOW ORIGINAL TWEET
			</span>
		</>
	);
};

export default ImageCard;
