import React from "react";

//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function StickyFooter() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={3}>
                        <h6 className="mb-3">About</h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </Col>
                    <Col xs={3}>
                        <h6 className="mb-3">Contact</h6>
                        <a href="#simple-list">
                            <h6>
                                <i className="fas fa-envelope mr-2"></i>
                                sample@mail.com
                            </h6>
                        </a>
                        <a href="#simple-list">
                            <h6>
                                <i className="fas fa-phone-alt mr-2"></i>
                                (123) 123-3154
                            </h6>
                        </a>

                        <p>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </Col>
                    <Col xs={3}>
                        <h6 className="mb-3">Terms</h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </Col>
                    <Col xs={3}>
                        <form className="form-inline mb-3">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mr-1"
                                    placeholder="Subscribe"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
