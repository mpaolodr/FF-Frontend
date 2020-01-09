import axios from "axios";

// MARK: -- GET REQUEST
export const FETCH_REVIEW_START = "FETCH_REVIEW_START";
export const FETCH_REVIEW_SUCCESS = "FETCH_REVIEW_SUCCESS";
export const FETCH_REVIEW_FAILURE = "FETCH_REVIEW_FAILURE";
//MARK: -- POST REQUEST
export const POST_REVIEW_START = "POST_REVIEW_START";
export const POST_REVIEW_SUCCESS = "POST_REVIEW_SUCCESS";
export const POST_REVIEW_FAILURE = "POST_REVIEW_FAILURE";
//MARK: -- PUT REQUEST
export const PUT_REVIEW_START = "PUT_REVIEW_START";
export const PUT_REVIEW_SUCCESS = "PUT_REVIEW_SUCCESS";
export const PUT_REVIEW_FAILURE = "PUT_REVIEW_FAILURE";
//MARK: -- DELETE
export const DELETE_REVIEW_START = "DELETE_REVIEW_START";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILURE = "DELETE_REVIEW_FAILURE";

export const getReviews = () => dispatch => {
	dispatch({ type: FETCH_REVIEW_START })
	axios.get("https://rayfoodiefun.herokuapp.com/api/reviews")
		 .then(res => dispatch({ type: FETCH_REVIEW_SUCCESS, payload: res.data })
		 )
		 .catch(err => dispatch({ type: FETCH_REVIEW_FAILURE, payload: err.response.statusText })
		 )
};

export const postReview = (review) => dispatch => {
	dispatch({ type: POST_REVIEW_START })
	axios.post("https://rayfoodiefun.herokuapp.com/api/reviews", review)
		 .then(res => { dispatch({ type: POST_REVIEW_SUCCESS, payload: res.data })
			console.log(res)
		})
		 .catch(err => {
			 dispatch({ type: POST_REVIEW_FAILURE, payload: err.response.statusText})
			console.log(err)
		})
};

export const putReview = (review) => dispatch => {
	dispatch({ type: PUT_REVIEW_START })
	axios.put(`https://rayfoodiefun.herokuapp.com/api/reviews/${review.id}`, review)
		 .then(res => { 
			dispatch({ type: PUT_REVIEW_SUCCESS, payload: res.data })
			console.log(res)
		})
		 .catch(err => {
			 dispatch({ type: PUT_REVIEW_FAILURE, payload: err.response.statusText })
			console.log(err)
		})
};


export const deleteReview = (review) => dispatch => {
	dispatch({ type: DELETE_REVIEW_START })
	axios.delete(`https://rayfoodiefun.herokuapp.com/api/reviews/${review.id}`)
		.then(res => {
			dispatch({ type:DELETE_REVIEW_SUCCESS, payload: res.data })
		console.log(res)
	})
		.catch(err => {
			dispatch({ type: DELETE_REVIEW_FAILURE, payload: err.response.statusText })
		console.log(err)
	})
}