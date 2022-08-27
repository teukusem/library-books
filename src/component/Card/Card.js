import React from "react";
import { Card } from "react-bootstrap";

function CardComponent(props) {
  return (
    <>
      <Card
        onClick={props.onClick}
        style={{
          height: "240px",
          width: "10rem",
          border: "none",
          boxShadow: "0px 6px 10px rgb(0 0 0 / 10%)",
          borderRadius: "12px",
        }}
      >
        <Card.Body className="text-center">
          <div className="fs-6 fw-bold d-flex justify-content-center">
            <img src={props.image} alt="book-logo.png" height="150px" />
          </div>
          <span className="fw-bold text-center mt-3 ">{props.title}...</span>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComponent;
