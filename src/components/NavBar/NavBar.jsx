import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light mb-4">
			<div className="container">
				<Link to="/" className="fs-3 ubuntu navbar-brand">
					Rick & Morty <span className="text-primary">WiKi</span>
				</Link>
				<button
					className="navbar-toggler text-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<style jsx>{`
						button[aria-expanded="false"] > .close {
							display: none;
						}
						button[aria-expanded="true"] > .open {
							display: none;
						}
					`}</style>
					<i className="fas fa-bars open fw-bold text-primary"></i>
					<i className="fas fa-times close fw-bold text-primary"></i>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav fs-5">
						<NavLink to="/" className="nav-link">
							Characters
						</NavLink>
						<NavLink to="/episodes" className="nav-link">
							Episodes
						</NavLink>
						<NavLink to="/locations" className="nav-link">
							Locations
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
