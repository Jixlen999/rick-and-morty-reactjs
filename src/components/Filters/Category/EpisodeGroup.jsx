import React from "react";

const EpisodeGroup = ({ total, name, setID }) => {
	return (
		<div className="input-group mb-3">
			<select
				className="form-select"
				id={name}
				onChange={(e) => setID(e.target.value)}
			>
				<option selected>Choose...</option>
				{[...Array(total).keys()].map((item) => {
					return (
						<option value={item + 1}>
							{name} - {item + 1}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default EpisodeGroup;
