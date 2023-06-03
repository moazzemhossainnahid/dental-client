import React from "react";
import "./Header.css";
import logo from "../../../Images/Logo/logo-sm.png";
import { NavHashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAll from "../../../hooks/useAll";
import Swal from "sweetalert2";

const Header = () => {
  const { firebase } = useAll();
  const { user, logOut } = firebase;

  const handleLogOut = () => {
    //log out confirmation checking popup
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(true);
      }
    });
  };

  const activeStyle = {
    color: "#07A5E2",
    fontWeight: 500,
  };
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavHashLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link activeStyle={activeStyle} as={NavHashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link activeStyle={activeStyle} as={NavHashLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link
                activeStyle={activeStyle}
                as={NavHashLink}
                to="/services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                activeStyle={activeStyle}
                as={NavHashLink}
                to="/dentists"
              >
                Dentist
              </Nav.Link>

              {/* -------------------------------------------------------------------------- */
              /*                      CONDITION RENDERING based on USER                     */
              /* -------------------------------------------------------------------------- */}
              {user ? (
                <>
                  <Nav.Link>
                    <i class="fas fa-user me-2"></i>
                    {user.displayName?.split(" ")[0]}
                  </Nav.Link>
                  <button
                    className="btn-signout nav-link"
                    onClick={handleLogOut}
                  >
                    <i class="fas fa-sign-out-alt"></i> Sign Out
                  </button>
                </>
              ) : (
                <Nav.Link
                  activeStyle={activeStyle}
                  as={NavHashLink}
                  to="/form/signin"
                >
                  Sign In <i class="fas fa-sign-in-alt"></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
