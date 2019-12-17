import React from 'react';
import { Link } from 'react-router-dom';

//className='no-gutter'
function SideBar() {
	return (
		<React.Fragment>
			<div id="sidebar-wrapper">
				<ul className="sidebar-nav  pt-5">
					<li className="nav-item ">
						<Link to="/dashboard" className="nav-link">
							Dashboard
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/dashboard/booking" className="nav-link">
							Bookings
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/dashboard/activity" className="nav-link">
							Activity
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/dashboard/city" className="nav-link">
							City
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/dashboard/transport" className="nav-link">
							Transport
						</Link>
					</li>
					<li className="nav-item ">
						<Link to="/dashboard/Account" className="nav-link">
							Account Settings
						</Link>
					</li>
					<li className="nav-item ">
						<a href="/login" className="nav-link">
							Login
						</a>
					</li>
					<li className="nav-item ">
						<Link to="/signup" className="nav-link">
							signup
						</Link>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}

export default SideBar;
