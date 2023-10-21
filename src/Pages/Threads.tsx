import { useEffect, useState } from "react";
import markdownThread from "../ThreadsMarkDown/first.md";
import Markdown from "react-markdown";

const Threads = () => {
	// const [currentMarkDown, setCurrentMarkDown] = useState<string>();

	return (
		<>
			<section>
				<h2>Threads page</h2>
				<Markdown>{markdownThread}</Markdown>
			</section>
		</>
	);
};

export default Threads;
