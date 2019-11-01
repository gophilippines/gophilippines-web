import React, { Component } from "react";
import Activitycard from "./Activitycard";
import { Link } from "react-router-dom";
//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

class Topactivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: []
        };
    }

    componentDidMount() {
        axios
            .get("/activitybyrecommended")
            .then(res => {
                this.setState({
                    activity: res.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <h4 className="mb-3 text-center text-uppercase">
                    Popular Activities
                </h4>

                <Row>
                    {this.state.activity.map(card => (
                        <Col xs={3} key={card.id}>
                            <Link to={`/activity/${card.id}`}>
                                <Activitycard card={card} />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        );
    }
}

export default Topactivity;
