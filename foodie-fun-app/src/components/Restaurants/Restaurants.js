import React, { useEffect } from "react";

// MARK: -- Third Party Packages
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";


import { RestaurantCard } from "./RestaurantCard";

import { connect } from "react-redux";

import { getRestaurants, getRestaurant, deleteRestaurant, putRestaurant } from "../../actions";

export const Restaurants = (props) => {

	console.log(props);

	useEffect(() => {
		props.getRestaurants();
	}, [])



	return (
		<div>
			<Container>
				<h1>Restaurants</h1>
				<p>Can search through the restaurants</p>
				<p>Can add restaurant to list</p>
				<Link to="/add-restaurant"><Button color="success" outline><i class="fas fa-plus"></i> restaurant</Button></Link>
			</Container>
			<Container>
			<p>List all restaurants</p>
				{props.restaurants.map((obj, index) => (
					<RestaurantCard key={index} place={obj} get={getRestaurant} del={deleteRestaurant} />
				))}
			</Container>
		</div>
	);
};


const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { getRestaurants, getRestaurant, deleteRestaurant })(Restaurants);



