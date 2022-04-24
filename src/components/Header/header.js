import React from "react";
import Navigation from "../Navigation/navigation";

const style = {
  background: "#2a607c",
  width: "100%",
  color: "white",
  textAlign: "right",
  listStyleType: "none",
  textDecorationStyle: "none",
  display: "inline-block",
};

const headingStyle = {
  textAlign: "left",
  fontSize: "48px",
};

function Header(props) {
  return (
    <header style={style}>
      <h1 style={headingStyle}>Martin Corr</h1>
      <Navigation
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  );
}

export default Header;
