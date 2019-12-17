import React, { Component } from 'react';
import Sidebar from '../components/SideNav';

class Dashboard extends Component {
	render() {
		return (
			<div id="wrapper">
				<Sidebar />
				<div className="page-content-wrapper">
					{/* <a
                        href="javascript:void(0)"
                        className="btn btn-default"
                        id="menu-toggle"
                    >
                        <span className="glyphicon glyphicon-th-list"></span>test
                    </a> */}
					Dashboard
				</div>
			</div>
		);
	}
}

export default Dashboard;
