import React from "react";
import { Link, Route } from "react-router-dom";


import { Restaurant } from "./index";

export const Restaurants = () => {
	return (
		<div>
			<h1>Restaurants</h1>
			<p>List all restaurants</p>
			<p>Can add restaurant to list</p>
			<p>Can search through the restaurants</p>
			<Link to="/add-restaurant">Add restaurant</Link>
			<Link to="/explore/1">Restaurant Example: Ingo's Tasty Dinner</Link>
		</div>
	);
};