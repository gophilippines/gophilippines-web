import React from "react";

//MUI
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//className='no-gutter'
function CallToAction() {
    return (
        <Row>
            <Col md={6}>
                <h3 className="mb-5 mt-5">Lorem Ipsum is simply dummy</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </Col>
            <Col md={6}>
                <img
                    alt=""
                    src={require("../assets/img/1.jpg")}
                    title="Contemplative Reptile"
                    width="100%"
                />
            </Col>
        </Row>
    );
}

export default CallToAction;
