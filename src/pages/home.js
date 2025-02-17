import React, { Component } from 'react';
//import app from "../base";
//Components
import Banner from '../components/Banner';
import Topcity from '../components/Topcity';
import TopActivity from '../components/Topactivity';
import CallToAction from '../components/CallToAction';
import Gridgallery from '../components/Gridgallery';
import Partnership from '../components/Partnership';
import Footer from '../components/Footer';

//MUI
import Container from 'react-bootstrap/Container';

class home extends Component {
	render() {
		return (
			<div>
				<Banner />
				<Container className=" pt-5 pb-5">
					<Topcity />
				</Container>

				<Container className=" pt-5 pb-5">
					<TopActivity />
				</Container>

				<div className="bg-white pt-5 pb-5">
					<Container className=" pb-5">
						<CallToAction />
					</Container>
					<Container className=" pt-5 ">
						<Gridgallery />
					</Container>
				</div>

				<Partnership />
				<Footer />
			</div>
		);
	}
}

export default home;
