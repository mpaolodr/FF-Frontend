import {
FETCH_REVIEW_START
FETCH_REVIEW_SUCCESS
FETCH_REVIEW_FAILURE
POST_REVIEW_START
POST_REVIEW_SUCCESS
POST_REVIEW_FAILURE
PUT_REVIEW_START
PUT_REVIEW_SUCCESS
PUT_REVIEW_FAILURE
DELETE_REVIEW_START
DELETE_REVIEW_SUCCESS
DELETE_REVIEW_FAILURE
} from "../actions";



const initialState = {
	reviews: "",
	isFetching: false,
	error: ""
}


export const reviewReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_REVIEW_START:
			return {
				...state,
				isFetching: true,
			}
		case FETCH_REVIEW_SUCCESS:
			return {
				...state,
				isFetching: false,
			}
		case FETCH_REVIEW_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		case POST_REVIEW_START:
			return {
				...state,
				isFetching: true,
			}
		case POST_REVIEW_SUCCESS:
			return {
				...state,
				isFetching: false,
				reviews
			}
		case POST_REVIEW_FAILURE:


		case PUT_REVIEW_START:
		case PUT_REVIEW_SUCCESS:
		case PUT_REVIEW_FAILURE:

		case DELETE_REVIEW_START:
		case DELETE_REVIEW_SUCCESS:
		case DELETE_REVIEW_FAILURE:
		default:
			return state;
	}
}