import React from "react";

// MARK: -- Third Party Packages
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export const Restaurant = (props) => {
	return (
		<Container>
			<h1>Restaurant Detail</h1>
			<Row>
			<Col lg={{ offset: 9 }} md={{ offset: 6 }} xs={{ offset: 3 }}>
			<Link to="/edit-restaurant"><Button color="" outline><i class="fas fa-edit"></i> restaurant</Button></Link>
			<Link to="/add-review"><Button color="success" outline><i class="fas fa-plus"></i> review</Button></Link>
			</Col>
			<Col lg={{ offset: 11 }} md={{ offset: 8 }} xs={{ offset: 5 }}>
				<p>Rating</p>
			</Col>
			</Row>
			<p>Edit Restaurant Detail</p>
			<p>overall rating</p>
			<p>all reviews</p>
		</Container>
	);
};