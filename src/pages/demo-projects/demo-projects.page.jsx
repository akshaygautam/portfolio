import React from "react";
import { PortfolioList } from "../../components/portfolio-list/portfolio-list.component";
import { Card } from "antd";
export class DemoProjectsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <PortfolioList
          gradientClassName="certificate-gradient"
          title="Demo Projects"
          portfolioContentList={this.props.portfolioDemoProjectList}
          showItems={this.props.portfolioDemoProjectList.length}
          showMore={false}
        />
      </Card>
    );
  }
}
