import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Row, Col, Card, Divider, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";

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
        <Link to={link} className="portfolio-divider-content">
          <div>{title}</div>
        </Link>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {portfolioContentList
          .filter((portfolioContent, idx) => idx < showItems)
          .map((portfolioContent) => (
            <Col className="gutter-row" key={portfolioContent.id} span={6}>
              <Portfolio key={portfolioContent.id} content={portfolioContent} />
            </Col>
          ))}
        <div>
          <Link to={link} className="portfolio-divider-content">
            <Button
              type="ghost"
              shape="round"
              icon={<MoreOutlined />}
              size={"large"}
            >
              Show All
            </Button>
          </Link>
        </div>
      </Row>
    </Card>
  );
};
