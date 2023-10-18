import React, { useEffect, useRef } from "react";
import Transition from "./Transition";
import { X } from "lucide-react";
interface Props extends React.PropsWithChildren {
	id: string;
	ariaLabel: string;
	show: boolean;
	handleClose: () => void;
}
function Modal({ children, id, ariaLabel, show, handleClose }: Props) {
	const modalContent = useRef(null);
	const modalBackdrop = useRef(null);

	// close the modal on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (target === modalBackdrop.current) {
				handleClose();
			}
		};
		document.addEventListener("click", clickHandler);
		return () => {
			document.removeEventListener("click", clickHandler);
		};
	});

	// close the modal if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (keyCode !== 27) return;
			handleClose();
		};
		document.addEventListener("keydown", keyHandler);
		return () => {
			document.removeEventListener("keydown", keyHandler);
		};
	});

	return (
		<>
			{/* Modal backdrop */}
			<Transition
				className="fixed inset-0 z-50 bg-black bg-opacity-75 transition-opacity"
				show={show}
				enter="transition ease-out duration-200"
				enterStart="opacity-0"
				enterEnd="opacity-100"
				leave="transition ease-out duration-100"
				leaveStart="opacity-100"
				leaveEnd="opacity-0"
				aria-hidden="true"
			/>

			{/* Modal dialog */}
			<Transition
				id={id}
				className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center px-4 sm:px-6"
				role="dialog"
				aria-modal="true"
				aria-labelledby={ariaLabel}
				show={show}
				appear={show}
				enter="transition ease-out duration-200"
				enterStart="opacity-0 scale-95"
				enterEnd="opacity-100 scale-100"
				leave="transition ease-out duration-200"
				leaveStart="opacity-100 scale-100"
				leaveEnd="opacity-0 scale-95"
			>
				<div className="fixed z-30 inset-0">
					<div
						ref={modalBackdrop}
						className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
					>
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
						<div className=" z-50 min-h-[15rem] max-h-auto inline-block w-4/5 align-bottom bg-gray-700 rounded-xl text-left overflow-hidden shadow-lg drop-shadow-md shadow-gray-800 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full py-4">
							<button
								onClick={handleClose}
								className="block absolute right-3 top-3 rounded-md w-6 hover:bg-red-200 hover:outline hover:outline-1 hover:outline-red-900 "
							>
								<X className="w-full  text-red-700" />
							</button>
							<div ref={modalContent}>{children}</div>
						</div>
					</div>
				</div>
			</Transition>
		</>
	);
}

export default Modal;
