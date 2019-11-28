import React, { Component } from 'react';
import Activitycard from './Activitycard';
import { Link } from 'react-router-dom';
//MUI
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

//className='no-gutter'
class Gridgallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activity: []
		};
	}
	componentDidMount() {
		axios
			.get('/activityRandom')
			.then((res) => {
				this.setState({
					activity: res.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className="text-center">
					<h1 className="text-uppercase">rhoncus mattis</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
				</div>
				<Row>
					<Col xs={6}>
						<div
							className="card p-5 m_bg text-white"
							style={{
								backgroundImage: 'url(' + require('../assets/img/banner/Jetskiing.jpg') + ')',
								height: '98%'
							}}
						>
							<div className="card-body text-center pt-5">
								<h1 className="mt-5 ">EXPLORE</h1>
								<h4 className="mb-4">SEE MORE ADVENTURE</h4>
								<p>
									is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
									the industry's
								</p>
								<button className="btn btn-light mt-5">Explore more</button>
							</div>
						</div>
					</Col>
					<Col xs={6}>
						<Row>
							{this.state.activity.map((card) => (
								<Col xs={6} key={card.id} className="mb-3">
									<Link to={`/activity/${card.id}`}>
										<Activitycard card={card} />
									</Link>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}
export default Gridgallery;
