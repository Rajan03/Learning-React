import React from "react";
import "./css/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="home-side-bar">
        <div class="home-logo">
          <h3>Rajan Verma</h3>
        </div>
        <div class="home-navigation">
          <ul>
            <li>
              <span>
                <NavLink to="/" activeClassName="active_class">
                  <i class="fa fa-home"></i> Home
                </NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/about">
                  <i class="fa fa-user"></i> About
                </NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/projects">
                  <i class="fa fa-briefcase"></i> Portfolio
                </NavLink>
              </span>
            </li>
            <li>
              <span>
                <NavLink to="/add-project">
                  <i class="fa fa-envelope"></i> Add Project
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <small>&copy; Rajan Verma</small>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
