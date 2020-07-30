import React from "react";
import "./portfolio.styles.css";

export const Portfolio = ({ content }) => {
  return (
    <div className="portfolio-container">
      <a href={content.siteURL} target="_blank" rel="noopner noreferrer">
        <img className="portfolio-image" alt="monster" src={content.imageURL} />
      </a>
      <div className="portfolio-display-info">{content.displayInfo}</div>
    </div>
  );
};
