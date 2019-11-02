import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivityAction } from "../../redux/ActivityRedux";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Activity() {
    // const activityData = useSelector(state => state.activity);

    const [activity, setActivity] = useState({});

    const dispatch = useDispatch();

    const addActivity = activity => dispatch(addActivityAction(activity));

    const onChange = event => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();

        addActivity({
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
            <h1>Activity Page</h1>
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
                        <Button type="submit" className="float-right">
                            Add Activity
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Activity;
