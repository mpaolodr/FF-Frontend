import React from "react";

import { Review } from "../Reviews";

// MARK: -- Third Party Packages
import { Button, Container, Row, Col } from "reactstrap";

export const Profile = (props) => {

	const name = "Restaurant name";

	return (
		<Container>
			<br/>
			<Row>
				<Col xs={{ size: 'auto', offset: 2 }}>
					<h1>Hi, I'm username</h1>
				</Col>
				<Col xs={{ size: 'auto', offset: 3 }}>
					<img src="https://via.placeholder.com/64x65" alt="Generic placeholder image"/>
				</Col>
			</Row>
			<Row>
				<Col xs={{ size: 'auto', offset: 2 }}>
					<h6>Joined in Date</h6>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col xs={{ size: 'auto', offset: 2 }}>
					<p><i class="fas fa-comment"></i> 4 reviews</p>
				</Col>
			</Row>
			<Review name={name}/>
		</Container>
		);
};