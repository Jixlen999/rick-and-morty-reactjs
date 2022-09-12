import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./components/Cards/CardDetails";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<CardDetails />} />
				<Route path="/episodes" element={<Episodes />} />
				<Route path="/episodes/:id" element={<CardDetails />} />
				<Route path="/locations" element={<Locations />} />
				<Route path="/locations/:id" element={<CardDetails />} />
			</Routes>
		</Router>
	);
}

const Home = () => {
	let [status, setStatus] = useState("");
	let [search, setSearch] = useState("");
	let [gender, setGender] = useState("");
	let [species, setSpecies] = useState("");
	let [fetchedData, setFetchedData] = useState([]);
	let [pageNumber, setPageNumber] = useState(1);
	let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
	let { info, results } = fetchedData;

	useEffect(() => {
		(async function () {
			let data = await fetch(api).then((res) => res.json());
			setFetchedData(data);
		})();
	}, [api]);

	return (
		<div className="App">
			<h1 className="text-center mb-3">Characters</h1>
			<Search setSearch={setSearch} setPageNumber={setPageNumber} />
			<div className="container">
				<div className="row">
					<Filters
						setStatus={setStatus}
						setPageNumber={setPageNumber}
						setGender={setGender}
						setSpecies={setSpecies}
					/>
					<div className="col-lg-8 col-12">
						<div className="row">
							<Cards page="/" results={results} />
						</div>
					</div>
				</div>
			</div>
			<Pagination
				info={info}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
			/>
		</div>
	);
};

export default App;
