import React from "react";
import { UsefulResourceList } from "../../components/useful-resource-list/useful-resource-list.component";
import { Card } from "antd";
import { getResources } from "../../data-stores/data-store-master-util";
export class UsefulResources extends React.Component {
  constructor() {
    super();
    this.state = {
      resourceList: [],
      loading: true,
    };
  }
  componentDidMount() {
    const resourceList = getResources();
    this.setState({ resourceList, loading: false });
  }
  render() {
    return (
      <Card>
        <UsefulResourceList
          loading={this.state.loading}
          resourceList={this.state.resourceList}
        />
      </Card>
    );
  }
}
