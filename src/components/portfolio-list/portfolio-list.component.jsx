import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Row, Col, Card } from "antd";

export const PortfolioList = ({
  title,
  portfolioContentList,
  gradientClassName,
}) => {
  return (
    <div className={gradientClassName}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {portfolioContentList.map((portfolioContent) => (
          <Col className="gutter-row" key={portfolioContent.id} span={6}>
            <Portfolio key={portfolioContent.id} content={portfolioContent} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
