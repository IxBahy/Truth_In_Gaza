const ImageCard = ({ image }: { image: string }) => {
	return (
		<>
			<div className=" rounded-xl bg-gray-300/80 shadow-lg border mx-1 border-gray-200 w-[140px]  ">
				<img src={image} className="w-[120px] mx-auto py-2" alt="" />
				<span className="text-center text-xs font-bold inline-block pb-2">
					SEE ORIGINAL TWEET
				</span>
			</div>
		</>
	);
};

export default ImageCard;
