import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";

export const PortfolioList = ({ title, portfolioContentList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="portfolio-list">
        {portfolioContentList.map((portfolioContent) => (
          <Portfolio content={portfolioContent} />
        ))}
      </div>
    </div>
  );
};
