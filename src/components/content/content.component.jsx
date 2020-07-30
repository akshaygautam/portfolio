import React from "react";
import "./content.styles.css";
import { PortfolioList } from "../portfolio-list/portfolio-list.component";
export const Content = ({
  portfolioCertificationList,
  portfolioDemoProjectList,
}) => {
  return (
    <div>
      {portfolioCertificationList && portfolioCertificationList.length > 0 ? (
        <PortfolioList
          title="Certifications"
          portfolioContentList={portfolioCertificationList}
        />
      ) : null}

      {portfolioCertificationList && portfolioDemoProjectList.length > 0 ? (
        <PortfolioList
          title="Demo projects"
          portfolioContentList={portfolioDemoProjectList}
        />
      ) : null}
    </div>
  );
};
