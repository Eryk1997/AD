import { Link } from "react-router-dom";
import React from "react";
import userService from "../Service/UserService";

function Navbar() {
  if (!localStorage.getItem("login")) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link text-warning" to="/">
                  Login <span class="sr-only"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <Link className="nav-link text-warning" to="/task">
                Task <span class="sr-only"></span>
              </Link>
              <li className="nav-item active">
                <button className="btn btn-outline-secondary text-warning" onClick={userService.logout}>Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
