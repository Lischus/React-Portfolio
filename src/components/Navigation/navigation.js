import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul>
        <li>
          <a
            onClick={() => handlePageChange("AboutMe")}
            href="#AboutMe"
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange("Work")}
            href="#Works"
            className={currentPage === "Work" ? "nav-link active" : "nav-link"}
          >
            Works
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange("Contact")}
            href="#Contact"
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            onClick={() => handlePageChange("Resume")}
            href="#Resume"
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
