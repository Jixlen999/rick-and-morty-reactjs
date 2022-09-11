import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import EpisodeAndLocationGroup from "../components/Filters/Category/EpisodeAndLocationGroup";

const Locations = () => {
	let [id, setID] = useState(1);
	let [info, setInfo] = useState([]);
	let [results, setResuts] = useState([]);
	let { name, type, dimension } = info;
	let api = `https://rickandmortyapi.com/api/location/${id}`;
	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res) => res.json());
			setInfo(data);
			let chars = await Promise.all(
				data.residents.map((item) => {
					return fetch(item).then((res) => res.json());
				})
			);
			setResuts(chars);
		})();
	}, [api]);
	return (
		<div className="container">
			<div className="row mb-4">
				<h1 className="text-center mb-4">
					Location:{" "}
					<span className="text-primary">
						{name === "" ? "Unknown" : name}
					</span>
				</h1>
				<h5 className="text-center">
					Dimension: {dimension === "" ? "Unknown" : dimension}
				</h5>
				<h6 className="text-center">
					Type: {type === "" ? "Unknown" : type}
				</h6>
			</div>
			<div className="row">
				<div className="col-3">
					<h4 className="text-center mb-4">Pick Location</h4>
					<EpisodeAndLocationGroup
						total={126}
						name="Location"
						setID={setID}
					/>
				</div>
				<div className="col-8">
					<div className="row">
						<Cards results={results} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Locations;
