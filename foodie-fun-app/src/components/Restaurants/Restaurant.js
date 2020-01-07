import React from "react";

// MARK: -- Third Party Packages
import { Button, Container, Row, Col, Table, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactStars } from "../Reviews";

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
			<Row>
				<Col>
					<h2>
						Reviews
					</h2>
				</Col>
				<Col>
					<h5><i class="fas fa-star text-warning"></i> 3.00 | 20 reviews</h5>
				</Col>			
			</Row>
			<Card xs={{ size: 10, offset: 2 }}>
			<Row>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table>
					<tbody>
						<tr>
							<th scope="row">Food</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
						<tr>
							<th scope="row">Drinks</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
						<tr>
							<th scope="row">Service</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table>
					<tbody>
						<tr>
							<th scope="row">Decor</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
						<tr>
							<th scope="row">Cleaniness</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
						<tr>
							<th scope="row">Vibe</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			</Row>
			</Card>
			<p>all reviews</p>
		</Container>
	);
};