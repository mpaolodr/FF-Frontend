import React from "react";

// MARK: -- Third Party Packages
import { Button, Container, Row, Col, Table } from "reactstrap";
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
			<Col className="ml-auto" xs={{ size: 'auto' }}>
			<h3><i class="fas fa-star text-warning"></i> 3.00</h3>
			</Col>
			</Row>
			<Row>
			<Col lg={{ size: 'auto' }}>
				<Row>
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
						<tr>
							<th scope="row">Review</th>
							<td><ReactStars count={5} size={24}/></td>
						</tr>
					</tbody>
				</Table>
				</Row>
			</Col>
			</Row>
			<p>all reviews</p>
		</Container>
	);
};