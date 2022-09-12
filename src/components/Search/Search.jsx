import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
	return (
		<form className="d-flex justify-content-center gap-4 mb-5">
			<input
				className={styles.input}
				type="text"
				placeholder="Start Typing Character's Name..."
				onChange={(e) => {
					setPageNumber(1);
					setSearch(e.target.value);
				}}
			/>
		</form>
	);
};

export default Search;
