import React from "react";

import { Loader2 } from "lucide-react";
const Loader = () => {
	return (
		<div className="overlay">
			<div className="overlay__inner">
				<div className="overlay__content">
					<Loader2 className="spinner text-blue-400" />
				</div>
			</div>
		</div>
	);
};

export default Loader;
