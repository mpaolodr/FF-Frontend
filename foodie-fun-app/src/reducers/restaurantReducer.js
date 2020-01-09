import { FETCH_RESTAURANT_START, FETCH_RESTAURANT_SUCCESS, FETCH_RESTAURANT_FAILURE } from "../actions";


const initialState = {
	restaurants: null,
	isFetching: false,
	error: ""
}


export const restaurantReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
			}
		case FETCH_RESTAURANT_SUCCESS:
			return {
				restaurants: action.payload,
				isFetching: false,
				error: ''
			}
		case FETCH_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}