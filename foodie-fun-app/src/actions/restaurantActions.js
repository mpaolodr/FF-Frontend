import axios from "axios";

// MARK: -- Custom State Machine Logic
// MARK: -- GET REQUEST
export const FETCH_RESTAURANT_START = "FETCH_RESTAURANT_START";
export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
export const FETCH_RESTAURANT_FAILURE = "FETCH_RESTAURANT_FAILURE";

// MARK: -- GET
export const getRestaurants = () => dispatch => {
	dispatch({ type: FETCH_RESTAURANT_START });
	// REMINDER: -- auth axios later
	// authAxios.get("/restaurants");
	axios.get("https://rayfoodiefun.herokuapp.com/api/restaurants")
		 .then(res => dispatch({ type: FETCH_RESTAURANT_SUCCESS, payload: res.data })
		 )
		 .catch(err => dispatch({ type: FETCH_RESTAURANT_FAILURE, payload: err.response.statusText }))
};

export const postRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.post("/restaurants");
	axios.post("https://rayfoodiefun.herokuapp.com/api/restaurants", restaurant)
		 .then(res => console.log(res))
		 .catch(err => console.log(err))
};

export const putRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.put("/restaurants");
	axios.put(`https://rayfoodiefun.herokuapp.com/api/restaurant/${restaurant.id}`, restaurant)
		 .then(res => console.log(res))
		 .catch(err => console.log(err))
};

export const deleteRestaurant = (restaurant) => dispatch => {
	// REMINDER: -- auth axios later
	// authAxios.get("/restaurants");
	axios.delete(`https://rayfoodiefun.herokuapp.com/api/restaurant/${restaurant.id}`)
		 .then(res => console.log(res))
		 .catch(err => console.log(err))
}