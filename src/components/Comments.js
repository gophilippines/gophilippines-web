import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Avatar from "react-avatar";
//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
//MUI Icon
// import StarIcon from "@material-ui/icons/Star";

export default function Comments({ currentReview, loading, item }) {
    dayjs.extend(relativeTime);
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <React.Fragment>
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

            {currentReview &&
                currentReview.map(review => (
                    <div className="reviews-wrapper" key={review.id}>
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
                                        <h5 className="m-0">{review.name}</h5>
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
                                <p className="m-0">{review.comment}</p>
                            </Media.Body>
                        </Media>

                        <hr />
                    </div>
                ))}
        </React.Fragment>
    );
}
