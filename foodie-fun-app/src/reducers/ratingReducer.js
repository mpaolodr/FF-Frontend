import { FETCH_RATING_START, FETCH_RATING_SUCCESS, FETCH_RATING_FAILURE, POST_RATING_START } from "../actions";


const initialState = {
	rating: null,
	isFetching: false,
	error: "",
}


export const ratingReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_RATING_START:
			return {
				...state,
				isFetching: true,
			}
		case FETCH_RATING_SUCCESS:
			return {
				...state,
				isFetching: false,
			}
		case FETCH_RATING_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}