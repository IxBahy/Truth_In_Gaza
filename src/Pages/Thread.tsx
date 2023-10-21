import { ThreadsObject } from "@/utils/threadsMD";
import Markdown from "react-markdown";

const Threads = () => {
	// const [currentMarkDown, setCurrentMarkDown] = useState<string>();

	return (
		<>
			<section>
				<h2 className="text-2xl text-center py-2 font-semibold text-red-800 ">
					Title
				</h2>
				<Markdown className="mx-auto px-5">
					{ThreadsObject["en"]["first"]}
				</Markdown>
			</section>
		</>
	);
};

export default Threads;
