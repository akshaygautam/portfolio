import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Row, Col, Card, Divider } from "antd";
import { Link } from "react-router-dom";

export const PortfolioList = ({
  title,
  portfolioContentList,
  gradientClassName,
  showItems,
  link,
}) => {
  return (
    <Card className={gradientClassName}>
      <Divider orientation="center">
      <Link to={link}><h1>{title}</h1></Link>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {portfolioContentList
          .filter((portfolioContent, idx) => idx < showItems)
          .map((portfolioContent) => (
            <Col className="gutter-row" key={portfolioContent.id} span={6}>
              <Portfolio key={portfolioContent.id} content={portfolioContent} />
            </Col>
          ))}
      </Row>
    </Card>
  );
};
