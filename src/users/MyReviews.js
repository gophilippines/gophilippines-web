import React from 'react';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
// MUI
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function MyReviews() {
	return (
		<React.Fragment>
			<Container className="mt-5">
				<Row>
					<Col sm={3}>
						<UserProfile />
					</Col>
					<Col>
						<Card className="mb-3">
							<Card.Body>
								<h4>My Reviews</h4>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
}
