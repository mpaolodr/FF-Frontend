import React from "react";

// MARK: -- Third Party Library
import { Link } from "react-router-dom";
import { Table, Media } from "reactstrap";



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
							{name} {edit ? <Link to="/edit-review"><i class="fas fa-edit"></i></Link> : ""}
						</Media>
							The restaurant is gorgeous and located approximately 15 minutes from the quaint, little town of Brux. 
							The space is spacious and includes all the food and drinks you would need for a relaxing night.
					</Media>
				</Media>
			</td>
			<td>January 2020</td>
		</tr>
	);
};