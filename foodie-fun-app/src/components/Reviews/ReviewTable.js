import React from "react";
import { Container, Table } from "reactstrap";

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