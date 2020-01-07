import React from "react";

// Mark: -- Component
import { Reviews } from "../Reviews";

// MARK: -- Third Party Packages
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const Restaurant = (props) => {
	return (
		<Container>
			<h1>Restaurant Name (Detail Page)</h1>
			<Row>
			<Col xs={{ size: 'auto' }}>
				<Link to="/edit-restaurant"><Button color="" outline><i class="fas fa-edit"></i> restaurant</Button></Link>
				<Link to="/add-review"><Button color="success" outline><i class="fas fa-plus"></i> review</Button></Link>
			</Col>
			</Row>
			<Reviews />
		</Container>
	);
};