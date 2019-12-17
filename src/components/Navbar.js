import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

//MUI
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavbarTop() {
	const userName = window.localStorage.getItem('userName');
	const userImageURL = window.localStorage.getItem('userImage');

	const [ cityList, setCityList ] = useState([]);

	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();

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

	const logOut = () => dispatch(logoutUser());

	const onLogout = (event) => {
		event.preventDefault();
		logOut();
	};

	return (
		<Navbar bg="white" expand="lg" sticky={'top'} className="p-0">
			<Navbar.Brand href="/" className="siteLogo">
				<img src={require('../assets/img/gophlogo.png')} alt="GOPH" width="110" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar className="collapse navbar-collapse pt-0 pb-0" id="navbarSupportedContent">
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
						<div className="dropdown-menu megamenu" aria-labelledby="dropdown01">
							<Row>
								<Col sm={12} className="text-center">
									<h5>Select City</h5>
								</Col>
								{cityList &&
									cityList.map((city) => (
										<Col sm={2} className="mb-2" key={city.id}>
											<Link to={`/city/${city.id}`} className="btn btn-light w-100">
												{city.name}
											</Link>
										</Col>
									))}
							</Row>
						</div>
					</li>

					<li className="nav-item">
						<a href="/" className="nav-link">
							Contact
						</a>
					</li>

					{userData.authenticated === false && (
						<React.Fragment>
							<li className="nav-item">
								<a href="/login" className="nav-link">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a href="/signup" className="nav-link">
									Signup
								</a>
							</li>
						</React.Fragment>
					)}
					{userData.authenticated === true && (
						<React.Fragment>
							<li className="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#asdasd"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{userName}
									<img src={userImageURL} className="nav-user-profile" />
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/dashboard/Account">
										<i class="far fa-smile fa-w-20 " /> Manage My Account
									</Link>
									<Link className="dropdown-item" to="/dashboard/MyDashboard">
										<i class="fas fa-dice-d6 fa-w-20 " /> My Dashboard
									</Link>
									<Link className="dropdown-item" to="/dashboard/MyBookings">
										<i class="far fa-file-alt fa-w-20 " /> My Bookings
									</Link>
									<Link className="dropdown-item" to="/dashboard/MyReviews">
										<i class="far fa-star fa-w-20 " /> My Reviews
									</Link>
									<Link className="dropdown-item" to="/dashboard/account">
										<i class="far fa-heart fa-w-20 " /> My Wish List
									</Link>
									<div class="dropdown-divider" />
									<Button className="dropdown-item" onClick={onLogout} block>
										<i class="fas fa-sign-out-alt fa-w-20 " /> Logout
									</Button>
								</div>
							</li>
							{/* <li className="nav-item ">
								<Button variant="light" onClick={onLogout}>
									logout
								</Button>
							</li> */}
						</React.Fragment>
					)}
				</ul>
			</Navbar>
			{/* <nav className="navbar navbar-expand-lg navbar-light">
                    
                    

                    
                </nav> */}
		</Navbar>
	);
}

export default NavbarTop;
