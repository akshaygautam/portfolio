import React from "react";
import "./content.styles.css";
import { PortfolioList } from "../portfolio-list/portfolio-list.component";
import { Bio } from "../bio/bio.component";
import { Space } from "antd";

export const Content = ({ portfolioCertificationList, bio }) => {
  const renderCertifiacations = () => {
    return portfolioCertificationList && portfolioCertificationList.length > 0 ? (
      <PortfolioList
        title="Credentials"
        portfolioContentList={portfolioCertificationList}
      />
    ) : null;
  };

  return (
    <Space size="middle" orientation="vertical">
      <Bio bio={bio} />
      {portfolioCertificationList?.length > 0 && (
        <div className="content-transition" aria-hidden="true">
          <span>Selected milestones</span>
        </div>
      )}
      {renderCertifiacations()}
    </Space>
  );
};
