import React, { useState, useEffect } from "react";
import Banner from "../components/ActivityBanner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Comments from "../components/Comments";
//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
//MUI Icon
// import StarIcon from "@material-ui/icons/Star";

export default function ActivityDetail({ match }) {
    dayjs.extend(relativeTime);

    const [loading, setLoading] = useState(false);
    //Reviews Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewPerPage] = useState(5);

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
            setLoading(true);
            const response = await fetch(`/showComments?id=${match.params.id}`);
            const reviews = await response.json();
            if (response.ok) {
                setReviews(reviews);
            }
            setLoading(false);
        }
        fetchReviews();
    }, [match]);

    // Get current reviews
    const indexOfLastReview = currentPage * reviewPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewPerPage;
    const currentReview = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            <Banner image={item.imageURL} />
            <Container className="mt-5 mb-5">
                <Row spacing={3}>
                    <Col xs={8}>
                        <h1>{item.name}</h1>
                        <h6>{item.address}</h6>
                        <hr />
                        <div className="pt-4 pb-4">
                            <FroalaEditorView model={item.details} />
                        </div>
                        <hr />
                        <Comments
                            currentReview={currentReview}
                            loading={loading}
                            item={item}
                        />
                        <Pagination
                            itemPerPage={reviewPerPage}
                            totalItems={reviews.length}
                            paginate={paginate}
                        />
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
