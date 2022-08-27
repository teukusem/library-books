import React from "react";

function Logout(props) {
  return (
    <>
      <p
        style={{ cursor: "pointer" }}
        className="text-light fs-5"
        onClick={props.onClick}
      >
        Logout
      </p>
    </>
  );
}

export default Logout;
