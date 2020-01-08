import React from "react";

import { ReviewTable } from ".";

// MARK: -- Third Party Libraries
import { Container, Row, Col, Table, Card, Badge } from "reactstrap";

export const Reviews = () => {

	const name = "User name"

	return (
		<Container>
			<br/>
			<Row>
				<Col xs={{ size: 'auto' }}>
					<h5>Hours <Badge color="success">Open</Badge></h5>
				</Col>
				<Col xs={{ size: 'auto', offset: 4 }} sm={{ offset: 5 }} md={{ offset: 7 }} lg={{ offset: 8 }}>
					<h5><i class="fas fa-star text-warning"></i> 3.00 | 4 reviews</h5>
				</Col>			
			</Row>
			<Card xs={{ size: 10, offset: 2 }}>
			<Row>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table borderless>
					<tbody>
						<tr>
							<th scope="row">Mon</th>
							<td><Badge color="light">9AM-4PM</Badge></td>
						</tr>
						<tr>
							<th scope="row">Tue</th>
							<td><Badge color="light">9AM-4PM</Badge></td>
						</tr>
						<tr>
							<th scope="row">Wed</th>
							<td><Badge color="warning">9AM-4PM</Badge></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			<Col xs={{ size: 12 }} md={{ size: 6 }}>
				<Table borderless>
					<tbody>
						<tr>
							<th scope="row">Thu</th>
							<td><Badge color="light">9AM-4PM</Badge></td>
						</tr>
						<tr>
							<th scope="row">Fri</th>
							<td><Badge color="ligth">9AM-4PM</Badge></td>
						</tr>
						<tr>
							<th scope="row">Sat</th>
							<td><Badge color="light">9AM-4PM</Badge></td>
						</tr>
						<tr>
							<th scope="row">Sun</th>
							<td><Badge color="light">9AM-4PM</Badge></td>
						</tr>
					</tbody>
				</Table>
			</Col>
			</Row>
			</Card>
			<br/>
			<br/>
			<ReviewTable name={name} />
			</Container>
	);
};