import React from "react";
import Activitycard from "./Activitycard";
import { Link } from "react-router-dom";
//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CityDetail({ items, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <React.Fragment>
            <Row className="mb-3">
                {items &&
                    items.map(card => (
                        <Col lg={4} key={card.id} className="mb-3">
                            <Link to={`/activity/${card.id}`}>
                                <Activitycard card={card} />
                            </Link>
                        </Col>
                    ))}
            </Row>
        </React.Fragment>
    );
}
