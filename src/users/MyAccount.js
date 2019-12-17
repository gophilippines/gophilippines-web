import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
// MUI
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export default function MyAccount() {
	const userData = useSelector((state) => state.user);

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
								<h4>Account Information</h4>
								<p>This information is used to autofill your details</p>
								<Form>
									<Form.Group>
										<Form.Row>
											<Col>
												<Form.Label>Title</Form.Label>
												<Form.Control placeholder="Title" />
											</Col>
											<Col>
												<Form.Label>First name</Form.Label>
												<Form.Control placeholder="First name" value={userData.first_name} />
											</Col>
											<Col>
												<Form.Label>Last name</Form.Label>
												<Form.Control placeholder="Last name" value={userData.last_name} />
											</Col>
										</Form.Row>
									</Form.Group>
									<Form.Group>
										<Form.Row>
											<Col>
												<Form.Label>Email Address</Form.Label>
												<Form.Control placeholder="Email" value={userData.email_address} />
											</Col>
											<Col>
												<Form.Label>Contact Number</Form.Label>
												<Form.Control placeholder="Contact" value={userData.contact_number} />
											</Col>
										</Form.Row>
									</Form.Group>
								</Form>
								<Button type="submit" variant="primary" size="lg">
									Save
								</Button>
							</Card.Body>
						</Card>

						<Card className="mb-3">
							<Card.Body>
								<h4>Change Password</h4>
								<p>New Password (passwords must be 8-20 characters long</p>
								<Form>
									<Form.Group>
										<Form.Label>Current Password</Form.Label>
										<Form.Control
											name="currentPassword"
											placeholder="Enter Current Password"
											type="password"
										/>
									</Form.Group>
									<Form.Group>
										<p>New Password (passwords must be 8-20 characters long</p>
										<Form.Control
											name="newPassword"
											placeholder="Enter New Password"
											type="password"
										/>
									</Form.Group>
									<Form.Group>
										<Form.Control
											name="confirmPassword"
											placeholder="Enter Confirm Password"
											type="password"
										/>
									</Form.Group>
									<Button type="submit" variant="primary" size="lg">
										Save
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer />
		</React.Fragment>
	);
}
