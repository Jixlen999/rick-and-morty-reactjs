import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

function App() {
	let [fetchedData, setFetchedData] = useState([]);
	let [pageNumber, setPageNumber] = useState(1);
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
	let { info, results } = fetchedData;

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res) => res.json());
			setFetchedData(data);
		})();
	}, [api]);

	return (
		<div className="App">
			<h1 className="text-center ubuntu my-4">
				Rick & Morty <span className="text-primary">WiKi</span>
			</h1>

			<div className="container">
				<div className="row">
					<div className="col-3">
						<Filters />
					</div>
					<div className="col-8">
						<div className="row">
							<Cards results={results} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
