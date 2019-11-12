import React from "react";
import { Link } from "react-router-dom";

//className='no-gutter'
function SideBar() {
    return (
        <React.Fragment>
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="nav-item ">
                        <Link to="/dashboard" className="nav-link">
                            Dashboard
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
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
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
