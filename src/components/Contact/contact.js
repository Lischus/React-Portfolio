import React from "react";

const styles = {
  textAlign: "center",
};

function Contact() {
  return (
    <div id="contact" style={styles}>
      <h2>Contact Me!</h2>
      <div>
        <a href="mailto:martinjcorr2@gmail.com">Email</a>
        <br></br>
        <a target="blank" href="https://github.com/Lischus">
          GitHub
        </a>
        <br></br>
        <a
          target="blank"
          href="https://www.linkedin.com/in/martin-corr-3747a3225/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
