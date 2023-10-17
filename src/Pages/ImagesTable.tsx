import { useParams } from "react-router-dom";

const ImagesTable = () => {
	let { name } = useParams();

	return (
		<>
			<div>{name}</div>
		</>
	);
};

export default ImagesTable;
