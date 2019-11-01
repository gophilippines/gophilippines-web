import React, { useState, useEffect } from "react";
import Banner from "../components/ActivityBanner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//MUI Icon
// import StarIcon from "@material-ui/icons/Star";

export default function ActivityDetail({ match }) {
    dayjs.extend(relativeTime);

    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchItemData() {
            const fetchItem = await fetch(
                `/activityById?id=${match.params.id}`
            );
            const item = await fetchItem.json();
            setItem(item);
        }
        fetchItemData();
    }, [match]);

    useEffect(() => {
        async function fetchReviews() {
            const fetchItem = await fetch(
                `/showComments?id=${match.params.id}`
            );
            const reviews = await fetchItem.json();
            setReviews(reviews);
        }
        fetchReviews();
    }, [match]);

    return (
        <React.Fragment>
            <Banner />
            <Container className="mt-5 mb-5">
                <Row container spacing={3}>
                    <Col xs={8}>
                        <h1>{item.name}</h1>
                        <h6>{item.address}</h6>
                        <hr />
                        <p className="pt-4 pb-4">{item.details}</p>
                        <hr />
                        <Row>
                            <Col>
                                <h4>
                                    Reviews{" "}
                                    <Badge variant="primary">
                                        {item.totalRatingCount}
                                    </Badge>
                                </h4>
                            </Col>
                            <Col className="text-right">
                                <h5 className="text-warning">
                                    <i className="fas fa-star"></i>
                                    {item.rating}
                                </h5>
                            </Col>
                        </Row>

                        {reviews.map(review => (
                            <div className="reviews-wrapper" key={review.id}>
                                <Row>
                                    <Col>
                                        <h6>
                                            {review.name}
                                            <span className="text-warning ml-2">
                                                <i className="fas fa-star"></i>
                                                {review.rate}
                                            </span>
                                        </h6>
                                    </Col>
                                    <Col className="text-right">
                                        <small>
                                            {dayjs(
                                                review.dateCreated
                                            ).fromNow()}
                                        </small>
                                    </Col>
                                </Row>
                                <p>{review.comment}</p>
                                <hr />
                            </div>
                        ))}
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <h1>{item.price}</h1>
                                <Button variant="danger">Book Now!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
