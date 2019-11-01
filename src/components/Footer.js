import React from "react";

//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//MUI Icons
// import MailIcon from "@material-ui/icons/Mail";
// import PhoneIcon from "@material-ui/icons/Phone";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";

export default function StickyFooter() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xs={3}>
                        <h6 className="mb-3">About</h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </Col>
                    <Col xs={3}>
                        <h6 className="mb-3">Contact</h6>
                        <a href="#simple-list">
                            <h5>
                                {/* <MailIcon className="mr-2" /> sample@mail.com */}
                            </h5>
                        </a>
                        <a href="#simple-list">
                            <h5>
                                {/* <PhoneIcon className="mr-2" /> (123) 123-3154 */}
                            </h5>
                        </a>

                        <p>
                            {/* <LocationOnIcon className="mr-2" /> */}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry
                        </p>
                    </Col>
                    <Col xs={3}>
                        <h6 className="mb-3">Terms</h6>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
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
                                {/* <FacebookIcon /> */}
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                {/* <TwitterIcon /> */}
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                {/* <InstagramIcon /> */}
                            </a>
                            <a
                                href="#asd"
                                className="btn btn-transparent text-white"
                                target="_blank"
                            >
                                {/* <MailIcon /> */}
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
