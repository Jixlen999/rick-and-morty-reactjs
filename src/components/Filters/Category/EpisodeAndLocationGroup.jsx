import React from "react";

const EpisodeAndLocationGroup = ({ total, name, setID }) => {
	return (
		<div className="input-group mb-3">
			<select
				className="form-select"
				id={name}
				onChange={(e) => setID(e.target.value)}
			>
				<option selected value="1">
					Choose...
				</option>
				{[...Array(total).keys()].map((item) => {
					return (
						<option value={item + 1} key={item}>
							{name} - {item + 1}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default EpisodeAndLocationGroup;
