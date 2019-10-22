import React, { Component } from "react";
//import app from "../base";
//Components
import Banner from "../components/Layout/Banner";
import Topcity from "../components/Layout/Topcity";
import TopActivity from "../components/Layout/Topactivity";
import CallToAction from "../components/Layout/CallToAction";
import Gridgallery from "../components/Layout/Gridgallery";
import Partnership from "../components/Layout/Partnership";

//MUI
import Container from "@material-ui/core/Container";

class home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Container className="container">
                    <Topcity />
                    <TopActivity />
                </Container>

                <div className="bg-gray">
                    <Container className="container">
                        <CallToAction />
                        <Gridgallery />
                    </Container>
                </div>

                <Container className="container">
                    <Partnership />
                </Container>
            </div>
        );
    }
}

export default home;
