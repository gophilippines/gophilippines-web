import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    updateTransportAction,
    uploadTransportImageAction
} from "../../redux/TransportRedux";
import Sidebar from "../../components/SideNav";
import { Link } from "react-router-dom";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Transport({ match }) {
    // const transportData = useSelector(state => state.transport);

    const [transport, setTransport] = useState({});

    useEffect(
        () => {
            async function fetchItemData() {
                const fetchItem = await fetch(
                    `/transportationById?id=${match.params.id}`
                );
                const item = await fetchItem.json();
                setTransport(item);
            }
            fetchItemData();
        },
        [match]
    );

    const dispatch = useDispatch();

    const updateTransport = transport =>
        dispatch(updateTransportAction(transport));
    const uploadTransportImage = formData =>
        dispatch(uploadTransportImageAction(formData));

    const onChange = event => {
        setTransport({ ...transport, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();

        updateTransport({
            id: transport.id,
            company: transport.company,
            address: transport.address,
            details: transport.details,
            recommended: transport.recommended,
            price: transport.price,
            city_id: transport.city_id
        });
    };
    const handleImageChange = event => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append("file", image);
        uploadTransportImage({
            id: transport.id,
            data: formData
        });
        console.log(transport.id);
        // this.props.uploadImage(formData);
    };
    return (
        <div id="wrapper">
            <Sidebar />
            <div className="page-content-wrapper">
                <h1>Update Transport Page</h1>
                <Row>
                    <Col sm={3}>
                        <img src={transport.imageURL} alt="" width="100%" />
                        <br />
                        <input
                            type="file"
                            id="imageInput"
                            onChange={handleImageChange}
                        />
                    </Col>
                    <Col>
                        <Form onSubmit={onSubmit} className="mt-5">
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">
                                    company
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        company="name"
                                        onChange={onChange}
                                        value={transport.company}
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
                                        value={transport.address}
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
                                        value={transport.details}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="3">
                                    recommended
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        as="select"
                                        name="recommended"
                                        onChange={onChange}
                                        value={transport.recommended}
                                    >
                                        <option
                                            value="true"
                                            className="text-capetalize"
                                        >
                                            true
                                        </option>
                                        <option
                                            value="false"
                                            className="text-capetalize"
                                        >
                                            false
                                        </option>
                                    </Form.Control>
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
                                        value={transport.price}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="text-right">
                                <Link
                                    className="btn btn-secondary btn-md mr-2"
                                    to="/dashboard/transport"
                                >
                                    Cancel
                                </Link>
                                <Button
                                    type="submit"
                                    className="btn btn-primary "
                                >
                                    Update Transport
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Transport;
