import React from "react";
import "./portfolio.styles.css";

export const Portfolio = ({ content }) => {
  return (
    <div className="portfolio-container">
      <a href={content.siteURL}>
        <img alt="monster" src={content.imageURL} />
      </a>
      <h3>{content.displayInfo}</h3>
    </div>
  );
};
