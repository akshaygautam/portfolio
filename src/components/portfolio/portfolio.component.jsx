import React from "react";
import "./portfolio.styles.css";
const style = { background: "#0092ff", padding: "8px 0" };

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
