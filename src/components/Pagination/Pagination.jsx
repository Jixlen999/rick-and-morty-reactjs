import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
	let nextBtnHandler = () => {
		setPageNumber((prevValue) => prevValue + 1);
	};
	let prevBtnHandler = () => {
		if (pageNumber === 1) return;
		setPageNumber((prevValue) => prevValue - 1);
	};
	return (
		<div className="container d-flex justify-content-center gap-5 my-5">
			<button className="btn btn-primary" onClick={prevBtnHandler}>
				Prev
			</button>
			<button className="btn btn-primary" onClick={nextBtnHandler}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
