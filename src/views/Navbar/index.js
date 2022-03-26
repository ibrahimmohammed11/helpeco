import React, { Fragment } from "react";
import {
  faArrowRightToBracket,
  faUserPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            La Collection
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mtable">
                  Mtable
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/slider">
                  Slider
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mucore">
                  mucore
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <button className="btn btn-outline-dark" type="submit">
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                  &nbsp; Login
                </button>
              </li>
              <li className="nav-item  me-2">
                <button className="btn btn-outline-dark" type="submit">
                  <FontAwesomeIcon icon={faUserPlus} />
                  &nbsp; Register
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark" type="submit">
                  <FontAwesomeIcon icon={faCartShopping} />
                  &nbsp; Cart (0)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
