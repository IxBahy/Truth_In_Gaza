import { Link } from "react-router-dom";

const NavGrid = () => {
	const childrenImgUrl = new URL("../../public/children.webp", import.meta.url)
		.href;
	const womenImgUrl = new URL("../../public/Women.webp", import.meta.url).href;
	const medicImgUrl = new URL("../../public/Medics.webp", import.meta.url).href;
	const homesImgUrl = new URL("../../public/Ground.webp", import.meta.url).href;

	return (
		<>
			<div className="grid grid-cols-2 w-[360px] gap-2 place-items-center mx-auto">
				<div className="flex flex-col my-8 grid-cols-1">
					<Link to={"/Crimes/Children"} className="h-52 mx-auto  text-center ">
						<img src={childrenImgUrl} alt="" className="h-40 w-52" />
						<span className=" inline-block mt-2 underline">Children</span>
					</Link>
					<Link to={"/Crimes/Women"} className="h-52 mx-auto  text-center ">
						<img src={womenImgUrl} alt="" className="h-40" />
						<span className=" inline-block mt-2 underline">Women</span>
					</Link>
				</div>
				<div className="flex flex-col my-8 grid-cols-1">
					<Link to={"/Crimes/Medic"} className="h-52 mx-auto  text-center ">
						<img src={medicImgUrl} alt="" className="h-40" />
						<span className=" inline-block mt-2 underline">Medic</span>
					</Link>
					<Link to={"/Crimes/Homes"} className="h-52 mx-auto  text-center ">
						<img src={homesImgUrl} alt="" className="h-40" />
						<span className=" inline-block mt-2 underline">Homes</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavGrid;
