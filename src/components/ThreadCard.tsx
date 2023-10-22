import { languages, threadPreview, threadType } from "@/utils/threadsMD";
import { Link } from "react-router-dom";
const ThreadCard = ({
	thread,
	lang,
}: {
	thread: threadPreview;
	lang: languages;
}) => {
	return (
		<>
			<div className=" rounded-lg bg-gray-200 shadow-md border shadow-gray-400 w-[260px] h-[180px] lg:w-[340px] lg:h-[250px] ">
				<Link to={`/Threads/${lang}/${thread.type}`}>
					<div className="flex w-full items-center justify-center space-x-6 pt-2 px-2">
						<div className="flex flex-col justify-center items-center">
							<img
								className="max-h-[140px]  "
								src={thread.img}
								alt={thread.name}
							/>
							<span className="pt-1 text-red-800 font-semibold">
								{thread.name}
							</span>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default ThreadCard;
