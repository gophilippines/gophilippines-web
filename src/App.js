import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/App.css";
//Redux
import { Provider } from "react-redux";
//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/Home";
import cityDetail from "./pages/CityDetail";
import activityDetail from "./pages/ActivityDetail";

//admin
import dashboard from "./users/Dashboard";
import login from "./users/login";
import signup from "./users/signup";
import activity from "./users/Activity/Activity";
import createActivity from "./users/Activity/CreateActivity";
import updateActivity from "./users/Activity/UpdateActivity";
// axios.defaults.baseURL =
//     "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api";

import jwtDecode from "jwt-decode";
import store from "./redux/store";
import { logoutUser } from "./redux/actions/userActions";
import axios from "axios";

const token = window.localStorage.getItem("IdToken");

if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser());
        window.location.href = "/login";
    } else {
        const IdToken = `Bearer: ${token}`;
        localStorage.setItem("IdToken", token);
        axios.defaults.headers.common["Authorization"] = IdToken;
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Switch>
                        <AuthRoute exact path="/" component={home} />
                        <Route exact path="/city/:id" component={cityDetail} />
                        <Route
                            exact
                            path="/activity/:id"
                            component={activityDetail}
                        />

                        <Route exact path="/dashboard" component={dashboard} />

                        <Route
                            exact
                            path="/dashboard/activity"
                            component={activity}
                        />
                        <Route
                            exact
                            path="/dashboard/createActivity"
                            component={createActivity}
                        />
                        <Route
                            exact
                            path="/dashboard/updateActivity/:id"
                            component={updateActivity}
                        />

                        <AuthRoute exact path="/login" component={login} />
                        <AuthRoute exact path="/signup" component={signup} />
                    </Switch>
                    <Footer />
                </Router>
            </Provider>
        );
    }
}

export default App;
