import React from "react";
import FilterBtn from "../FilterBtn";

const Status = ({ setStatus, setPageNumber }) => {
	let status = ["Alive", "Dead", "Unknown"];
	return (
		<div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingThree">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						Status
					</button>
				</h2>
				<div
					id="collapseThree"
					className="accordion-collapse collapse"
					aria-labelledby="headingThree"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body d-flex flex-wrap gap-3">
						{status.map((item, index) => (
							<FilterBtn
								name="status"
								key={index}
								index={index}
								item={item}
								setPageNumber={setPageNumber}
								task={setStatus}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Status;
