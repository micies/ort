import React from "react";
import "../styles/Modal.css";


export function Modal({ children, shown, close, fun, buttonName}) {
	return shown ? (
		<div
			className="modal_backdrop"
			onClick={() => {
				close();
			}}
		>
			<div
				className="modal_container"
				 onClick={e => {
					e.stopPropagation();
				}}
			>
				<button onClick={close}>Close</button>
				<button onClick={fun}>{buttonName}</button>

				{children}

			</div>
		</div>
	) : null;
}



