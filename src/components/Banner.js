import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
	const [ index, setIndex ] = useState(0);
	const [ direction, setDirection ] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel activeIndex={index} direction={direction} onSelect={handleSelect} className="home_banner">
			<Carousel.Item
				className="m_bg text-center"
				style={{
					backgroundImage: 'url(' + require('../assets/img/banner/banner1.jpg') + ')'
				}}
			>
				<img
					className="mt-5"
					src={require('../assets/img/gophlogo-footer.png')}
					alt="First slide"
					width="300px"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				className="m_bg text-center"
				style={{
					backgroundImage: 'url(' + require('../assets/img/banner/banner2.jpg') + ')'
				}}
			>
				<img
					className="mt-5"
					src={require('../assets/img/gophlogo-footer.png')}
					alt="First slide"
					width="300px"
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item
				className="m_bg text-center"
				style={{
					backgroundImage: 'url(' + require('../assets/img/banner/banner3.jpg') + ')'
				}}
			>
				<img
					className="mt-5"
					src={require('../assets/img/gophlogo-footer.png')}
					alt="First slide"
					width="300px"
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;
