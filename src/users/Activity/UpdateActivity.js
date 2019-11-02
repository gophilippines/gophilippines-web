import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateActivityAction } from "../../redux/ActivityRedux";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Activity({ match }) {
    // const activityData = useSelector(state => state.activity);

    const [activity, setActivity] = useState({});

    useEffect(() => {
        async function fetchItemData() {
            const fetchItem = await fetch(
                `/activityById?id=${match.params.id}`
            );
            const item = await fetchItem.json();
            setActivity(item);
        }
        fetchItemData();
    }, [match]);

    const dispatch = useDispatch();

    const updateActivity = activity => dispatch(updateActivityAction(activity));

    const onChange = event => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();

        updateActivity({
            id: activity.id,
            name: activity.name,
            details: activity.details,
            address: activity.address,
            city_id: activity.city_id,
            recommended: Boolean.valueOf(activity.recommended),
            price: activity.price
        });
    };

    return (
        <div className="container mt-5 mb-5">
            <h1>Update Activity Page</h1>
            <Row>
                <Col>
                    <Form onSubmit={onSubmit} className="mt-5">
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                name
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="name"
                                    onChange={onChange}
                                    value={activity.name}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                details
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="details"
                                    onChange={onChange}
                                    value={activity.details}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                address
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="address"
                                    onChange={onChange}
                                    value={activity.address}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                city_id
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="city_id"
                                    onChange={onChange}
                                    value={activity.city_id}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                recommended
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="recommended"
                                    onChange={onChange}
                                    value={activity.recommended}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="3">
                                price
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    name="price"
                                    onChange={onChange}
                                    value={activity.price}
                                />
                            </Col>
                        </Form.Group>
                        <a
                            href="/dashboard/activity"
                            className="btn btn-secondary float-right ml-2"
                        >
                            Cancel
                        </a>
                        <Button
                            type="submit"
                            className="btn btn-primary float-right"
                        >
                            Update Activity
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Activity;
