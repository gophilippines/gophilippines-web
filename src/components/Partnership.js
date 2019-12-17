import React from 'react';

//MUI
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
function Partnership() {
	return (
		<React.Fragment>
			<Jumbotron
				className="text-center m_bg text-white mb-0"
				style={{
					backgroundImage: 'url(' + require('../assets/img/watersports-goa.jpg') + ')'
				}}
			>
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
			</Jumbotron>
			<Container className="container pt-5 pb-5 text-center">
				<h2>PARTNERSHIPS</h2>
				<p className="mb-5">This is a simple hero unit, a simple jumbotron-style component</p>
				<Row>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/new_bbl_logo_white.png')} width="100" />
					</Col>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/bbl-divers.jpg')} width="50" />
					</Col>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/new_bbl_logo_white.png')} width="100" />
					</Col>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/bbl-divers.jpg')} width="50" />
					</Col>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/new_bbl_logo_white.png')} width="100" />
					</Col>
					<Col xs={2}>
						<img alt="" src={require('../assets/img/bbl-divers.jpg')} width="50" />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default Partnership;
