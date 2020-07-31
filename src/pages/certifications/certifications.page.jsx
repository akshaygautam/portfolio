import React from "react";
import { PortfolioList } from "../../components/portfolio-list/portfolio-list.component";
import { Card } from "antd";
export class CertificationsPage extends React.Component {
  render() {
    return (
      <Card>
        <PortfolioList
          gradientClassName="certificate-gradient"
          title="Certifications"
          portfolioContentList={this.props.portfolioCertificationList}
          showItems={this.props.portfolioCertificationList.length}
          showMore={false}
        />
      </Card>
    );
  }
}
