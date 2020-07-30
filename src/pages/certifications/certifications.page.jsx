import React from "react";
import { PortfolioList } from "../../components/portfolio-list/portfolio-list.component";
export class CertificationsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PortfolioList
        gradientClassName="certificate-gradient"
        title="Certifications"
        portfolioContentList={this.props.portfolioCertificationList}
        showItems={this.props.portfolioCertificationList.length}
      />
    );
  }
}
