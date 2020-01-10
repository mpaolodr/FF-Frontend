import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteRestaurant } from "../../actions";
// MARK: -- bootstrap
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody, Row, Col, Badge, Button } from "reactstrap";

const RestaurantCard = (props) => {

	const { place, deleteRestaurant } = props;
	const toLink = `restaurant/${place.id}`

	//console.log(props);

	const onClick = (e) => {
		props.deleteRestaurant(place.id)
	}

	return (
		<Card>
			<Row>
				<Col xs={{ size: 10, offset: 1 }} md={{ size: 3, offset: 0 }} lg={{ size: 2 }}>
					<CardImg width="100%" src="food.svg" alt="Card image cap" className="img-thumbnail rounded float-right" />
				</Col>
				<CardBody>
					<Row>
						<Col xs={{ size: 6 }}>
							<CardTitle><h2>{place.name}</h2></CardTitle>
							<CardSubtitle>{place.location}</CardSubtitle>
						</Col>
						<Col xs={{ size: 3, offset: 3 }}>
							<CardText>{place.hours}</CardText>
							<CardText>{place.cuisine}</CardText>
						</Col>
					</Row>
					<Row>
						<Col xs={{ size: 2, offset: 9 }}>
							<CardText><i class="fas fa-star text-warning"></i>0</CardText>
							<Link to={toLink}><Button color="" outline><i class="fas fa-edit"></i></Button></Link>
							<Button onClick={onClick} color="light"><i class="fas fa-trash"></i></Button>
						</Col>
					</Row>
				</CardBody>
			</Row>
		</Card>
	);
};

const mapsStateToProps = (state) => {
	return state;
}

export default connect(mapsStateToProps, { deleteRestaurant })(RestaurantCard);