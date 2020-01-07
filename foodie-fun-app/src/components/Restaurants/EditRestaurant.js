import React, { useState } from "react";
import Axios from "axios";

export const EditRestaurant = () => {

	const [editRestaurant, seteditRestaurant] = useState({resturant: "", cuisine: "", location: "", hours: "" })

	// const editRestaurant = e => {
	// 	Axios.post("api goes here")
	// 	.then(res => {
	// 		console.log(res.data)
	// 	})
	// 	.catch(err => console.log(err,"an error occured with your post request review the function editRestaurant"))
	// }

	const handleChange = e => {
		e.preventDefault()
		seteditRestaurant({resturant: "", cuisine: "", location: "", hours: "" })
	}

	return (
		<div>	
			<h1>Edit Restaurant</h1>

			<form onSubmit={editRestaurant}>
			<p>edit a name of Restaurant</p>
			<input 
			placeholder="Restaurant Name"
			value={editRestaurant.resturant}
			onChange={handleChange}
			/>

			<p>edit type of cuisine</p>
			<select type="select" name="select" id="selectCategory" style={{fontFamily: 'FontAwesome'}} value={editRestaurant.cuisine}
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
			value={editRestaurant.location}
			onChange={handleChange}/>

			<p>Hours of operation</p>
			<input 
			placeholder="Hours of Operation"
			value={editRestaurant.hours}
			onChange={handleChange}
			/>

			<button type="submit">Edit Restaurant</button>
			</form>
		</div>
	);
};

