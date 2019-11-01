import React from "react";

//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Partnership() {
    return (
        <React.Fragment>
            <Row className="text-center">
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/new_bbl_logo_white.png")}
                        width="100"
                    />
                </Col>
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/BUZZExp_Logo-1024x523.png")}
                        width="100"
                    />
                </Col>
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/new_bbl_logo_white.png")}
                        width="100"
                    />
                </Col>
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/BUZZExp_Logo-1024x523.png")}
                        width="100"
                    />
                </Col>
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/new_bbl_logo_white.png")}
                        width="100"
                    />
                </Col>
                <Col xs={2}>
                    <img
                        alt=""
                        src={require("../assets/img/bbl-divers.jpg")}
                        width="50"
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Partnership;
