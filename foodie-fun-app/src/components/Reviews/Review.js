import React from "react";
import { Container, Row, Col, Card, Media } from "reactstrap";

export const Review = () => {
	return (
		<Container>
			<Card>
				<Media>
					<Media left href="#">
						<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
					</Media>
					<Media body>
						This is where the written review will be. This is where the written review will be.
					</Media>
				</Media>
			</Card>
		</Container>
	);
};