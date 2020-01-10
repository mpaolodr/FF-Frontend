import React from "react";

// MARK: -- bootstrap
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody, Row, Col, Badge } from "reactstrap";
import { Restaurants } from "./Restaurants";

export const RestaurantCard = (props) => {

	const { place } = props;

	console.log("Card", place);

	return (
		<Card>
			<Row>
				<Col xs={{ size: 10, offset: 1 }} md={{ size: 3, offset: 0 }} lg={{ size: 2 }}>
					<CardImg width="100%" src="food.svg" alt="Card image cap" className="img-thumbnail rounded float-right" />
				</Col>
				<CardBody>
					<Row>
						<Col xs={{ size: 6 }}>
							<CardTitle><h2>{props.restaurant.name}</h2></CardTitle>
							<CardSubtitle>{props.restaurant.location}</CardSubtitle>
						</Col>
						<Col xs={{ size: 3, offset: 3 }}>
							<CardText>{props.restaurant.hours}</CardText>
							<CardText>{props.restaurant.cuisine}</CardText>
						</Col>
					</Row>
					<Row>
						<Col xs={{ size: 2, offset: 9 }}>
							<CardText><i class="fas fa-star text-warning"></i>0</CardText>
						</Col>
					</Row>
				</CardBody>
			</Row>
		</Card>
	);
};