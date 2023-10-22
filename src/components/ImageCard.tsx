const ImageCard = ({ image }: { image: string }) => {
	return (
		<>
			<div className=" flex flex-col justify-center min-h-[220px] max-h-[220px] rounded-xl shadow shadow-gray-500 border mx-1 border-gray-200 w-[280px] ">
				<img
					src={image}
					className="w-[180px] max-h-[160px] lg:w-[240px] mx-auto py-2"
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
