const Home = () => {
	const imgUrl = new URL("../../bloody_isreal.webp", import.meta.url).href;
	// KOSO5T ISRAEL
	//W KOSO5T AMRIKKKA
	return (
		<section>
			<div className=" text-center mt-8 mx-auto w-[360px]">
				<img className="block" src={imgUrl} alt="" />
				<pre className="mt-4">
					This website is to address the truth of the Palestine and Isreal conflict
					here you will find some threads in multiple languages that explain some facts that the West media won't tell you 
					the goal is to show you the hypocrisy and to let you decide who is the true terror
					and also some pictures of the war crimes commited by Isreal and the
					tweets that gives context related to each photo
					please do the right thing please 
					💚💚SUPPORT PALESTINE 💚💚
				</pre>
			</div>
			<h3 className="mt-4 text-red-700 text-xl text-center font-bold">
				Think twice before supporting them!!
			</h3>
		</section>
	);
};

export default Home;
