import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Row, Col, Card, Divider } from "antd";

export const PortfolioList = ({
  title,
  portfolioContentList,
  gradientClassName,
}) => {
  return (
    <Card className={gradientClassName}>
      <Divider orientation="center">
        <h1>{title}</h1>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {portfolioContentList.map((portfolioContent) => (
          <Col className="gutter-row" key={portfolioContent.id} span={6}>
            <Portfolio key={portfolioContent.id} content={portfolioContent} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
