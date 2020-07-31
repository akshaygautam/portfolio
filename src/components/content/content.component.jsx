import React from "react";
import "./content.styles.css";
import { PortfolioList } from "../portfolio-list/portfolio-list.component";
import { Bio } from "../bio/bio.component";
import { Card, Space } from "antd";
export const Content = ({
  portfolioCertificationList,
  portfolioDemoProjectList,
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
    <Card>
      <Space size="middle" direction="vertical">
        <Bio
          bio={{
            imageURL:
              "https://firebasestorage.googleapis.com/v0/b/crown-db-a0e18.appspot.com/o/portfolio%2Fme%2FIMG_1255.jpg?alt=media&token=93369c81-25d4-4571-bb9c-81d4f209a711",
            content: "Delhi Based Software Engineer",
            subIntro: "Developer, Gamer, Singer, Geek",
            intro: "I'm Akshay Gautam",
          }}
        />
        {renderCertifiacations()}
        {renderDemoProjectList()}
      </Space>
    </Card>
  );
};
