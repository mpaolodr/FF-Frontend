import React, { useEffect, useState } from "react";

// MARK: -- Third Party Packages
import { Link, Route } from "react-router-dom";
import { Container, Button, Badge } from "reactstrap";

import { Restaurant, RestaurantCard } from ".";
import { FilterSearch } from "../FilterSearch";
//useSelector, useDispatch
import { connect } from "react-redux";

import { FETCH_RESTAURANT_START, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILURE } from "../../actions";
import { getRestaurants } from "../../actions";

import { authAxios } from "../../utils/authAxios";

import { withRouter } from 'react-router-dom';

// MARK: -- Fake Data
//import { data } from "../../restaurantData.js";

export const Restaurants = (props) => {
	//const data = useSelector(state => state.restaurantReducer);
	//const dispatch = useDispatch();

	const [newData, setNewData] = useState([]);

	//console.log(data);

	// useEffect(() => {

	// 	// if(data.restaurants === []) {
	// 	// 	dispatch({ type: FETCH_RESTAURANT_START })
	// 	// 	authAxios().get("/restaurants")
	// 	// 		       .then(res => {
	// 	// 		       		dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: res.data })
	// 	// 		       		console.log("restaurants fetching success", res.data)
	// 	// 		       		setNewData(res.data)
	// 	// 		       })
	// 	// 		       .catch(err => dispatch({ type: FETCH_RESTAURANT_FAILURE, payload: err }))
	// 	// }
	// }, [data])

	console.log(props);
	console.log(mapStateToProps);

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
				{newData.map((obj, index) => (
					<RestaurantCard place={obj} />
				))}
			</Container>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		restaurants: state.restaurantReducer.restaurants
	}
}

export default withRouter(connect(mapStateToProps, { getRestaurants })(Restaurants));