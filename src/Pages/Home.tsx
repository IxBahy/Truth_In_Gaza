import NavGrid from "@/components/NavGrid";

const Home = () => {
	const imgUrl = new URL("../../bloody_isreal.webp", import.meta.url).href;

	return (
		<section>
			<div className=" text-center mt-8 mx-auto w-[360px]">
				<img className="block" src={imgUrl} alt="" />
				<p className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
					repellendus unde, provident quisquam eaque similique reprehenderit
					exercitationem modi ab, recusandae distinctio facilis? Sequi sit
					cupiditate odit eligendi ipsam quo, reiciendis a commodi sunt modi
					harum consectetur illum quis ipsa ipsum natus mollitia saepe assumenda
					dignissimos quaerat doloribus iure. Deleniti, molestiae.s
				</p>
			</div>
			<h3 className="mt-4 text-red-700 text-xl text-center font-bold">
				Think twice before supporting them!!
			</h3>
			<NavGrid />
		</section>
	);
};

export default Home;
