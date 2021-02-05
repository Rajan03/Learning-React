import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  //  Toggle navbar
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Github Users
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={open} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink className="text-white" tag={Link} to="/">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signup">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signin">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
