import React, { useState } from "react";
import AboutMe from "../AboutMe/aboutme";
import Projects from "../Projects/projects";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Contact from "../Contact/contact";
import Resume from "../Resume/resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}
