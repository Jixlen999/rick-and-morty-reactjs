import React from "react";

const FilterBtn = ({ name, index, item, task, setPageNumber }) => {
	return (
		<div>
			<style jsx>
				{`
					input[type="radio"] {
						display: none;
					}
					.form-check-input:checked + label {
						background-color: #0b5ed7;
						color: white;
					}
				`}
			</style>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name={name}
					id={`${name}-${index}`}
					onClick={() => {
						setPageNumber(1);
						task(item);
					}}
				/>
				<label
					className="btn btn-outline-primary"
					htmlFor={`${name}-${index}`}
				>
					{item}
				</label>
			</div>
		</div>
	);
};

export default FilterBtn;
