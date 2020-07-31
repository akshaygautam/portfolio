import React from "react";
import "./portfolio.styles.css";

export const Portfolio = ({ content }) => {
  return (
    <div className="portfolio-container">
      <a href={content.siteURL} target="_blank" rel="noopner noreferrer">
        <img
          className="img-responsive img-thumbnail"
          alt="monster"
          src={content.imageURL}
        />
      </a>
      <h3 style={{ color: "white", marginTop: "2px" }} className="text-primary">
        {content.displayInfo}
      </h3>
    </div>
  );
};
