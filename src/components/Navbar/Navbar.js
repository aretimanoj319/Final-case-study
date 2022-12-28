import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-light bg-primary">
        <Link className="navbar-brand h1 linkstylefornav" to="/">
          Top Jobs
        </Link>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link to="/home" className="h5 linkstylefornav">
              HOME
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contactus" className="h5 linkstylefornav">
              CONTACT US
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/jobs" className="h5 m-2 linkstylefornav">
              JOBS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
