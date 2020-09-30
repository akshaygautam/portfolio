import React from "react";
import { Portfolio } from "./../portfolio/portfolio.component";
import "./portfolio-list.styles.css";
import { Card, Divider, Row, Col} from "antd";

export const PortfolioList = ({
  title,
  portfolioContentList,
  gradientClassName,
  showItems,
}) => {
  return (
    <Card className={gradientClassName}>
        <Divider orientation="center">
          <div className="portfolio-divider-content">{title}</div>
        </Divider>
        <Row gutter={[{xs: 4, sm: 4, md: 24, lg: 32},{xs: 4, sm: 4, md: 24, lg: 32}]}>
          {portfolioContentList
            .map((portfolioContent) => (
            <Col key={portfolioContent.id} className="gutter-row" xs= {16} sm={16} md={6} lg={6} xl={6} xxl={6}>
                <Portfolio
                  key={portfolioContent.id}
                  content={portfolioContent}
                />
                </Col>
            ))}
         </Row>
    </Card>
  );
};
