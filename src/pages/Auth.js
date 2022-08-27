import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
// Assets Image
import Logo from "../assets/book.png";
// Component
import { Login, Register, LogoAuth } from "../component";

function Auth() {
  const title = "Auth";
  document.title = "Library Books | " + title;

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-wrapper">
      <Container>
        <Row>
          <LogoAuth logo={Logo} caption={"Book is a window of the world"} />
          <Col lg={6}>
            {isRegister ? (
              <Register setIsRegister={setIsRegister} />
            ) : (
              <Login setIsRegister={setIsRegister} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Auth;
