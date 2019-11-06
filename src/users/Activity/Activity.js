import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivity, deleteActivityAction } from "../../redux/ActivityRedux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/SideNav";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Activity() {
    const activityData = useSelector(state => state.activities.data);

    const dispatch = useDispatch();

    const deleteActivity = activity => dispatch(deleteActivityAction(activity));

    const initFetch = useCallback(() => {
        dispatch(getActivity());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const onDelete = event => {
        event.preventDefault();
        deleteActivity(event.target.id);
        // console.log(event.target.id);
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
        <div id="wrapper">
            <Sidebar />
            <div className="page-content-wrapper">
                <Row>
                    <Col>
                        <h4>Activity List Page</h4>
                    </Col>
                    <Col className="text-right">
                        <Link
                            className="btn btn-success btn-md"
                            to="/dashboard/CreateActivity"
                        >
                            Add Activity
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>Activity Name</td>
                                    <td>Recommended</td>
                                    <td className="text-center">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {activityData &&
                                    activityData[0].map(data => (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>{String(data.recommended)}</td>
                                            <td className="text-center">
                                                <Link
                                                    to={`/dashboard/updateActivity/${data.id}`}
                                                    className="btn btn-primary btn-md mr-2"
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </Link>

                                                <Button
                                                    className="btn btn-danger btn-md"
                                                    variant="danger"
                                                    id={data.id}
                                                    onClick={onDelete}
                                                >
                                                    <i
                                                        className="fas fa-trash-alt"
                                                        id={data.id}
                                                    ></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Activity;
