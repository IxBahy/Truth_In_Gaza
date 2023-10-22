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
			<Link to={`/Threads/${lang}/${thread.type}`}>
				<div className="  w-[260px] h-fit lg:w-[340px] text-center ">
					<div className="flex flex-col justify-center items-center rounded-lg  shadow-md border shadow-gray-400">
						<img
							className="max-h-[140px] w-[260px] lg:w-[340px] "
							src={thread.img}
							alt={thread.name}
						/>
					</div>
					<span className="pt-2 inline-block text-red-800 font-semibold">
						{thread.name}
					</span>
				</div>
			</Link>
		</>
	);
};

export default ThreadCard;
