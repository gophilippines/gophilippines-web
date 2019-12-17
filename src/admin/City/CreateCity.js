import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCityAction } from '../../redux/CityRedux';
import Sidebar from '../../components/SideNav';
import { Link } from 'react-router-dom';
// MUI
// import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function City() {
	const [ city, setCity ] = useState({});

	const dispatch = useDispatch();

	const addCity = (city) => dispatch(addCityAction(city));

	const onChange = (event) => {
		setCity({ ...city, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		addCity({
			name: city.name,
			details: city.details,
			recommended: Boolean.valueOf(city.recommended),
			location: city.location
		});
	};

	return (
		<div id="wrapper">
			<Sidebar />
			<div className="page-content-wrapper">
				<h1>City Page</h1>
				<Row>
					<Col>
						<Form onSubmit={onSubmit} className="mt-5">
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									name
								</Form.Label>
								<Col>
									<Form.Control name="name" onChange={onChange} value={city.name} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									details
								</Form.Label>
								<Col>
									<Form.Control name="details" onChange={onChange} value={city.details} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									recommended
								</Form.Label>
								<Col>
									<Form.Control name="recommended" onChange={onChange} value={city.recommended} />
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm="3">
									location
								</Form.Label>
								<Col>
									<Form.Control name="location" onChange={onChange} value={city.location} />
								</Col>
							</Form.Group>
							<Form.Group className="text-right">
								<Link className="btn btn-secondary btn-md mr-2" to="/dashboard/city">
									Cancel
								</Link>
								<Button type="submit">Add City</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default City;
