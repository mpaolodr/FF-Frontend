import { 
FETCH_RESTAURANT_START,
FETCH_RESTAURANT_SUCCESS,
FETCH_RESTAURANT_FAILURE,
POST_RESTAURANT_START, 
POST_RESTAURANT_SUCCESS, 
POST_RESTAURANT_FAILURE, 
PUT_RESTAURANT_START,
PUT_RESTAURANT_SUCCESS,
PUT_RESTAURANT_FAILURE,
DELETE_RESTAURANT_START,
DELETE_RESTAURANT_SUCCESS,
DELETE_RESTAURANT_FAILURE  
} from "../actions";



const initialState = {
	restaurants: [],
	isFetching: false,
	error: ""
}

const restaurantReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
			}
		case FETCH_RESTAURANT_SUCCESS:
			return {
				restaurants: [...action.payload],
				isFetching: false,
				error: ''
			}
		case FETCH_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		case POST_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
			}
		case POST_RESTAURANT_SUCCESS:
			return {
				...state,
				isFetching: false,
				restaurants: [...state.restaurants, action.payload]
			}
		case POST_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		case PUT_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
				error: action.payload
			}
		case PUT_RESTAURANT_SUCCESS:
			return {
				...state,
				isFetching: false,
				restaurants: [...state.restaurants, action.payload]
			}
		case PUT_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		case DELETE_RESTAURANT_START:
			return {
				...state,
				isFetching: true,
			}
		case DELETE_RESTAURANT_SUCCESS:
			return {
				...state,
				isFetching: false,
				restaurants: [...state.restaurants]
			}
		case DELETE_RESTAURANT_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	}
}

export default restaurantReducer;