import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

class Topcity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: []
        };
    }
    componentDidMount() {
        axios
            .get("/cityByRecommended")
            .then(res => {
                this.setState({
                    city: res.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="mb-3 text-center  text-uppercase">
                    Most popular destinations
                </h4>
                <Row>
                    {this.state.city.map(card => (
                        <Col xs={3} key={card.id}>
                            <div
                                className="city_wrapper"
                                style={{
                                    backgroundImage:
                                        "url(" + card.imageURL + ")"
                                }}
                            >
                                <Link to={`/city/${card.id}`}>
                                    <div className="city_box text-center">
                                        <div className="city_title_wrapper">
                                            <span className="city_title">
                                                {card.name}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        );
    }
}
export default Topcity;
