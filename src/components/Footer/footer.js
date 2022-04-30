import React from "react";
import Button from "react-bootstrap/Button";

const style = {
  textAlign: "center",
  background: "#2a607c",
  color: "white",
  width: "100%",
  marginTop: "32px",
  padding: "32px",
  //   position: "fixed",
  bottom: "0",
};

export default function Footer() {
  return (
    <div>
      <p style={style}>
        <Button variant="warning" href="https://github.com/Lischus">
          GitHub
        </Button>
        <br></br>
        <Button
          variant="warning"
          href="https://www.linkedin.com/in/martin-corr-3747a3225/"
        >
          LinkedIn
        </Button>
        <br></br>
        <Button
          variant="warning"
          href="https://www.facebook.com/martin.corr.79/"
        >
          Facebook
        </Button>
      </p>
    </div>
  );
}
