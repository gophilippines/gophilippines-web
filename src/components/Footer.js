import React from 'react';

//MUI
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StickyFooter() {
	return (
		<footer
			className="footer m_bg"
			style={{
				backgroundImage: 'url(' + require('../assets/img/footer-bg.png') + ')'
			}}
		>
			<div>
				<Container fluid={true}>
					<Row>
						<Col xs={4} className="text-right">
							<img src={require('../assets/img/gophlogo-footer.png')} alt="" width="210" />
						</Col>
						<Col xs={2}>
							<h4 className="mb-4 text-uppercase">About</h4>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industry's standard dummy text ever since the 1500s
							</p>
						</Col>

						<Col xs={2}>
							<h4 className="mb-4 text-uppercase">Contact</h4>
							<a href="#simple-list">
								<h6 className="mb-3 font-weight-normal">
									<i className="fas fa-envelope mr-2" />
									sample@mail.com
								</h6>
							</a>
							<a href="#simple-list">
								<h6 className="mb-3 font-weight-normal">
									<i className="fas fa-phone-alt mr-2" />
									(123) 123-3154
								</h6>
							</a>

							<p>
								<i className="fas fa-map-marker-alt mr-2" />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
						</Col>

						<Col xs={4}>
							<h4 className="mb-4">STAY IN THE LOOP</h4>

							<form className="form-inline mb-3 subscribe_form">
								<div className="form-group">
									<input
										type="text"
										className="form-control mr-1 form-control-lg"
										placeholder="Subscribe"
									/>
									<button type="submit" className="btn btn-primary btn-lg">
										Submit
									</button>
								</div>
							</form>
							<div className="text-left">
								<a href="#asd" className="btn btn-transparent text-white" target="_blank">
									<i className="fab fa-facebook-f" />
								</a>
								<a href="#asd" className="btn btn-transparent text-white" target="_blank">
									<i className="fab fa-twitter" />
								</a>
								<a href="#asd" className="btn btn-transparent text-white" target="_blank">
									<i className="fab fa-instagram" />
								</a>
								<a href="#asd" className="btn btn-transparent text-white" target="_blank">
									<i className="fas fa-envelope" />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
}
