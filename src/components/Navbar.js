import React from "react";
import { Link } from "react-router-dom";

//MUI
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

//className='no-gutter'
function NavbarTop() {
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
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Links</h5>
                                        <a
                                            className="dropdown-item"
                                            href="#asdasd"
                                        >
                                            Another action
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>More Links</h5>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Paragraph</h5>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <h5>Image</h5>
                                        <img
                                            src="https://source.unsplash.com/250x150/?sig=4"
                                            alt="..."
                                            width=" 100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <Link
                                variant="button"
                                color="textPrimary"
                                to="/login"
                                className="nav-link"
                            >
                                Login
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                variant="button"
                                color="textPrimary"
                                to="/signup"
                                className="nav-link"
                            >
                                signup
                            </Link>
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
