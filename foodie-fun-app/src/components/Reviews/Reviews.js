import React from "react";

import { ReactStars } from ".";
import { Review } from ".";

import { Container, Row, Col, Table, Card, CardBody } from "reactstrap";

export const Reviews = () => {
	return (
		<Container>
		<Row>
				<Col>
					<h2>
						Reviews
					</h2>
				</Col>
				<Col xs={{ offset: 3 }}>
					<h5><i class="fas fa-star text-warning"></i> 3.00 | 20 reviews</h5>
				</Col>			
			</Row>
			<Card xs={{ size: 10, offset: 2 }}>
			<Row>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table borderless>
					<tbody>
						<tr>
							<th scope="row">Food</th>
							<td><ReactStars count={5} size={24} value={1.5}/></td>
						</tr>
						<tr>
							<th scope="row">Drinks</th>
							<td><ReactStars count={5} size={24} value={4}/></td>
						</tr>
						<tr>
							<th scope="row">Service</th>
							<td><ReactStars count={5} size={24} value={5}/></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table borderless>
					<tbody>
						<tr>
							<th scope="row">Decor</th>
							<td><ReactStars count={5} size={24} value={4.5}/></td>
						</tr>
						<tr>
							<th scope="row">Cleaniness</th>
							<td><ReactStars count={5} size={24} value={3}/></td>
						</tr>
						<tr>
							<th scope="row">Vibe</th>
							<td><ReactStars count={5} size={24} value={2}/></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			</Row>
			</Card>
			<Review />
			</Container>
	);
};