import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Form, Button, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  let location = useLocation();

  return (
    <Navbar bg="success" expand="lg" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <Link class="text-warning" to={"/"}>
            <p class="text-warning">NOTE TAKING</p>{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                <p class="text-warning">HOME</p>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                <p class="text-warning">ABOUT</p>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/notecards" ? "active" : ""
                }`}
                aria-current="page"
                to="/notecards"
              >
                <p class="text-warning">NOTES</p>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                className={`nav-link ${
                  location.pathname === "/updatepassword" ? "active" : ""
                }`}
                aria-current="page"
                to="/updatepassword"
              >
                <p class="text-warning">UPDATEPASSWORD</p>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            {!localStorage.getItem("authToken") ? (
              <Form className="d-flex" role="search">
                <Link
                  className="btn btn-warning mx-1"
                  to="/login"
                  role="button"
                >
                  LOG IN
                </Link>
                <Link
                  className="btn btn-warning mx-1"
                  to="/signup"
                  role="button"
                >
                  SIGN UP
                </Link>
              </Form>
            ) : (
              <Button onClick={handleLogout} className="btn btn-primary mx-1">
                LOG OUT
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
