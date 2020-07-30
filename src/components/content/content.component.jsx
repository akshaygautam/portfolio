import React from "react";
import "./content.styles.css";
import { PortfolioList } from "../portfolio-list/portfolio-list.component";
export const Content = ({ portfoliContentList }) => {
  return (
    <div>
      <PortfolioList
        title="Certifications"
        portfoliContentList={portfoliContentList}
      />

      <PortfolioList
        title="Demo projects"
        portfoliContentList={portfoliContentList}
      />
    </div>
  );
};
