import React from 'react';

//MUI
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//className='no-gutter'
function CallToAction() {
	return (
		<Row>
			<Col md={6}>
				<h1 className="mb-5 mt-5 text-uppercase">integer quis</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Sodales ut etiam sit amet. Lacus sed turpis tincidunt id aliquet risus. Sit
					amet commodo nulla facilisi nullam vehicula ipsum a arcu.
				</p>
				<p>
					Id porta nibh venenatis cras. Porta nibh venenatis cras sed felis eget. Rhoncus aenean vel elit
					scelerisque mauris pellentesque pulvinar pellentesque. Quam nulla porttitor massa id neque aliquam.
					Praesent elementum facilisis leo vel fringilla est.
				</p>
			</Col>
			<Col md={6}>
				<img alt="" src={require('../assets/img/TWIN-LAGOON.jpg')} title="Contemplative Reptile" width="100%" />
			</Col>
		</Row>
	);
}

export default CallToAction;
