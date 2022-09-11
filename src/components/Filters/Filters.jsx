import React from "react";
import Gender from "./Category/Gender";
import Status from "./Category/Status";
import Species from "./Category/Species";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
	let clearFilters = () => {
		setStatus("");
		setPageNumber("");
		setGender("");
		setSpecies("");
		window.location.reload(false);
	};
	return (
		<div className="col-3">
			<div className="text-center fw-bold fs-4 mb-2">Filter</div>
			<div
				className="text-center text-primary text-decoration-underline mb-4"
				style={{ cursor: "pointer" }}
				onClick={clearFilters}
			>
				Clear Filters
			</div>

			<div className="accordion" id="accordionExample">
				<Status setStatus={setStatus} setPageNumber={setPageNumber} />
				<Species
					setSpecies={setSpecies}
					setPageNumber={setPageNumber}
				/>
				<Gender setGender={setGender} setPageNumber={setPageNumber} />
			</div>
		</div>
	);
};

export default Filters;
