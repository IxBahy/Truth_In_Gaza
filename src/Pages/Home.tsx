const Home = () => {
	const imgUrl = new URL("../../bloody_isreal.webp", import.meta.url).href;
	// KOSO5T ISRAEL
	//W KOSO5T AMRIKKKA
	return (
		<section>
			<div className=" text-center mt-8 mx-auto w-[360px]">
				<img className="block" src={imgUrl} alt="" />
				<p className="mt-4 px-2">
					This website is to address the truth of the Palestine and Isreal
					conflict <br />
					here you will find some threads in multiple languages that explain
					some facts that the West media won't tell you
					<br />
					the goal is to show you the hypocrisy and to let you decide who is the
					true terror <br />
					and also some pictures of the war crimes commited by Isreal and the
					tweets that gives context related to each photo
					<br /> please do the right thing please
					<br />
					💚💚SUPPORT PALESTINE 💚💚
				</p>
			</div>
			<h3 className="mt-4 text-red-700 text-md text-center font-bold px-2">
				if you can still support isreal to bomb gaza after checking the Isreal
				war crimes tab i honestly encourge you to question yourself <br />
				FOR GOD SAKE SAVE GAZA
			</h3>
		</section>
	);
};

export default Home;
