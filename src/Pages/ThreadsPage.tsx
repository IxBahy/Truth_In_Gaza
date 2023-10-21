import ThreadCard from "@/components/ThreadCard";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	languages,
	threadPreview,
	threadTablePreviewCards,
} from "@/utils/threadsMD";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Info } from "lucide-react";
import { useState } from "react";
const ThreadsPage = () => {
	const [currentLang, setCurrentLang] = useState<languages>("en");
	const languages: languages[] = [
		"en",
		"ch",
		"fr",
		"es",
		"grk",
		"hi",
		"it",
		"ko",
		"ku",
		"no",
		"pt",
		"ru",
		"sv",
		"tr",
	];
	const columns: ColumnDef<threadPreview>[] = [
		{
			accessorKey: "name",
			header: () => <></>,
			cell: ({ row }) => {
				const thread = row.original;
				return (
					<>
						<ThreadCard thread={thread} lang={currentLang} />
					</>
				);
			},
		},
		{
			accessorKey: "img",
			header: () => <></>,
			cell: () => <></>,
		},
	];

	const table = useReactTable({
		data: threadTablePreviewCards[currentLang],
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<section>
				<div className="rounded-md border border-b-0">
					<div className="flex items-center w-4/5 mx-auto rounded-md bg-blue-50 p-4 mb-2 mt-2 ">
						<Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
						<div className="ml-3 flex-1 md:flex md:justify-between">
							<p className="text-sm text-blue-700">
								for each language you will find the corresponding thread threads
								are orders with the # and then the number some threads aren't
								yet translated to all the languages
							</p>
						</div>
					</div>
					<Table>
						<TableHeader className="flex justify-end z-50">
							<Select
								onValueChange={(value) => {
									setCurrentLang(value as languages);
								}}
							>
								<SelectTrigger className="rounded-xl w-[60px] me-2 mt-4 z-50 lg:me-40 ">
									<SelectValue placeholder={currentLang} />
								</SelectTrigger>
								<SelectContent className="z-50 bg-gray-100  ">
									{languages.map((lang) => (
										<SelectItem value={lang}>{lang}</SelectItem>
									))}
								</SelectContent>
							</Select>
						</TableHeader>
						<TableBody className=" flex flex-col items-center  ms-2 mt-6 pb-6 justify-items-center lg:grid lg:gap-4 lg:grid-cols-3 lg:w-4/5 lg:mx-auto">
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<TableRow
										className="border-b-0"
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-24 text-center"
									>
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
			</section>
		</>
	);
};

export default ThreadsPage;
