import React, { useState } from "react";
import Axios from "axios";

export const AddRestaurant = () => {

	const [addRestaurant, setAddRestaurant] = useState({resturant: "", cuisine: "", location: "", hours: "" })

	// const addRestaurant = e => {
	// 	Axios.post("api goes here")
	// 	.then(res => {
	// 		console.log(res.data)
	// 	})
	// 	.catch(err => console.log(err,"an error occured with your post request review the function addRestaurant"))
	// }

	const handleChange = e => {
		e.preventDefault()
		setAddRestaurant({resturant: "", cuisine: "", location: "", hours: "" })
	}

	return (
		<div>	
			<h1>Add Restaurant</h1>

			<form onSubmit={addRestaurant}>
			<p>Add a name of Restaurant</p>
			<input 
			placeholder="Restaurant Name"
			value={addRestaurant.resturant}
			onChange={handleChange}
			/>

			<p>Add type of cuisine</p>
			<select type="select" name="select" id="selectCategory" style={{fontFamily: 'FontAwesome'}} value={addRestaurant.cuisine}
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
			value={addRestaurant.location}
			onChange={handleChange}/>

			<p>Hours of operation</p>
			<input 
			placeholder="Hours of Operation"
			value={addRestaurant.hours}
			onChange={handleChange}
			/>

			<button type="submit">Add Restaurant</button>
			</form>
		</div>
	);
};

