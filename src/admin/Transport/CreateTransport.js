import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransportAction } from '../../redux/TransportRedux';
import Sidebar from '../../components/SideNav';
import { Link } from 'react-router-dom';
// MUI
// import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Transport() {
	const [ transport, setTransport ] = useState({});

	const dispatch = useDispatch();

	const addTransport = (transport) => dispatch(addTransportAction(transport));

	const onChange = (event) => {
		setTransport({ ...transport, [event.target.name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		addTransport({
			company: transport.company,
			address: transport.address,
			details: transport.details,
			recommended: transport.recommended,
			price: transport.price,
			city_id: transport.city_id
		});
	};

	return (
		<div id="wrapper">
			<Sidebar />
			<div className="page-content-wrapper">
				<h1>Transport Page</h1>
				<Row>
					<Col>
						<Form onSubmit={onSubmit} className="mt-5">
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									City
								</Form.Label>
								<Col>
									<Form.Control name="city_id" onChange={onChange} value={transport.city_id} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									company
								</Form.Label>
								<Col>
									<Form.Control name="company" onChange={onChange} value={transport.company} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									address
								</Form.Label>
								<Col>
									<Form.Control name="address" onChange={onChange} value={transport.address} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									details
								</Form.Label>
								<Col>
									<Form.Control name="details" onChange={onChange} value={transport.details} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="3">
									recommended
								</Form.Label>
								<Col>
									<Form.Control
										as="select"
										name="recommended"
										onChange={onChange}
										value={transport.recommended}
									>
										<option value="true" className="text-capetalize">
											true
										</option>
										<option value="false" className="text-capetalize">
											false
										</option>
									</Form.Control>
								</Col>
							</Form.Group>

							<Form.Group as={Row}>
								<Form.Label column sm="3">
									price
								</Form.Label>
								<Col>
									<Form.Control name="price" onChange={onChange} value={transport.price} />
								</Col>
							</Form.Group>
							<Form.Group className="text-right">
								<Link className="btn btn-secondary btn-md mr-2" to="/dashboard/transport">
									Cancel
								</Link>
								<Button type="submit">Add Transport</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Transport;
