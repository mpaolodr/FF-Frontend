import { POST_RESTAURANT_START, POST_RESTAURANT_SUCCESS, POST_RESTAURANT_FAILURE } from "../actions";


const initialState = {
	restaurants: [],
	isFetching: false,
	error: ""
}


export const restaurantReducer = (state = initialState, action) => {
	switch(action.type) {
		case POST_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
			}
		case POST_RESTAURANT_SUCCESS:
			return {
				restaurants: action.payload,
				isFetching: false,
				restaurants: [...state.restaurants, action.payload]
			}
		case POST_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}