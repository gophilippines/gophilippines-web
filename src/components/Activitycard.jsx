import React from 'react';
//MUI
// import StarIcon from "@material-ui/icons/Star";
//MUI Cards
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//className='no-gutter'
function Topactivity(props) {
	return (
		<React.Fragment>
			<Card className="activityCard">
				{/* <Card.Img
                    variant="top"
                    src={props.card.imageURL}
                    title="Contemplative Reptile"
                /> */}
				<div
					className="m_bg card-img-top"
					style={{
						backgroundImage: 'url(' + props.card.imageURL + ')'
					}}
				/>

				<Card.Body>
					<Card.Title className="text-dark text-uppercase h6 mb-0">
						{props.card.name ? props.card.name : props.card.company}
					</Card.Title>
				</Card.Body>
				<Card.Footer>
					<Row>
						<Col xs={8}>
							<b className="text-success">₱{props.card.price} </b>
							<br /> <small>Available</small>
						</Col>
						<Col xs={4} className="text-right text-warning">
							<small className="font-weight-bold">
								<i className="fas fa-star" /> {props.card.rating}
							</small>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</React.Fragment>
	);
}

export default Topactivity;
