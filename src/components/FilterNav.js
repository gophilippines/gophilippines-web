import React from 'react';
//MUI
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function CityDetail(props) {
	return (
		<React.Fragment>
			<Form>
				<InputGroup className="mb-3">
					<Form.Control placeholder="Search" aria-label="search" aria-describedby="basic-addon2" />
					<InputGroup.Append>
						<InputGroup.Text id="basic-addon2" className="bg-transparent">
							<i className="fas fa-search" />
						</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
			</Form>
		</React.Fragment>
	);
}
