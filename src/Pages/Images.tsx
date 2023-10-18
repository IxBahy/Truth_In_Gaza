import TweetsTable from "../components/TweetsTable";
import { tweetsType } from "../utils/tweetsData";
import { useParams } from "react-router-dom";
import React from "react";

const Images = () => {
	let { name } = useParams();
	if (name) {
		return (
			<>
				<TweetsTable type={name as tweetsType} />
			</>
		);
	}
};

export default Images;
