import axios from "axios";

// MARK: -- GET REQUEST
export const FETCH_RATING_START = "FETCH_RATING_START";
export const FETCH_RATING_SUCCESS = "FETCH_RATING_SUCCESS";
export const FETCH_RATING_FAILURE = "FETCH_RATING_FAILURE";
//MARK: -- POST REQUEST
export const POST_RATING_START = "POST_RATING_START";
export const POST_RATING_SUCCESS = "POST_RATING_SUCCESS";
export const POST_RATING_FAILURE = "POST_RATING_FAILURE";
//MARK: -- PUT REQUEST
export const PUT_RATING_START = "PUT_RATING_START";
export const PUT_RATING_SUCCESS = "PUT_RATING_SUCCESS";
export const PUT_RATING_FAILURE = "PUT_RATING_FAILURE";
//MARK: -- DELETE
export const DELETE_RATING_START = "DELETE_RATING_START";
export const DELETE_RATING_SUCCESS = "DELETE_RATING_SUCCESS";
export const DELETE_RATING_FAILURE = "DELETE_RATING_FAILURE";

export const getRating = (rating) => {
	dispatch({ type: FETCH_RATING_START })
	axios.get("https://rayfoodiefun.herokuapp.com/api/ratings")
		 .then(res => { 
		 	console.log(res);
		 	dispatch({ type: FETCH_RATING_SUCCESS, payload: res.data })
		})
		 .catch(err => {
		 	console.log(err);
		 	dispatch({ type: FETCH_RATING_FAILURE, payload: err.response.statusText })
		 })
};

export const postRating = (rating) => {
	dispatch({ type: POST_RATING_START })
	axios.post("https://rayfoodiefun.herokuapp.com/api/ratings")
		 .then(res => {
		 	console.log(res);
		 	dispatch({ type: POST_RATING_SUCCESS, payload: rating })
		 })
		 .catch(err => {
		 	console.log(err);
		 	dispatch({ type: POST_RATING_FAILURE, payload: err.response.statusText })
		 })
};

export const putRating = (rating) => {
	dispatch({ type: PUT_RATING_START })
	axios.put(`https://rayfoodiefun.herokuapp.com/api/ratings/${rating.id}`, rating)
		 .then(res => {
		 	console.log(res);
		 	dispatch({ type: PUT_RATING_SUCCESS, payload: rating })
		 })
		 .catch(err => {
		 	console.log(err);
		 	dispatch({ type: PUT_RATING_FAILURE, payload: err.response.statusText })
		 })
};

export const deleteRating = (rating) => {
	dispatch({ type: DELETE_RATING_START })
	axios.delete(`https://rayfoodiefun.herokuapp.com/api/ratings/${rating.id}`)
		 .then(res => {
		 	console.log(res)
		 	dispatch({ type: DELETE_RATING_SUCCESS, payload: res.data })
		 })
		 .catch(err => {
		 	console.log(err)
		 	dispatch({ type: DELETE_RATING_FAILURE, payload: err.response.statusText })
		 })
}