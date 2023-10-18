import { tweet, tweetsData, tweetsType } from "@/utils/tweetsData";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./ui/data-table";
import ImageCard from "./ImageCard";

const TweetsTable = ({ type }: { type: tweetsType }) => {
	const columns: ColumnDef<tweet>[] = [
		{
			accessorKey: "image",
			header: () => <></>,
			cell: ({ row }) => {
				const image = row.original.image;
				return (
					<>
						<button>
							<ImageCard image={image} />
						</button>
					</>
				);
			},
		},
	];

	return (
		<>
			<DataTable columns={columns} data={tweetsData[type]} />
		</>
	);
};

export default TweetsTable;
