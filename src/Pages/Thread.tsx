import { ThreadsObject } from "@/utils/threadsMD";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

const Thread = () => {
	const { lang, type } = useParams();

	return (
		<>
			<section>
				<Markdown className="mx-auto px-5">
					{ThreadsObject[lang][type]}
				</Markdown>
			</section>
		</>
	);
};

export default Thread;
