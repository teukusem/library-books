import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Button } from "antd";

function Navigation() {
  return (
    <>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button type="primary">Login</Button>
              <Button type="primary">Primary Button</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
