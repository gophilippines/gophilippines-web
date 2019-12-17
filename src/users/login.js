import React, { Component } from 'react';
import PropTypes from 'prop-types';

// MUI Stuff
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

//Redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({ errors: nextProps.UI.errors });
		}
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const userData = {
			email_address: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData, this.props.history);
	};
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	render() {
		const { UI: { loading } } = this.props;
		const { errors } = this.state;

		return (
			<Container>
				<Row>
					<Col sm />
					<Col sm className="mt-5 text-center">
						<Card className="mb-3 mt-5">
							<Card.Body>
								{/* <img src={AppIcon} alt="monkey" className={classes.image} /> */}
								<h2 className="mb-5">Log In</h2>
								<Form noValidate onSubmit={this.handleSubmit}>
									<Form.Control
										id="email"
										name="email"
										type="email"
										label="Email"
										className="mb-3"
										helperText={errors.email_address}
										error={errors.email_address ? true : false}
										value={this.state.email}
										onChange={this.handleChange}
										fullWidth
										size="lg"
									/>
									<Form.Control
										id="password"
										name="password"
										type="password"
										label="Password"
										className="mb-3"
										helperText={errors.password}
										error={errors.password ? true : false}
										value={this.state.password}
										onChange={this.handleChange}
										fullWidth
										size="lg"
									/>
									{errors && <h5 className="text-danger">{errors.General}</h5>}
									{errors.Error && <h5 className="text-danger">{errors.Error}</h5>}

									<Button
										type="submit"
										variant="primary"
										disabled={loading}
										block
										size="lg"
										// onClick={!loading ? handleClick : null}
									>
										Log in
										{/* {loading ? 'Loading <Spinner animation="border" />' : 'Login'} */}
										{loading && <Spinner animation="border" />}
									</Button>
								</Form>
							</Card.Body>
							<Card.Footer>
								<Row>
									<Col lg={8} className="text-left">
										<p className="mt-2">No account yet? Sign up now!</p>
									</Col>
									<Col className="text-right">
										<a href="/signup" className="btn btn-outline-secondary">
											Sign Up
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
		);
	}
}

login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI
});

const mapActionsToProps = {
	loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(login);
