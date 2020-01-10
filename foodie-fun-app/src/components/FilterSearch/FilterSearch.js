import React, { useState } from "react";

import { 
	Collapse,
  	Col,
  	Row,
  	Input,
  	Button,
  	ButtonToggle,
  	ButtonGroup
} from 'reactstrap';



export const FilterSearch = (props) => {

	// const [searchRestaurant, setSearchRestaurant] = useState("")
	// const [searchResults, setSearchResults] = useState(data);
	// const handleChange = event => {
	// 	setSearchRestaurant(event.target.value);
	// };

	// useEffect(() => {
	// 	axios.get('API GOES HERE')
	// 	.then( res => {
	// 		console.log(res.data)
	// 		const result = restaurant.filter( business => {
	// 			return business.restaurant.toLowerCase().includes(searchRestaurant.toLowerCase())
	// 		})
	// 	})
	// },[searchRestaurant])

	// useEffect(() => {
	// 	return restaurant_name.toLowerCase().includes(searchRestaurant.toLowerCase())
	// },[searchResults])

	const [isOpen, setIsOpen] = useState(false);

	const [categories, setCategories] = useState([]);
	const [price, setPrice] = useState([]);

	const toggle = () => setIsOpen(!isOpen);

	const onCheckboxPriceBtnClick = (selected) => {
		const idx = price.indexOf(selected);
		if(idx < 0) { price.push(selected); }
		else { price.splice(idx, 1); }
		setPrice([...price]);
	}



	return (
		<div>
			<Row>
			<Col md={{ size: 6, offset: 3 }} xs={{ size: 6 }}>
			<Input style={{fontFamily: 'FontAwesome'}} type="text" name="search" id="search" placeholder="&#xF002; Restaurants or Food" />
			</Col>
			<Col>
			<ButtonToggle color="secondary" size="small" onClick={toggle} outline><i class="fas fa-filter"> Filters</i></ButtonToggle>{' '}
			</Col>
			</Row>
			
			<Collapse isOpen={isOpen}>

			<Row>
			<Col xs="3">
			<ButtonGroup>
				<ButtonToggle color="primary" onClick={() => onCheckboxPriceBtnClick(1)} active={categories.includes(1)}>$</ButtonToggle>{' '}
				<ButtonToggle color="primary" onClick={() => onCheckboxPriceBtnClick(2)} active={categories.includes(2)}>$$</ButtonToggle>{' '}
				<ButtonToggle color="primary" onClick={() => onCheckboxPriceBtnClick(3)} active={categories.includes(3)}>$$$</ButtonToggle>{' '}
				<ButtonToggle color="primary" onClick={() => onCheckboxPriceBtnClick(4)} active={categories.includes(4)}>$$$$</ButtonToggle>{' '}
			</ButtonGroup>
			</Col>
			<Col xs="3">
	        <Input type="select" name="select" id="selectCategory" style={{fontFamily: 'FontAwesome'}}>
	          <option value="" selected>All</option>
	          <option value="pizza">pizza</option>
	          <option value="salad">salad</option>
	          <option value="burger">burger</option>
	          <option value="chinese">chinese</option>
	          <option value="mexican">mexican</option>
	        </Input>
	        </Col>
	        <Button>OK</Button>
	   		</Row>
	        </Collapse>   
			{/* {searchResults && searchResults.map( item => (
				<div>
					<h4>{item.restaurant_name}</h4>
				</div>
			))} */}
		</div>
	);
};