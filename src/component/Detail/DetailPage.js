import React from "react";
import { Col } from "react-bootstrap";

function DetailPage(props) {
  return (
    <>
      <Col
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <img src={props.image} alt="book.png" />
      </Col>
      <Col className="mt-5 pt-5 text-light">
        <p className="fw-bold">
          Title : <span>{props.title}</span>
        </p>
        <p className="fw-bold">
          Publisher : <span>{props.publisher}</span>
        </p>
        <p className="fw-bold">Description :</p>
        <span>{props.description}</span>
      </Col>
    </>
  );
}

export default DetailPage;
