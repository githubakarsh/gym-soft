import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { Link, useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();

  const onClickNavOptions = (path) => {
    navigate(path);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Gym soft</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  onClick={() => onClickNavOptions("home")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => onClickNavOptions("admin")}>Admin</Nav.Link>
            <Nav.Link onClick={() => onClickNavOptions("profile")}>Profile</Nav.Link>
            <Nav.Link onClick={() => onClickNavOptions("diet-planner")}>Diet Planner</Nav.Link>
            <Nav.Link onClick={() => onClickNavOptions("day-planner")}>Day Planner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
