import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/App.css';
import './assets/Responsive.css';
//Redux
import { Provider } from 'react-redux';
//Components
import Navbar from './components/Navbar';
// import Footer from "./components/Footer";
import AuthRoute from './util/AuthRoute';

// Pages
import home from './pages/Home';
import cityDetail from './pages/CityDetails';
import activityDetail from './pages/ActivityDetails';
import transportDetail from './pages/TransporDetails';

//User Pages
import Account from './users/MyAccount';
import MyBookings from './users/MyBookings';
import MyDashboard from './users/MyDashboard';
import MyReviews from './users/MyReviews';

import login from './users/login';
import signup from './users/Signup';

//admin
import dashboard from './admin/Dashboard';

import activity from './admin/Activity/Activity';
import createActivity from './admin/Activity/CreateActivity';
import updateActivity from './admin/Activity/UpdateActivity';

import city from './admin/City/City';
import createCity from './admin/City/CreateCity';
import updateCity from './admin/City/UpdateCity';

import transport from './admin/Transport/Transport';
import createTransport from './admin/Transport/CreateTransport';
import updateTransport from './admin/Transport/UpdateTransport';

import booking from './admin/Bookings/Booking';

// axios.defaults.baseURL =
//     "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api";

import jwtDecode from 'jwt-decode';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
import axios from 'axios';

const token = window.localStorage.getItem('IdToken');

// if (token) {
// 	const decodedToken = jwtDecode(token);
// 	if (decodedToken.exp * 1000 < Date.now()) {
// 		store.dispatch(logoutUser());
// 		window.location.href = '/login';
// 	} else {
// 		const IdToken = `Bearer: ${token}`;
// 		localStorage.setItem('IdToken', token);
// 		axios.defaults.headers.common['Authorization'] = IdToken;
// 	}
// }

if (token) {
	const decodedToken = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = '/login';
	} else {
		const IdToken = `Bearer: ${token}`;

		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common['Authorization'] = IdToken;
		// store.dispatch(getUserData());
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={home} />
						<Route exact path="/city/:id" component={cityDetail} />
						<Route exact path="/activity/:id" component={activityDetail} />
						<Route exact path="/transport/:id" component={transportDetail} />
						<AuthRoute exact path="/dashboard" component={dashboard} />

						<AuthRoute exact path="/dashboard/activity" component={activity} />
						<AuthRoute exact path="/dashboard/createActivity" component={createActivity} />
						<AuthRoute exact path="/dashboard/updateActivity/:id" component={updateActivity} />

						<AuthRoute exact path="/dashboard/city" component={city} />
						<AuthRoute exact path="/dashboard/createCity" component={createCity} />
						<AuthRoute exact path="/dashboard/updateCity/:id" component={updateCity} />

						<AuthRoute exact path="/dashboard/transport" component={transport} />
						<AuthRoute exact path="/dashboard/createTransport" component={createTransport} />
						<AuthRoute exact path="/dashboard/updateTransport/:id" component={updateTransport} />

						<AuthRoute exact path="/dashboard/booking" component={booking} />

						{/* User pages */}
						<AuthRoute exact path="/dashboard/Account" component={Account} />
						<AuthRoute exact path="/dashboard/MyDashboard" component={MyDashboard} />
						<AuthRoute exact path="/dashboard/MyBookings" component={MyBookings} />
						<AuthRoute exact path="/dashboard/MyReviews" component={MyReviews} />

						<Route exact path="/login" component={login} />
						<Route exact path="/signup" component={signup} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
