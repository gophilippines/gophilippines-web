import React, { Component } from "react";
import Activitycard from "./Activitycard";
//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

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
            <Row>
                <Col xs={6}>
                    <div className="card p-5">
                        <div className="card-body text-center">
                            <h2 className="mt-5 mb-4">Lorem Ipsum</h2>
                            <p>
                                is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's
                            </p>
                            <button className="btn btn-outline-primary mt-5">
                                Explore more
                            </button>
                        </div>
                    </div>
                </Col>
                <Col xs={6}>
                    <Row>
                        {this.state.activity.map(card => (
                            <Col xs={6} key={card.id} className="mb-3">
                                <Activitycard card={card} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Gridgallery;
