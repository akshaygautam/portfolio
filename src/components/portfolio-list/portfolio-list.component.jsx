import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";

export const PortfolioList = ({ title, portfoliContentList }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="portfolio-list">
        {portfoliContentList.map((portfoliContent) => (
          <Portfolio content={portfoliContent} />
        ))}
      </div>
    </div>
  );
};
