import React from "react";
import { PortfolioList } from "../../components/portfolio-list/portfolio-list.component";
export class DemoProjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PortfolioList
        gradientClassName="certificate-gradient"
        title="Demo Projects"
        portfolioContentList={this.props.portfolioDemoProjectList}
        showItems={this.props.portfolioDemoProjectList.length}
      />
    );
  }
}
