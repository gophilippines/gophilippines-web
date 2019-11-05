import React, { useState, useEffect } from "react";
import Banner from "../components/ActivityBanner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Footer from "../components/Footer";
import Avatar from "react-avatar";
//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
//MUI Icon
// import StarIcon from "@material-ui/icons/Star";

export default function ActivityDetail({ match }) {
    dayjs.extend(relativeTime);

    const [item, setItem] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchItemData() {
            const response = await fetch(`/activityById?id=${match.params.id}`);
            const item = await response.json();
            if (response.ok) {
                setItem(item);
            }
        }
        fetchItemData();
    }, [match]);

    useEffect(() => {
        async function fetchReviews() {
            const response = await fetch(`/showComments?id=${match.params.id}`);
            const reviews = await response.json();
            if (response.ok) {
                setReviews(reviews);
            }
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
                        <div className="highlight p-3 mb-3">
                            <Row>
                                <Col>
                                    <h4 className="m-0">
                                        Reviews{" "}
                                        <Badge variant="primary">
                                            {item.totalRatingCount}
                                        </Badge>
                                    </h4>
                                </Col>
                                <Col className="text-right">
                                    <h5 className="text-warning m-0">
                                        <i className="fas fa-star mr-2"></i>
                                        {item.rating}
                                    </h5>
                                </Col>
                            </Row>
                        </div>

                        {reviews &&
                            reviews.map(review => (
                                <div
                                    className="reviews-wrapper"
                                    key={review.id}
                                >
                                    <Media className="pl-3 pr-3">
                                        <Avatar
                                            name={review.name}
                                            size="50"
                                            round={true}
                                            className="mr-3"
                                        />
                                        <Media.Body>
                                            <Row className="mb-2 mt-2">
                                                <Col>
                                                    <h5 className="m-0">
                                                        {review.name}
                                                    </h5>
                                                    <small className="text-secondary">
                                                        {dayjs(
                                                            review.dateCreated
                                                        ).fromNow()}
                                                    </small>
                                                </Col>
                                                <Col className="text-right">
                                                    <span className="text-warning">
                                                        <i className="fas fa-star mr-2"></i>
                                                        {review.rate}
                                                    </span>
                                                </Col>
                                            </Row>
                                            <p className="m-0">
                                                {review.comment}
                                            </p>
                                        </Media.Body>
                                    </Media>

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
            <Footer />
        </React.Fragment>
    );
}
