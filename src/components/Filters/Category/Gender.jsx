import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({ setGender, setPageNumber }) => {
	let genders = ["Female", "Male", "Genderless", "Unknown"];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingOne">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="true"
					aria-controls="collapseOne"
				>
					Gender
				</button>
			</h2>
			<div
				id="collapseOne"
				className="accordion-collapse collapse"
				aria-labelledby="headingOne"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body d-flex flex-wrap gap-3">
					{genders.map((item, index) => (
						<FilterBtn
							name="gender"
							key={index}
							index={index}
							item={item}
							task={setGender}
							setPageNumber={setPageNumber}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gender;
