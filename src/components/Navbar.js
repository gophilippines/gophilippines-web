import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//MUI
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavbarTop() {
    const [cityList, setCityList] = useState([]);
    useEffect(() => {
        async function fetchCity() {
            const response = await fetch(`/cityList`);
            const cityList = await response.json();
            if (response.ok) {
                setCityList(cityList);
            }
        }
        fetchCity();
    }, []);

    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <Container className="no-gutter">
                <Navbar.Brand href="/">Go Philippines</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown megamenu-li">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#asdasd"
                                id="dropdown01"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                City
                            </a>
                            <div
                                className="dropdown-menu megamenu"
                                aria-labelledby="dropdown01"
                            >
                                <Row>
                                    <Col sm={12}>
                                        <h5>Select City</h5>
                                    </Col>
                                    {cityList &&
                                        cityList.map(city => (
                                            <Col
                                                sm={2}
                                                className="mb-2"
                                                key={city.id}
                                            >
                                                <Link
                                                    to={`/city/${city.id}`}
                                                    className="btn btn-light w-100"
                                                >
                                                    {city.name}
                                                </Link>
                                            </Col>
                                        ))}
                                </Row>
                            </div>
                        </li>
                    </ul>
                </Navbar>
                {/* <nav className="navbar navbar-expand-lg navbar-light">
                    
                    

                    
                </nav> */}
            </Container>
        </Navbar>
    );
}

export default NavbarTop;
