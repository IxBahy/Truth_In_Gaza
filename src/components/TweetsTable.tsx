import { tweet, tweetsData, tweetsType } from "@/utils/tweetsData";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./ui/data-table";
import ImageCard from "./ImageCard";
import Modal from "@/utils/Modal";
import { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Loader from "./Loader";

const TweetsTable = ({ type }: { type: tweetsType }) => {
	const [showTweetModal, setShowTweetModal] = useState<boolean>(false);
	const [currentTweetID, setCurrentTweetID] = useState<string | undefined>();
	const handleCloseModal = () => {
		setShowTweetModal(false);
		setCurrentTweetID(undefined);
	};
	const handleOpenModal = (tweetID: string) => {
		setShowTweetModal(true);
		setCurrentTweetID(tweetID);
	};

	const columns: ColumnDef<tweet>[] = [
		{
			accessorKey: "image",
			header: () => <></>,
			cell: ({ row }) => {
				const image = row.original.image;
				const tweetID = row.original.tweetID;
				return (
					<>
						<button onClick={() => handleOpenModal(tweetID)}>
							<ImageCard image={image} />
						</button>
					</>
				);
			},
		},
	];

	return (
		<>
			<Modal
				ariaLabel="tweet-Modal"
				handleClose={handleCloseModal}
				show={showTweetModal}
				id="tweet-Modal"
			>
				{currentTweetID && (
					<TwitterTweetEmbed
						tweetId={currentTweetID}
						placeholder={<Loader />}
					/>
				)}
			</Modal>
			<DataTable columns={columns} data={tweetsData[type]} />
		</>
	);
};

export default TweetsTable;
