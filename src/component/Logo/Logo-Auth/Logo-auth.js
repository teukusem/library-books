import React from "react";
import { Col } from "react-bootstrap";

function LogoAuth(props) {
  return (
    <>
      <Col
        lg={6}
        className="authPage d-flex flex-column align-items-center justify-content-center"
      >
        <div className="margin-logo">
          <img src={props.logo} alt="logo.png" />
          <p className="text-light text-center fw-bold fs-3">{props.caption}</p>
        </div>
      </Col>
    </>
  );
}

export default LogoAuth;
