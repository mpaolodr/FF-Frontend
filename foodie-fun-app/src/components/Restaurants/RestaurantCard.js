import React from "react";

// MARK: -- bootstrap
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody, Row, Col, Badge } from "reactstrap";

export const RestaurantCard = (props) => {

	const {id, name, location, times, isOpen, rating} = props;

	return (
		<Card>
			<Row>
				<Col xs="4">
					<CardImg width="100%" src="food.svg" alt="Card image cap" className="img-thumbnail rounded float-right" />
				</Col>
				<CardBody>
					<Row>
						<Col xs="6">
							<CardTitle><h2>{name}</h2></CardTitle>
							<CardSubtitle>{location(id)}</CardSubtitle>
						</Col>
						<Col xs={{ size: 3, offset: 3 }}>
							<CardText>{isOpen(id) ? <i class="fas fa-door-open text-success"></i> : <i class="fas fa-door-closed text-dark"></i>}</CardText>
							<CardText>{times(id)}</CardText>
						</Col>
					</Row>
					<Row>
						<Col xs={{ size: 2, offset: 9 }}>
							<CardText><i class="fas fa-star text-warning"></i> {rating}</CardText>
						</Col>
					</Row>
				</CardBody>
			</Row>
		</Card>
	);
};