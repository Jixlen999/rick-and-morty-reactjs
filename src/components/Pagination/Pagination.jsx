import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
	return (
		<ReactPaginate
			className="pagination justify-content-center gap-3 my-4"
			forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
			nextLabel="Next"
			previousLabel="Prev"
			previousClassName={`${styles.links} btn btn-primary`}
			nextClassName={`${styles.links} btn btn-primary`}
			pageClassName="page-item"
			pageLinkClassName="page-link"
			activeClassName="active"
			pageCount={info?.pages}
			onPageChange={(data) => {
				setPageNumber(data.selected + 1);
			}}
		/>
	);
};

export default Pagination;
