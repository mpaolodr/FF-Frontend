export const data = [
	{
		id: 0,
		created: new Date("January 31 2000 12:30"),
		restaurant_name: "Ingo's Tasty Diner",
		categories: ["American", "Diner"],
		locations: [
			{
				street_number: "1234",
				street_name: "South Main Street",
				zip_code: 99999,
				coordinates: {
					longitude: 123049123.1231,
					latitude: 2349123102.11230
				},
			},
		],
		schedule: [
		// to use javascript's Date object ()
			{ Sun: [ { opening: 9, closing: 22 } ] },
			{ Mon: [ { opening: 9, closing: 22 } ] },
			{ Tue: [ { opening: 9, closing: 22 } ] },
			{ Wed: [ { opening: 9, closing: 22 }] },
			{ Thu: [ { opening: 9, closing: 22 } ] },
			{ Fri: [ { opening: 9, closing: 22 } ] },
			{ Sat: [ { opening: 9, closing: 22 } ] },
		],
		rating: {
			total_ratings: 10,
			average_rating: 3.23,
			menu_item: {
				name: "Spaghetti",
				photo: null,
				price: "$10.20",
				item_rating: 3,
				average_item_rating: 4,
				review: "Delicious!",
			},
			service: {
				service_rating: 2,
				average_service_rating: 3,
				review: "Michele was ok",
			},
		}
	},
	{
		id: 1,
		created: new Date("January 31 2000 12:30"),
		restaurant_name: "Golanga Thai",
		categories: ["Thai"],
		locations: [
			{
				street_number: "4212",
				street_name: "North Bel Street",
				zip_code: 23499,
				coordinates: {
					longitude: 123049123.1231,
					latitude: 2349123102.11230
				},
			},
		],
		schedule: [
		// to use javascript's Date object ()
			{ Sun: [ { opening: 9, closing: 15 } ] },
			{ Mon: [ { opening: 9, closing: 15 } ] },
			{ Tue: [ { opening: 9, closing: 15 } ] },
			{ Wed: [ { opening: 9, closing: 15 }] },
			{ Thu: [ { opening: 9, closing: 15 } ] },
			{ Fri: [ { opening: 9, closing: 15 } ] },
			{ Sat: [ { opening: 9, closing: 15 } ] },
		],
		rating: {
			total_ratings: 20,
			average_rating: 4.15,
			menu_item: {
				name: "Tom Kai",
				photo: null,
				price: "$8.20",
				item_rating: 4,
				average_item_rating: 5,
				review: "Delicious!",
			},
			service: {
				service_rating: 2,
				average_service_rating: 3,
				review: "Peter was ok",
			},
		}
	},
];