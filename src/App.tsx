import MainLayout from "./Layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Threads from "./Pages/Threads";
import Images from "./Pages/Images";
const router = createBrowserRouter([
	{
		path: "",
		element: <MainLayout />,
		errorElement: (
			<>
				<span className="text-4xl font-bold flex justify-center items-center h-screen ">
					{" "}
					404 NOT FOUND!
				</span>
			</>
		),
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "Threads",
				element: <Threads />,
			},
			{
				path: "/Crimes/:name",
				element: <Images />,
			},
		],
	},
]);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
