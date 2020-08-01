import React from "react";
import "./content.styles.css";
import { PortfolioList } from "../portfolio-list/portfolio-list.component";
import { Bio } from "../bio/bio.component";
import { Space } from "antd";
export const Content = ({
  portfolioCertificationList,
  portfolioDemoProjectList,
  bio
}) => {
  const renderCertifiacations = () => {
    return portfolioCertificationList &&
      portfolioCertificationList.length > 0 ? (
      <PortfolioList
        gradientClassName="certificate-gradient"
        title="Certifications"
        portfolioContentList={portfolioCertificationList}
        showItems="3"
        link="/certifications"
        showMore={true}
      />
    ) : null;
  };

  const renderDemoProjectList = () => {
    return portfolioDemoProjectList && portfolioDemoProjectList.length > 0 ? (
      <PortfolioList
        gradientClassName="demo-project-gradient"
        title="Demo Projects"
        portfolioContentList={portfolioDemoProjectList}
        showItems="3"
        link="/demo_projects"
        showMore={true}
      />
    ) : null;
  };
  return (
    <Space size="middle" direction="vertical">
      <Bio
        bio={bio}
      />
      {renderCertifiacations()}
      {renderDemoProjectList()}
    </Space>
  );
};
