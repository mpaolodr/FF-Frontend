import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ToastHeader, ToastBody, Table, Media } from "reactstrap";

export const Review = (props) => {

	const { name, edit } = props

	return (
		<Container>
				<Table>
					<tbody>
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
						<tr>
							<td>
								<Row>
									<Col>
										<Media>
											<Media left top href="#">
												<Media object src="https://via.placeholder.com/64x65" alt="Generic placeholder image" />
											</Media>
											<Media body>
												<Media heading>
													{name} {edit ? <Link to="/edit-review"><i class="fas fa-edit"></i></Link> : ""}
												</Media>
												The restaurant is gorgeous and located approximately 15 minutes from the quaint, little town of Brux. 
												The space is spacious and includes all the food and drinks you would need for a relaxing night.
											</Media>
										</Media>
									</Col>
								</Row>
							</td>
							<td>December 2019</td>
						</tr>
						<tr>
							<td>
								<Row>
									<Col>
										<Media>
											<Media left top href="#">
												<Media object src="https://via.placeholder.com/64x65" alt="Generic placeholder image" />
											</Media>
											<Media body>
												<Media heading>
													{name} {edit ? <Link to="/edit-review"><i class="fas fa-edit"></i></Link> : ""}
												</Media>
												The restaurant is gorgeous and located approximately 15 minutes from the quaint, little town of Brux. 
												The space is spacious and includes all the food and drinks you would need for a relaxing night. 
												The food presentation is absolutely gorgeous and so delicious!!! 
												Anna was also very communicative and helpful, taking care of anything we needed.
											</Media>
										</Media>
									</Col>
								</Row>
							</td>
							<td>December 2019</td>
						</tr>
						<tr>
							<td>
								<Media>
									<Media left top href="#">
										<Media object src="https://via.placeholder.com/64x65" alt="Generic placeholder image" />
									</Media>
									<Media body>
										<Media heading>
											{name} {edit ? <Link to="/edit-review"><i class="fas fa-edit"></i></Link> : ""}
										</Media>
										It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
										The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
										'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors 
										now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
										Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
									</Media>
								</Media>
							</td>
							<td>October 2019</td>
						</tr>
					</tbody>
				</Table>
		</Container>
	);
};