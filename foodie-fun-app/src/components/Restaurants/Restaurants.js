import React, { useEffect, useState } from "react";

// MARK: -- Third Party Packages
import { Link, Route } from "react-router-dom";
import { Container, Button, Badge } from "reactstrap";

import { Restaurant } from "./Restaurant";
import { RestaurantCard } from "./RestaurantCard";
import { FilterSearch } from "../FilterSearch";

import { connect } from "react-redux";

import { getRestaurants } from "../../actions";

import { authAxios } from "../../utils/authAxios";

import { withRouter } from 'react-router-dom';


export const Restaurants = (props) => {


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
					<RestaurantCard key={index} place={obj} />
				))}
			</Container>
		</div>
	);
};


const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { getRestaurants })(Restaurants);



