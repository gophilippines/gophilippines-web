import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateActivityAction, uploadActivityImageAction } from '../../redux/ActivityRedux';
import Sidebar from '../../components/SideNav';
import { Link } from 'react-router-dom';

// MUI
// import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Require Editor CSS files.
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditor from 'react-froala-wysiwyg';

function Activity({ match }) {
	const [ activity, setActivity ] = useState({});

	useEffect(
		() => {
			async function fetchItemData() {
				const fetchItem = await fetch(`/activityById?id=${match.params.id}`);
				const item = await fetchItem.json();
				setActivity(item);
			}
			fetchItemData();
		},
		[ match ]
	);

	const dispatch = useDispatch();

	const updateActivity = (activity) => dispatch(updateActivityAction(activity));
	const uploadActivityImage = (formData) => dispatch(uploadActivityImageAction(formData));

	const onChange = (event) => {
		setActivity({ ...activity, [event.target.name]: event.target.value });
	};
	const handleWYSIWYGChange = (content) => {
		setActivity({ ...activity, details: content });
	};
	const onSubmit = (event) => {
		event.preventDefault();

		updateActivity({
			id: activity.id,
			name: activity.name,
			details: activity.details,
			address: activity.address,
			city_id: activity.city_id,
			recommended: activity.recommended,
			price: activity.price
		});
	};

	const handleImageChange = (event) => {
		const image = event.target.files[0];
		const formData = new FormData();
		formData.append('file', image);
		uploadActivityImage({
			id: activity.id,
			data: formData
		});
		// this.props.uploadImage(formData);
	};

	return (
		<div id="wrapper">
			<Sidebar />
			<div className="page-content-wrapper">
				<Row>
					{/* <Col sm={3} /> */}
					<Col md={{ span: 8, offset: 2 }}>
						<Card className="mb-5">
							{/* <Card.Img variant="top" src={require('../assets/img/default.png')} title="" /> */}
							<Card.Body
								className="m_bg card-img-top text-white"
								style={{
									backgroundImage: 'url(' + activity.imageURL + ')'
								}}
							>
								<h4>Update Activity Page</h4>

								<label for="fileUpload" class="file-upload p-3">
									<i class="fas fa-camera fa-2x" />

									<input
										type="file"
										name="file"
										id="fileUpload"
										className="file-upload-image"
										onChange={handleImageChange}
									/>
								</label>
							</Card.Body>
						</Card>
						<Form onSubmit={onSubmit}>
							<Form.Group as={Row}>
								<Form.Label column sm="2">
									Name
								</Form.Label>
								<Col>
									<Form.Control name="name" onChange={onChange} value={activity.name} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="2">
									Details
								</Form.Label>
								<Col>
									<FroalaEditor
										tag="textarea"
										// config={this.config}
										model={activity.details}
										onModelChange={handleWYSIWYGChange}
									/>
									{/* <Form.Control
                                        name="details"
                                        onChange={onChange}
                                        value={activity.details}
                                    /> */}
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="2">
									Address
								</Form.Label>
								<Col>
									<Form.Control name="address" onChange={onChange} value={activity.address} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column sm="2">
									City
								</Form.Label>
								<Col>
									<Form.Control name="city_id" onChange={onChange} value={activity.city_id} />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Col>
									<Row>
										<Form.Label column sm="4">
											Price
										</Form.Label>
										<Col>
											<Form.Control name="price" onChange={onChange} value={activity.price} />
										</Col>
									</Row>
								</Col>
								<Col>
									<Row>
										<Form.Label column sm="4">
											Recommended ?
										</Form.Label>
										<Col>
											<Form.Control
												as="select"
												name="recommended"
												onChange={onChange}
												value={activity.recommended}
											>
												<option value="true" className="text-capetalize">
													true
												</option>
												<option value="false" className="text-capetalize">
													false
												</option>
											</Form.Control>
										</Col>
									</Row>
								</Col>
							</Form.Group>
							<Form.Group className="text-right">
								<Link className="btn btn-secondary btn-md mr-2" to="/dashboard/activity">
									Cancel
								</Link>
								<Button type="submit" className="btn btn-primary float-right">
									Update Activity
								</Button>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Activity;
