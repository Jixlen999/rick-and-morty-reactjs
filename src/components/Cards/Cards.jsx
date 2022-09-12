import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
	let display;
	if (results) {
		display = results.map((character) => {
			let { id, name, location, image, status } = character;
			return (
				<Link
					style={{ textDecoration: "none" }}
					to={`${page}${id}`}
					className="col-4 position-relative mb-4 text-dark"
					key={id}
				>
					<div className={styles.cards}>
						<img
							className={`${styles.img} img-fluid`}
							src={image}
							alt={name}
						/>
						<div className={`${styles.content} content`}>
							<div className="fs-4 fw-bold mb-4">{name}</div>
							<div className="">
								<div className="fs-6">Last location</div>
								<div className="fs-5">{location.name}</div>
							</div>
						</div>
					</div>
					{(() => {
						if (status === "Dead") {
							return (
								<div
									className={`${styles.badge} position-absolute badge bg-danger`}
								>
									{status}
								</div>
							);
						} else if (status === "Alive") {
							return (
								<div
									className={`${styles.badge} position-absolute badge bg-success`}
								>
									{status}
								</div>
							);
						} else {
							return (
								<div
									className={`${styles.badge} position-absolute badge bg-secondary`}
								>
									{status}
								</div>
							);
						}
					})()}
				</Link>
			);
		});
	} else {
		display = "No Characters Found :(";
	}
	return <>{display}</>;
};

export default Cards;
