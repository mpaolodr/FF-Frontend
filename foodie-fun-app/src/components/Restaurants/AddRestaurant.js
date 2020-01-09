import React, { useState } from "react";
import { FETCH_RESTAURANT_START, POST_RESTAURANT_FAILURE } from "../../actions/index"
import { connect, useSelector, useDispatch } from "react-redux";
import { postRestaurant } from "../../actions";
import { authAxios } from "../../utils/authAxios";

// import { restaurantReducer } from "../../reducers/restaurantReducer";
//import axios from "axios";

export const AddRestaurant = (props) => {
	console.log(props)
	const testing = useSelector(state => state.restaurantReducer)
	console.log(testing,"testing")
	const dispatch = useDispatch()

	const [restaurant, setRestaurant] = useState({name: "", cuisine: "", location: "", hours: "", review: "", img: null, foodie_id: localStorage.getItem("foodie_id") })

	const addRestaurant = e => {
		e.preventDefault()
		console.log(restaurant)
		dispatch({ type: FETCH_RESTAURANT_START })
		authAxios().post("/restaurants", restaurant)
		.then(res => {
			console.log(res,"testing res")
		})
		.catch(err => dispatch({ type: POST_RESTAURANT_FAILURE, payload: err}))
	}

	const handleChange = e => {
		e.preventDefault()
		setRestaurant({...restaurant, [e.target.name]: e.target.value})
	}

	return (
		<div>	
			<h1>Add Restaurant</h1>

			<form onSubmit={addRestaurant}>
			<p>Add a name of Restaurant</p>
			<input 
			placeholder="Restaurant Name"
			name="name"
			value={restaurant.name}
			onChange={handleChange}
			/>

			<p>Add type of cuisine</p>
			<select type="select" name="select" id="selectCategory" style={{fontFamily: 'FontAwesome'}} name="cuisine" value={restaurant.cuisine}
			onChange={handleChange}>
	          <option value="" selected>Select Cuisine</option>
	          <option value="pizza">pizza</option>
	          <option value="salad">salad</option>
	          <option value="burger">burger</option>
	          <option value="chinese">chinese</option>
	          <option value="mexican">mexican</option>
	        </select>

			<p>Location</p>
			<input
			placeholder="Location"
			name="location"
			value={restaurant.location}
			onChange={handleChange}
			/>

			<p>Todays hours</p>
			<input
			placeholder="Hours"
			name="hours"
			value={restaurant.hour}
			onChange={handleChange}
			/>
			<button type="submit">Add Restaurant</button>
			</form>
		</div>
	);
};


// const mapStateToProps = (state) => {
// 	return { 
// 		state: state.restaurantReducer
// 	}
// }

// export default connect(mapStateToProps,{
// 	postRestaurant
// })(AddRestaurant)