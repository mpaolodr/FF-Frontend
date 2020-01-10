import React, { useState } from "react";
import { postRestaurant } from "../../actions";
import { connect } from "react-redux";


// import { restaurantReducer } from "../../reducers/restaurantReducer";
//import axios from "axios";

const AddRestaurant = (props) => {
	console.log(props);

	const [restaurant, setRestaurant] = useState({name: "", cuisine: "", location: "", hours: "", review: "", img: null, foodie_id: localStorage.getItem("foodie_id") })

	const addRestaurant = e => {
		e.preventDefault();
		props.postRestaurant(restaurant);
		props.history.push("/explore");
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


const mapStateToProps = (state) => {
	return { 
		state: state
	}
}

export default connect(mapStateToProps,{ postRestaurant })(AddRestaurant)