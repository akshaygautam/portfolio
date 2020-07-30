import React from "react";
import "./portfolio.styles.css";

export const Portfolio = ({ content }) => {
  return (
    <div className="portfolio-container">
      <a href={content.siteURL} target="_blank" rel="noopner noreferrer">
        <img alt="monster" src={content.imageURL} />
      </a>
      <h3>{content.displayInfo}</h3>
    </div>
  );
};
