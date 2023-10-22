import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
	return (
		<>
			<header className="shadow-md shadow-gray-400/50 bg-gray-300/80 text-red-900 flex items-center justify-center w-full h-16">
				<Navbar />
			</header>
			<main className="bg-gray-200/80 h-screen">
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};

export default MainLayout;
