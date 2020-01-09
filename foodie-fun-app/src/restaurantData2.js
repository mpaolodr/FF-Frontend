const Restaurant = {
	id: 0,
	name: "Dr. Seuss Ramen",
	categories: ["Ramen",],
	number_of_ratings: 3,
	ratings: [restaurantRating],
	overall_rating: 4,
	number_of_reviews: 3,
	reviews: [restaurantReview],
	reviews_of_items: [ItemReview],
	food: FoodRating,
	drink: DrinkRating,
	service: ServiceRating,
	decor: DecorRating,
	clean: CleanRating,
	vibe: VibeRating,
	locations: [Location],
	schedule: [Schedule],
	created_by: User,
	modified_by: User,
	date_created: Date,
	date_modified: Date,
}

const restaurantAll = [



];

const FoodRating = {
	ratings: [0, 5, 5]
}

const DrinkRating = {
	ratings: [4, 4, 3]
}

const ServiceRating = {
	ratings: [2, 3, 4]
}

const DecorRating = {
	ratings: [1, 5, 3]
}

const CleanRating = {
	ratings: [5, 5, 5]
}

const VibeRating = {
	ratings: [4, 3, 4]
}


// CHECK
const Schedule = {
	days: [Day]
}

// CHECK
const Day = {
	day: "Mon"
	opening: [9],
	closing: [15],
}

// CHECK
const Location = {
	street_number: 1234,
	street_name: "Main Street",
	zipcode: 90119,
	city: "Las Vegas",
	state: "NV",
	coordinates: {
		latitude: 123121231231.123131,
		longitude: 12323123132.1231231,
	}
}

// CHECK
const RestaurantReview = {
	id: 0,
	restaurant: Restaurant,
	user: User,
	date_modified: Date.now(),
	description: "This restaurant was amazing!",
}

// CHECK
const RestaurantRating = {
	id: 0,
	overall: 3.5,
	food: 3,
	drinks: 3.5,
	service: 4,
	decor: 2,
	cleaniness: 5,
	vibe: 4,
	review: RestaurantReview,
	user: User
}

// CHECK
const User = {
	id: 0,
	username: "Jimmy Wales",
	email: "Jimmy@wiki.org",
	password: "difficultpassword",
	location: "Los Angeles",
	reviews: [restaurantReviews]
}

const Restaurant = {
	id: 0,
	name: "Minnie's",
	type: ["G"]
}
