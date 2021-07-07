import React, { useState } from "react";

//create your first component
export function Home() {
	const [selected, setSelected] = useState(""); //el estado (useState) es para manipular logica interna

	function changeColor(color) {
		if (color == selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	}
	return (
		<>
			<div className="trafficTop"></div>
			<div className="trafficBody">
				<div
					className={selected !== "red" ? "red" : "red selected"}
					onClick={() => changeColor("red")}></div>
				<div
					className={
						selected !== "yellow" ? "yellow" : "yellow selected"
					}
					onClick={() => changeColor("yellow")}></div>
				<div
					className={
						selected !== "green" ? "green" : "green selected"
					}
					onClick={() => changeColor("green")}></div>
			</div>
		</>
	);
}
