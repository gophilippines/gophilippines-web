import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import { Link } from "react-router-dom";
//MUI
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingForm({ itemData }) {
	dayjs.extend(relativeTime);
	const [ booking, setBooking ] = useState({});
	const [ startDate, setStartDate ] = useState(null);

	//Counter Adult
	const [ count, setCount ] = useState(1);
	const [ isEnable, setButton ] = useState(true);
	function incrementCount(event, count) {
		const result = count + 1;
		if (result < 0) {
			setCount(result);
			setBooking({ ...booking, totalPrice: (countChild + result) * itemData.price });
		} else {
			setCount(result);
			setBooking({ ...booking, totalPrice: (countChild + result) * itemData.price });
			setButton(false);
		}
	}
	function decrementCount(event, count) {
		const result = count - 1;
		if (result > 1) {
			setCount(result);
			setBooking({ ...booking, totalPrice: (countChild + result) * itemData.price });
		} else {
			setCount(result);
			setBooking({ ...booking, totalPrice: (countChild + result) * itemData.price });
			setButton(true);
		}
	}

	//Counter Child
	const [ countChild, setCountChild ] = useState(0);
	const [ isEnableChild, setButtonChild ] = useState(true);

	function incrementCountChild(event, countChild) {
		const result = countChild + 1;
		if (result < 0) {
			setCountChild(result);
			setBooking({ ...booking, totalPrice: (result + count) * itemData.price });
		} else {
			setCountChild(result);
			setBooking({ ...booking, totalPrice: (result + count) * itemData.price });
			setButtonChild(false);
		}
	}
	function decrementCountChild(event, countChild) {
		const result = countChild - 1;
		if (result > 0) {
			setCountChild(result);
			setBooking({ ...booking, totalPrice: (result + count) * itemData.price });
		} else {
			setCountChild(result);
			setBooking({ ...booking, totalPrice: (result + count) * itemData.price });
			setButtonChild(true);
		}
	}
	function onChange(event) {
		setBooking({ ...booking, [event.target.name]: event.target.value });
	}
	function handleSubmitBook(event) {
		event.preventDefault();
		const addBooking = {
			fullName: booking.fullName,
			nAdults: count,
			nChild: countChild,
			totalPrice: booking.totalPrice ? booking.totalPrice : itemData.price,
			status: 'pending',
			date: dayjs(startDate).format('MM/DD/YYYY'),
			email: booking.email,
			contact: booking.contact
		};

		axios
			.post(`/addBooking?id=${itemData.id}`, addBooking)
			.then((res) => {
				// window.location.href = '/dashboard/booking';
				// toastr.success(`Activty has been created `);
			})
			.catch((err) => {});
	}

	return (
		<React.Fragment>
			<Card>
				<Card.Header className="bg-success text-white">
					<h3 className="m-0">₱ {itemData.price}</h3>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmitBook} autocomplete="off">
						<Form.Group as={Row}>
							<Form.Label column sm="12">
								Select Date
							</Form.Label>
							<Col>
								<DatePicker
									name="date"
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									className="form-control"
									placeholder="Select Date"
									value={booking.date}
								/>
							</Col>
						</Form.Group>
						{/* <Form.Group as={Row}>
							<Col>
								<Form.Control
									name="fullName"
									type="text"
									placeholder="Full Name"
									value={booking.fullName}
									onChange={onChange}
								/>
							</Col>
						</Form.Group> */}
						{/* <Form.Group as={Row}>
							<Col>
								<Form.Control
									name="email"
									type="email"
									placeholder="Email"
									value={booking.email}
									onChange={onChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Col>
								<Form.Control
									name="contact"
									type="text"
									placeholder="Contact No."
									value={booking.contact}
									onChange={onChange}
								/>
							</Col>
						</Form.Group> */}
						{/* <Form.Group>
							<Form.Label>Select Package options</Form.Label> <br />
							<ButtonGroup toggle className="mt-3">
								<ToggleButton type="radio" name="radio" defaultChecked value="1">
									Active
								</ToggleButton>
								<ToggleButton type="radio" name="radio" value="2">
									Radio
								</ToggleButton>
								<ToggleButton type="radio" name="radio" value="3">
									Radio
								</ToggleButton>
							</ButtonGroup>
						</Form.Group> */}

						<Form.Group as={Row} className="text-center">
							<Col>
								<Form.Label column>Adult</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<Button
											variant="outline-secondary"
											type="button"
											onClick={(event) => decrementCount(event, count)}
											disabled={isEnable}
										>
											-
										</Button>
									</InputGroup.Prepend>
									<Form.Control
										name="nAdults"
										className="text-center"
										value={count}
										onChange={onChange}
									/>
									<InputGroup.Append>
										<Button
											variant="outline-secondary"
											type="button"
											onClick={(event) => incrementCount(event, count)}
										>
											+
										</Button>
									</InputGroup.Append>
								</InputGroup>
							</Col>
							<Col>
								<Form.Label column>Child(3-4)</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<Button
											variant="outline-secondary"
											type="button"
											onClick={(event) => decrementCountChild(event, countChild)}
											disabled={isEnableChild}
										>
											-
										</Button>
									</InputGroup.Prepend>
									<Form.Control
										name="nChild"
										className="text-center"
										value={countChild}
										onChange={onChange}
									/>
									<InputGroup.Append>
										<Button
											variant="outline-secondary"
											type="button"
											onClick={(event) => incrementCountChild(event, countChild)}
										>
											+
										</Button>
									</InputGroup.Append>
								</InputGroup>
							</Col>
						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column sm="6">
								Total Price
							</Form.Label>

							<Col className="text-right">
								<h4 className="text-success mt-1">
									₱ {booking.totalPrice ? booking.totalPrice : itemData.price}
								</h4>
								<Form.Control
									name="totalPrice"
									hidden
									value={booking.totalPrice ? booking.totalPrice : itemData.price}
									onChange={onChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group>
							<Button type="submit" variant="success" className="w-100">
								Book Now!
							</Button>
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
}
