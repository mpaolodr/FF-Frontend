import { POST_RESTAURANT_START, POST_RESTAURANT_SUCCESS, POST_RESTAURANT_FAILURE, PUT_RESTAURANT_START, PUT_RESTAURANT_SUCCESS, PUT_RESTAURANT_FAILURE } from "../actions";


const initialState = {
	restaurants: "",
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
				}
			case PUT_RESTAURANT_SUCCESS:
				return {
					...state,
					isFetching:false,
					restaurants: []
				}
				case PUT_RESTAURANT_FAILURE:
					return {
						...state,
						isFetching:false,
						error: action.payload
					}
		default:
			return state;
	}
}