import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getTransport,
    deleteTransportAction
} from "../../redux/TransportRedux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/SideNav";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Transport() {
    // class Transport extends Component {
    // render() {
    const transportData = useSelector(state => state.transport.data);
    const dispatch = useDispatch();

    const deleteTransport = transport =>
        dispatch(deleteTransportAction(transport));

    const initFetch = useCallback(
        () => {
            dispatch(getTransport());
        },
        [dispatch]
    );

    useEffect(
        () => {
            initFetch();
        },
        [initFetch]
    );

    const onDelete = event => {
        event.preventDefault();
        deleteTransport(event.target.id);
    };

    return (
        <div id="wrapper">
            <Sidebar />
            <div className="page-content-wrapper">
                <Row>
                    <Col>
                        <h4>Transport List Page</h4>
                    </Col>
                    <Col className="text-right">
                        <Link
                            className="btn btn-success btn-md"
                            to="/dashboard/CreateTransport"
                        >
                            Add Transport
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>Transport Name</td>
                                    <td className="text-center">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {transportData &&
                                    transportData.map(transport => (
                                        <tr key={transport.id}>
                                            <td>{transport.company}</td>
                                            <td className="text-center">
                                                <Link
                                                    to={`/dashboard/updateTransport/${transport.id}`}
                                                    className="btn btn-primary btn-md mr-2"
                                                >
                                                    <i className="fas fa-pencil-alt" />
                                                </Link>

                                                <Button
                                                    className="btn btn-danger btn-md"
                                                    variant="danger"
                                                    id={transport.id}
                                                    onClick={onDelete}
                                                >
                                                    <i
                                                        className="fas fa-trash-alt"
                                                        id={transport.id}
                                                    />
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
    // }
}
export default Transport;
