import React, { useState } from "react";
// import { Link } from "react-router-dom";
//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CityDetail({ itemData }) {
    const [count, setCount] = useState(1);
    const [isEnable, setButton] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    function incrementCount(event, count) {
        const result = count + 1;
        if (result < 0) {
            setCount(result);
        } else {
            setCount(result);
            setButton(false);
        }
    }
    function decrementCount(event, count) {
        const result = count - 1;
        if (result > 0) {
            setCount(result);
        } else {
            setCount(result);
            setButton(true);
        }
    }

    const [countChild, setCountChild] = useState(1);
    const [isEnableChild, setButtonChild] = useState(false);

    function incrementCountChild(event, countChild) {
        const result = countChild + 1;
        if (result < 0) {
            setCountChild(result);
        } else {
            setCountChild(result);
            setButtonChild(false);
        }
    }
    function decrementCountChild(event, countChild) {
        const result = countChild - 1;
        if (result > 0) {
            setCountChild(result);
        } else {
            setCountChild(result);
            setButtonChild(true);
        }
    }

    function handleSubmitBook(event) {
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <Card>
                <Card.Header className="bg-dark text-white">
                    <h3 className="m-0">₱ {itemData.price}</h3>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmitBook}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="12">
                                Select Date
                            </Form.Label>
                            <Col>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    className="form-control"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column sm="4">
                                Name
                            </Form.Label> */}
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column sm="4">
                                Email
                            </Form.Label> */}
                            <Col>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column sm="4">
                                Contact No.
                            </Form.Label> */}
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Contact No."
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Package options</Form.Label>{" "}
                            <br />
                            <ButtonGroup toggle className="mt-3">
                                <ToggleButton
                                    type="radio"
                                    name="radio"
                                    defaultChecked
                                    value="1"
                                >
                                    Active
                                </ToggleButton>
                                <ToggleButton
                                    type="radio"
                                    name="radio"
                                    value="2"
                                >
                                    Radio
                                </ToggleButton>
                                <ToggleButton
                                    type="radio"
                                    name="radio"
                                    value="3"
                                >
                                    Radio
                                </ToggleButton>
                            </ButtonGroup>
                        </Form.Group>

                        <Form.Group as={Row} className="text-center">
                            <Col>
                                <Form.Label column>Adult</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Button
                                            variant="outline-secondary"
                                            type="button"
                                            onClick={event =>
                                                decrementCount(event, count)
                                            }
                                            disabled={isEnable}
                                        >
                                            -
                                        </Button>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        name="Adult"
                                        value={count}
                                        className="text-center"
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            variant="outline-secondary"
                                            type="button"
                                            onClick={event =>
                                                incrementCount(event, count)
                                            }
                                        >
                                            +
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Label column>Child(3-4)</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <Button
                                            variant="outline-secondary"
                                            type="button"
                                            onClick={event =>
                                                decrementCountChild(
                                                    event,
                                                    countChild
                                                )
                                            }
                                            disabled={isEnableChild}
                                        >
                                            -
                                        </Button>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        name="Adult"
                                        value={countChild}
                                        className="text-center"
                                    />
                                    <InputGroup.Append>
                                        <Button
                                            variant="outline-secondary"
                                            type="button"
                                            onClick={event =>
                                                incrementCountChild(
                                                    event,
                                                    countChild
                                                )
                                            }
                                        >
                                            +
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="6">
                                Total price
                            </Form.Label>

                            <Col className="text-right">
                                <h4 className="text-success mt-1">₱ 3000</h4>
                                <Form.Control name="total" hidden />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Button
                                type="submit"
                                variant="danger"
                                className="w-100"
                            >
                                Book Now!
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
