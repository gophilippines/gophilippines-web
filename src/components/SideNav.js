import React from "react";
import { Link } from "react-router-dom";

//className='no-gutter'
function SideBar() {
    return (
        <React.Fragment>
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/activity">Activity</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/city">City</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default SideBar;
