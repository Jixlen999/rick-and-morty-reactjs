import React from "react";
import FilterBtn from "../FilterBtn";

const Species = ({ setSpecies, setPageNumber }) => {
	let species = [
		"Human",
		"Alien",
		"Humanoid",
		"Poopybutthole",
		"Mythological",
		"Unknown",
		"Animal",
		"Disease",
		"Robot",
		"Cronenverg",
		"Planet",
	];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingTwo">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
					aria-expanded="false"
					aria-controls="collapseTwo"
				>
					Species
				</button>
			</h2>
			<div
				id="collapseTwo"
				className="accordion-collapse collapse"
				aria-labelledby="headingTwo"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex flex-wrap gap-3">
					{species.map((item, index) => (
						<FilterBtn
							name="species"
							key={index}
							index={index}
							item={item}
							setPageNumber={setPageNumber}
							task={setSpecies}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Species;