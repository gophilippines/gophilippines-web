import React, { useState, useEffect } from "react";
import Activitycard from "../components/Activitycard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CityDetail({ match }) {
    const [item, setItem] = useState({});
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        async function fetchItemData() {
            const response = await fetch(`/cityById?id=${match.params.id}`);
            const item = await response.json();
            if (response.ok) {
                setItem(item);
            }
        }
        fetchItemData();
    }, [match]);

    useEffect(() => {
        async function fetchActivity() {
            const response = await fetch(
                `/activityByCityId?id=${match.params.id}`
            );
            const activity = await response.json();
            if (response.ok) {
                setActivity(activity);
            }
        }
        fetchActivity();
    }, [match]);

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 mt-5 mb-5">{item.name}</h1>
                </div>
            </div>

            <Container>
                <Row>
                    {/* <Col xs={3}></Col> */}
                    <Col>
                        <h4 className="mb-3 text-center">
                            Top things to do in {item.name}
                        </h4>
                        <Row className="mb-3">
                            {activity &&
                                activity.map(card => (
                                    <Col lg={4} key={card.id} className="mb-3">
                                        <Link to={`/activity/${card.id}`}>
                                            <Activitycard card={card} />
                                        </Link>
                                    </Col>
                                ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="highlight pt-5 pb-5">
                <Container>
                    <Row>
                        <Col xs={9}>
                            <h4>{item.name}</h4>
                            <p>{item.details}</p>
                        </Col>
                        <Col xs={3}>{JSON.stringify(item.location)}</Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </React.Fragment>
    );
}
