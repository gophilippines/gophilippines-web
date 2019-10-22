import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/App.css";
//import jwtDecode from "jwt-decode";
//MUI
import CssBaseline from "@material-ui/core/CssBaseline";

//Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

// Pages
import home from "./pages/home";

//admin
import dashboard from "./users/dashboard";
import login from "./users/login";
import signup from "./users/signup";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CssBaseline />
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/dashboard" component={dashboard} />
                        <Route exact path="/" component={home} />
                        <Route exact path="/login" component={login} />
                        <Route exact path="/signup" component={signup} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
