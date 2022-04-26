import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="header-links">
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
            onClick={() => handlePageChange("Projects")}
            href="#Projects"
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
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
