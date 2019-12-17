import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Signup() {
	const [ user, setUser ] = useState({});
	const dispatch = useDispatch();

	const addUser = (user) => dispatch(signupUser(user));

	const onChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(user);

		addUser({
			first_name: user.first_name,
			last_name: user.last_name,
			email: user.email,
			contact_number: '090909',
			password: user.password,
			confirmPassword: user.confirmPassword
		});
	};

	return (
		<div>
			<React.Fragment>
				<Container>
					<Row>
						<Col sm />
						<Col sm className="mt-5 text-center">
							<Card className="mb-3 mt-5">
								<Card.Body>
									{/* <img src={AppIcon} alt="monkey" className={classes.image} /> */}
									<h2 className="mb-5">Sign Up</h2>
									<Form noValidate onSubmit={onSubmit}>
										<Form.Row>
											<Col>
												<Form.Control
													id="first_name"
													name="first_name"
													type="text"
													label="First Name"
													placeholder="First Name"
													className="mb-3"
													onChange={onChange}
													fullWidth
													size="lg"
												/>
											</Col>
											<Col>
												<Form.Control
													id="last_name"
													name="last_name"
													type="text"
													label="Last Name"
													placeholder="Last Name"
													className="mb-3"
													onChange={onChange}
													fullWidth
													size="lg"
												/>
											</Col>
										</Form.Row>

										<Form.Control
											id="email"
											name="email"
											type="email"
											label="Email"
											placeholder="Email Address"
											className="mb-3"
											onChange={onChange}
											fullWidth
											size="lg"
										/>
										<Form.Control
											id="password"
											name="password"
											type="password"
											label="Password"
											placeholder="Password"
											className="mb-3"
											onChange={onChange}
											fullWidth
											size="lg"
										/>
										<Form.Control
											id="confirmPassword"
											name="confirmPassword"
											type="password"
											label="confirmPassword"
											placeholder="Confirm Password"
											className="mb-3"
											onChange={onChange}
											fullWidth
											size="lg"
										/>

										<Button type="submit" variant="primary" size="lg" block>
											Sign Up
										</Button>
									</Form>
								</Card.Body>
								<Card.Footer>
									<Row>
										<Col lg={8} className="text-left">
											<p className="mt-2">Already have a account?</p>
										</Col>
										<Col className="text-right">
											<a href="/login" className="btn btn-outline-secondary">
												Log In
											</a>
										</Col>
									</Row>
								</Card.Footer>
							</Card>
							<Form.Row className="mb-5">
								<Col className="text-center">
									<a href="/#">Forgot Password?</a>
								</Col>
							</Form.Row>
						</Col>
						<Col sm />
					</Row>
				</Container>
			</React.Fragment>
		</div>
	);
}
