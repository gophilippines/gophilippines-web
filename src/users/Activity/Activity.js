import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivity } from "../../redux/ActivityRedux";
import UpdateActivity from "../../components/Modal/UpdateActivityModal";
import { Link } from "react-router-dom";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Activity() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const activityData = useSelector(state => state.activity.data);

    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getActivity());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    // useEffect(() => {
    //     dispatch(getActivity());
    // }, []);

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
            <Row>
                <Col>
                    <h1>Activity List Page</h1>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>Activity Name</td>
                                <td className="text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {activityData &&
                                activityData[0].map(data => (
                                    <tr key={data.id}>
                                        <td>{data.name}</td>
                                        <td className="text-center">
                                            <Link
                                                to={`/dashboard/updateActivity/${data.id}`}
                                                className="btn btn-primary btn-md"
                                            >
                                                Edit
                                            </Link>

                                            <Button
                                                className="btn btn-danger btn-md"
                                                variant="danger"
                                                onClick={handleShow}
                                            >
                                                Delete
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
                <UpdateActivity />
            </Modal>
        </div>
    );
}

export default Activity;
