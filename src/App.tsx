import MainLayout from "./Layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Thread from "./Pages/Thread";
import Images from "./Pages/Images";
import ThreadsPage from "./Pages/ThreadsPage";
const router = createBrowserRouter([
	{
		path: "",
		element: <MainLayout />,
		errorElement: (
			<>
				<span className="text-4xl font-bold flex justify-center items-center h-screen ">
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
				element: <ThreadsPage />,
			},
			{
				path: "Threads/:lang/:type",
				element: <Thread />,
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
