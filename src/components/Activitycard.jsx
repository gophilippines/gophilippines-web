import React from "react";
//MUI
// import StarIcon from "@material-ui/icons/Star";
//MUI Cards
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//className='no-gutter'
function Topactivity(props) {
    return (
        <React.Fragment>
            <Card className="activityCard">
                <Card.Img
                    variant="top"
                    src={props.card.imageURL}
                    title="Contemplative Reptile"
                />
                <Card.Body>
                    <Card.Title className="text-dark text-uppercase">
                        {props.card.name}
                    </Card.Title>
                    <Row>
                        <Col xs={8}>
                            <b className="text-success">
                                P {props.card.price}{" "}
                            </b>
                            <br /> <small>Available</small>
                        </Col>
                        <Col xs={4} className="text-right text-warning">
                            <small className="font-weight-bold">
                                <i className="fas fa-star"></i>{" "}
                                {props.card.rating}
                            </small>
                        </Col>
                    </Row>
                </Card.Body>
                {/* <Card.Footer>
                    
                </Card.Footer> */}
            </Card>
        </React.Fragment>
    );
}

export default Topactivity;
