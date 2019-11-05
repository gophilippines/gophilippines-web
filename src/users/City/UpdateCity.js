import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCityAction } from "../../redux/CityRedux";
import Sidebar from "../../components/SideNav";
import { Link } from "react-router-dom";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function City({ match }) {
    // const cityData = useSelector(state => state.city);

    const [city, setCity] = useState({});

    useEffect(() => {
        async function fetchItemData() {
            const fetchItem = await fetch(`/cityById?id=${match.params.id}`);
            const item = await fetchItem.json();
            setCity(item);
        }
        fetchItemData();
    }, [match]);

    const dispatch = useDispatch();

    const updateCity = city => dispatch(updateCityAction(city));

    const onChange = event => {
        setCity({ ...city, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();

        updateCity({
            id: city.id,
            name: city.name,
            details: city.details,
            recommended: city.recommended,
            location: city.location
        });
    };

    return (
        <div id="wrapper">
            <Sidebar />
            <div className="page-content-wrapper">
                <h1>Update City Page</h1>
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
                                        value={city.name}
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
                                        value={city.details}
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
                                        value={city.recommended}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm="3">
                                    location
                                </Form.Label>
                                <Col>
                                    <Form.Control
                                        name="location"
                                        onChange={onChange}
                                        value={city.location}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="text-right">
                                <Link
                                    className="btn btn-secondary btn-md mr-2"
                                    to="/dashboard/city"
                                >
                                    Cancel
                                </Link>
                                <Button
                                    type="submit"
                                    className="btn btn-primary "
                                >
                                    Update City
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default City;
