import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addActivityAction, getActivity } from "../redux/ActivityRedux";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

function Activity() {
    // const activityData = useSelector(state => state.activity);

    const activityData = useSelector(state => state.activity.data);

    console.log(activityData);

    const [activity, setActivity] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivity());
    });

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

    // const [activityList, setActivityList] = useState([]);
    // useEffect(() => {
    //     async function fetchActivity() {
    //         const fetchItem = await fetch(
    //             `/activityByCityId?id=3bhJa26hT9nbSfCvSzhp`
    //         );
    //         const activityList = await fetchItem.json();
    //         setActivityList(activityList);
    //     }
    //     fetchActivity();
    // }, []);
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
                <Col>
                    <table className="table">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody>
                            {activityData &&
                                activityData[0].map(data => (
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                onClick={handleShow}
                                            >
                                                Launch demo modal
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Activity;
