import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

function Back(props) {
  return (
    <>
      <div
        className="text-light pt-5"
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
      >
        <AiOutlineLeft />
        <span className="ms-2">Back to home</span>
      </div>
    </>
  );
}

export default Back;
