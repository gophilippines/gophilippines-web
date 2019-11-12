import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ItemList from "../components/ItemList";
import ActivitySideNav from "../components/FilterNav";
import Pagination from "../components/Pagination";

//MUI
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

export default function CityDetail({ match }) {
    const [key, setKey] = useState("Activities");

    //Activity options
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    //Transport options
    const [loadingTransport, setLoadingTransport] = useState(false);
    const [currentPageTransport, setCurrentPageTransport] = useState(1);
    const [transportPerPage] = useState(6);

    const [activity, setActivity] = useState([]);
    const [transport, setTransport] = useState([]);
    const [item, setItem] = useState({});

    useEffect(
        () => {
            async function fetchItemData() {
                const response = await fetch(`/cityById?id=${match.params.id}`);
                const item = await response.json();
                if (response.ok) {
                    setItem(item);
                }
            }
            fetchItemData();
        },
        [match]
    );

    useEffect(
        () => {
            async function fetchActivity() {
                setLoading(true);
                const response = await fetch(
                    `/activityByCityId?id=${match.params.id}`
                );
                const activity = await response.json();
                if (response.ok) {
                    setActivity(activity);
                }
                setLoading(false);
            }
            fetchActivity();
        },
        [match]
    );

    useEffect(
        () => {
            async function fetchTransport() {
                setLoadingTransport(true);
                const response = await fetch(
                    `/transportationByCityId?id=${match.params.id}`
                );
                const transport = await response.json();
                if (response.ok) {
                    setTransport(transport);
                }
                setLoadingTransport(false);
            }
            fetchTransport();
        },
        [match]
    );
    // Pagination for Activity
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = activity.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Pagination for Transport
    // Get current posts
    const indexOfLastTransport = currentPageTransport * transportPerPage;
    const indexOfFirstTransport = indexOfLastTransport - transportPerPage;
    const currentTransport = transport.slice(
        indexOfFirstTransport,
        indexOfLastTransport
    );
    // Change page
    const paginateTransport = pageNumber => setCurrentPageTransport(pageNumber);

    return (
        <React.Fragment>
            <div
                className="jumbotron jumbotron-fluid m_bg"
                style={{
                    backgroundImage: "url(" + item.imageURL + ")"
                }}
            >
                <div className="container text-center">
                    <h1 className="display-4 mt-5 mb-5 font-weight-500 text-white">
                        {item.name}
                    </h1>
                </div>
            </div>

            <Container>
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="Activities"
                    activeKey={key}
                    onSelect={k => setKey(k)}
                >
                    <Nav className="row text-center custom-tabs mb-5">
                        <Nav.Link
                            eventKey="Activities"
                            className="col p-5"
                            style={{
                                backgroundImage: "url()"
                            }}
                        >
                            <h5 className="text-uppercase">
                                Activities & Experiences
                            </h5>
                        </Nav.Link>
                        <Nav.Link eventKey="Tours" className="col p-5">
                            <h5 className="text-uppercase">
                                Tours & Sightseeing
                            </h5>
                        </Nav.Link>
                        <Nav.Link eventKey="Transport" className="col p-5">
                            <h5 className="text-uppercase">
                                Transport & Travel Services
                            </h5>
                        </Nav.Link>
                    </Nav>
                    <hr />
                    <Tab.Content>
                        <Tab.Pane eventKey="Activities">
                            <Row>
                                <Col xs={3} className="border-right">
                                    <ActivitySideNav />
                                </Col>
                                <Col>
                                    <h4 className="mb-3">
                                        {/* Top things to do in {item.name} */}
                                        {activity.length} Activities found
                                    </h4>
                                    <ItemList
                                        items={currentPosts}
                                        loading={loading}
                                        itemType={"activity"}
                                    />
                                    <Pagination
                                        itemPerPage={postsPerPage}
                                        totalItems={activity.length}
                                        paginate={paginate}
                                    />
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Tours" />
                        <Tab.Pane eventKey="Transport">
                            <Row>
                                <Col xs={3} className="border-right">
                                    <ActivitySideNav />
                                </Col>
                                <Col>
                                    <h4 className="mb-3">
                                        {/* Top things to do in {item.name} */}
                                        {transport.length} Transportation found
                                    </h4>
                                    <ItemList
                                        items={currentTransport}
                                        loading={loadingTransport}
                                        itemType={"transport"}
                                    />
                                    <Pagination
                                        itemPerPage={transportPerPage}
                                        totalItems={transport.length}
                                        paginate={paginateTransport}
                                    />
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
            {/* <Container>
                <Row>
                    <Col xs={3}></Col>
                    <Col>
                        <h4 className="mb-3 text-center">
                            Top things to do in {item.name}
                        </h4>
                        <ActivityList activityID={item.id} />
                    </Col>
                </Row>
            </Container> */}
            <div className="highlight pt-5 pb-5">
                <Container>
                    <Row>
                        <Col xs={9}>
                            <h4>{item.name}</h4>
                            <p>{item.details}</p>
                        </Col>
                        <Col xs={3}>{JSON.stringify(item.location)}</Col>
                    </Row>
                </Container>
            </div>
            <Container className="pt-5 pb-5">
                <h4>Discover other City</h4>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
