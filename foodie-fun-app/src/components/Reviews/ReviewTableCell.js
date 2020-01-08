import React from "react";

// MARK: -- Third Party Library
import { Link } from "react-router-dom";
import { Table, Media } from "reactstrap";
import styled from "styled-components";

const Psmall = styled.p`
	width: 5.5rem;
	font-size: .8rem;
	margin: 0 0 0 0;
`;

const Pbold = styled.p`
	font-size: .8rem;
`;

const Spansmall = styled.span`
	font-size: .7rem;
	margin: 0 0 0 0.2rem;
`;

export const ReviewTableCell = (props) => {

	const { name, edit } = props;

	return (
		<tr>
			<td>
				<Media>
					<Link to="/profile">
						<Media left top href="#">
							<Media object src="https://via.placeholder.com/64x65" alt="Generic placeholder image" />
						</Media>
					</Link>
					<Media body>
						<Media heading>
							{name} {edit ? <Link to="/edit-review"><i class="fas fa-edit"></i></Link> : <div><Pbold>Avocado Toast<Spansmall> <i class="fas fa-star text-warning"></i> 4.50</Spansmall><Psmall>$$$</Psmall></Pbold></div>}
						</Media>
							<p>
							The restaurant is gorgeous and located approximately 15 minutes from the quaint, little town of Brux. 
							The space is spacious and includes all the food and drinks you would need for a relaxing night.
							</p>
					</Media>
				</Media>
			</td>
			<td>
			<Media>
				<Media body>
					<Psmall>January 2020</Psmall>
				</Media>
			</Media>
			</td>
		</tr>
	);
};