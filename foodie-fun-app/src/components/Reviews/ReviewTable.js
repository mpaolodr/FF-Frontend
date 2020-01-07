import React from "react";
import { Container, Row, Col, Table, Media } from "reactstrap";

import { ReviewTableCell } from ".";

export const ReviewTable = (props) => {

	const { name, edit } = props

	return (
		<Container>
				<Table>
					<tbody>
						<ReviewTableCell name={name} edit={edit} />
					</tbody>
				</Table>
		</Container>
	);
};