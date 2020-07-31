import React from "react";
import { UsefulResourceList } from "../../components/useful-resource-list/useful-resource-list.component";
import { Card } from "antd";
import {firestore, convertResourcesSnapshotToList} from '../../firebase/firebase-utils'
export class UsefulResources extends React.Component {
  constructor() {
    super();
    this.state = {
      resourceList: [],
      loading:true
    };
  }
  componentDidMount() {
    const portfolioResources = firestore.collection(
      "portfolio_useful_resources"
    );
    portfolioResources.onSnapshot(async (snapshot) => {
      const resourceList = convertResourcesSnapshotToList(
        snapshot
      );
      this.setState({ loading: false, resourceList });
    });
  }
  render() {
    return (
      <Card>
        <UsefulResourceList loading={this.state.loading} resourceList={this.state.resourceList} />
      </Card>
    );
  }
}
