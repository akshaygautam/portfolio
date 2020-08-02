import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Card, Divider, Button } from "antd";
import { Link } from "react-router-dom";
import { SmallDashOutlined } from "@ant-design/icons";

export const PortfolioList = ({
  title,
  portfolioContentList,
  gradientClassName,
  showItems,
  link,
  showMore,
}) => {
  return (
    <Card className={gradientClassName}>
      <div className="fluid-container">
        <Divider orientation="center">
          <div className="portfolio-divider-content">{title}</div>
        </Divider>
        <div className="row">
          {portfolioContentList
            .filter((portfolioContent, idx) => idx < showItems)
            .map((portfolioContent) => (
              <div className="col-md-4 col-xs-12" key={portfolioContent.id}>
                <Portfolio
                  key={portfolioContent.id}
                  content={portfolioContent}
                />
              </div>
            ))}
        </div>
        {showMore && portfolioContentList.length > 3 ? (
          <div className="row">
            <div className="col-md-* col-xs-*">
              <Link to={link} className="portfolio-Col span={6}ider-content">
                <Button
                  style={{ color: "white" }}
                  type="ghost"
                  shape="round"
                  icon={<SmallDashOutlined />}
                  size={"large"}
                >
                  Show All
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
};
