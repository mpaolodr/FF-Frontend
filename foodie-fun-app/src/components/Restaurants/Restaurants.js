import React from "react";

// MARK: -- Third Party Packages
import { Link, Route } from "react-router-dom";
import { Container, Button, Badge } from "reactstrap";

import { Restaurant, RestaurantCard } from ".";
import { FilterSearch } from "../FilterSearch";

// MARK: -- Fake Data
import { data } from "../../restaurantData.js";

export const Restaurants = () => {

	const today = new Date();
	const currentDay = (number) => {
		const day = today.getDay();
		const schedule = data[number].schedule;
		const dayFromDB = schedule.filter((fday, index) => {
			if(day === index) { return fday }
			return null;
		});
		return dayFromDB[0];
	}

	const isOpen = (number) => {
		const day = today.getDay();
		const hour = today.getHours();
		const minute = today.getMinutes();
		const curr = currentDay(number);
		const hours = Object.values(curr);
		const opening = hours[0][0].opening;
		const closing = hours[0][0].closing;
		if(opening < hour && hour < closing) {
			return true
		}
		return false;
	}

	const getTimes = (number) => {
		const curr = currentDay(number);
		const hours = Object.values(curr);
		const opening = hours[0][0].opening;
		const closing = hours[0][0].closing;
		const openString = (opening < 12) ? `${opening}AM` : `${opening}PM`;
		const closeString = (closing > 12 && closing < 23) ? `${closing - 11}PM` : `${closing}AM`; 
		return `${openString} - ${closeString}`;
	}

	const getLocation = (number) => {
		const location = data[number].locations[0]
		return `${location.street_number} ${location.street_name}`
	}

	return (
		<div>
			<Container>
				<FilterSearch />
				<h1>Restaurants</h1>
				<p>Can search through the restaurants</p>
				<p>Can add restaurant to list</p>
				<Link to="/add-restaurant"><Button color="success" outline><i class="fas fa-plus"></i> restaurant</Button></Link>
			</Container>
			<Container>
			<p>List all restaurants</p>
			{data.map(r => (
				<Link to="/explore/1">
				<RestaurantCard key={r.id}
				id={r.id} 
				name={r.restaurant_name} 
				location={getLocation} 
				times={getTimes} 
				isOpen={isOpen} 
				rating={r.rating.average_rating}
				/>
				</Link>
			))
			}
			</Container>
		</div>
	);
};