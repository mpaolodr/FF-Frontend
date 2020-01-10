import React, { useState } from "react";
import Axios from "axios";

export const EditRestaurant = (props) => {

	const [restaurant, setRestaurant] = useState({restaurant: "", cuisine: "", location: "", hours: [] })
	
	console.log(props);

	const editRestaurant = e => {
		console.log(restaurant)
	}
	// 	axios.post("api goes here")
	// 	.then(res => {
	// 		console.log(res.data)
	// 	})
	// 	.catch(err => console.log(err,"an error occured with your post request review the function addRestaurant"))
	// }

	const handleChange = e => {
		e.preventDefault()
		setRestaurant({...restaurant, [e.target.name]: e.target.value})
	}

	const handleHourChange = (event) => {
		// need to map through the array to find if the index and event.target.name are equal
		// if so, return `event.target.name` to effect
		const h = restaurant.hours.map((hour, index) => {
			if( index === Number(event.target.name) ) {
				return event.target.value
			} else {
				return hour
			}
		});
		setRestaurant({...restaurant, hours: h})
	}

	const handleHourAdd = (event) => {
		event.preventDefault();
		console.log("add");
		const h = restaurant.hours.map(hour => { return hour })
		setRestaurant({...restaurant, hours: [...h, ""]})
	}

	const handleHourRemove = (event) => {
		event.preventDefault();
		console.log("remove");
		const h = restaurant.hours.filter( (hour, index) => {
			if (Number(event.target.name) !== index) { return hour } else {
				return
			}
		})
		setRestaurant({...restaurant, hours: [...h]})
	}

	return (
		<div>	
			<h1>Edit Restaurant</h1>

			<form onSubmit={editRestaurant}>
			<p>Edit name of Restaurant</p>
			<input 
			placeholder="Restaurant Name"
			name="restaurant"
			value={restaurant.restaurant}
			onChange={handleChange}
			/>

			<p>Edit type of cuisine</p>
			<select type="select" name="select" id="selectCategory" style={{fontFamily: 'FontAwesome'}} name="cuisine" value={restaurant.cuisine}
			onChange={handleChange}>
	          <option value="" selected>Select Cuisine</option>
	          <option value="pizza">pizza</option>
	          <option value="salad">salad</option>
	          <option value="burger">burger</option>
	          <option value="chinese">chinese</option>
	          <option value="mexican">mexican</option>
	        </select>

			<p>Edit Location</p>
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
			<button type="submit">Update Restaurant</button>
			</form>
		</div>
	);
};


export default EditRestaurant;