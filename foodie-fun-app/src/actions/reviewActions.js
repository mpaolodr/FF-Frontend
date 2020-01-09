import axios from "axios";

// MARK: -- GET REQUEST
export const FETCH_REVIEW_START = "FETCH_REVIEW_START";
export const FETCH_REVIEW_SUCCESS = "FETCH_REVIEW_SUCCESS";
export const FETCH_REVIEW_FAILURE = "FETCH_REVIEW_FAILURE";

export const getReviews = () => dispatch => {
	dispatch({ type: FETCH_REVIEW_START })
	axios.get("https://rayfoodiefun.herokuapp.com/api/reviews")
		 .then(res => dispatch({ type: FETCH_REVIEW_SUCCESS, payload: res.data })
		 )
		 .catch(err => dispatch({ type: FETCH_REVIEW_FAILURE, payload: err.response.statusText })
		 )
};

export const postReview = (review) => dispatch => {
	axios.post("https://rayfoodiefun.herokuapp.com/api/reviews", review)
		 .then(res => console.log(res))
		 .catch(err => console.log(err))
};

export const putReview = (review) => dispatch => {
	axios.put(`https://rayfoodiefun.herokuapp.com/api/reviews/${id}`, review)
		 .then(res => console.log(res))
		 .catch(err => console.log(err))
};

export const deleteReview = (review) => dispatch => {
	axios.delete(`https://rayfoodiefun.herokuapp.com/api/reviews/${id}`, review)
}