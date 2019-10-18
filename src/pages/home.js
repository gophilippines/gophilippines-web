import React, { Component } from 'react'
//import app from "../base";
//Components
import Banner from '../components/Banner';
import Topcity from '../components/Topcity';
import TopActivity from '../components/Topactivity';
import CallToAction from '../components/CallToAction';
import Gridgallery from '../components/Gridgallery';
import Partnership from '../components/Partnership';

//MUI
import Container from '@material-ui/core/Container';



class home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Container className="container">
                    <Topcity/>
                    <TopActivity/>
                </Container>

                <div className="bg-gray">
                    <Container className="container">
                        <CallToAction/>
                        <Gridgallery/>
                    </Container>
                </div>

                <Container className="container">
                    <Partnership/>
                </Container>
            </div>
        )
    }
}

export default home
