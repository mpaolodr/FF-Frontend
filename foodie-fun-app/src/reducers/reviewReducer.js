import { FETCH_REVIEW_START, FETCH_REVIEW_SUCCESS, FETCH_REVIEW_FAILURE } from "../actions";


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
		default:
			return state;
	}
}