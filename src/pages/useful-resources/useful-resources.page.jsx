import React from "react";
import { UsefulResourceList } from "../../components/useful-resource-list/useful-resource-list.component";
import { Card } from "antd";
export class UsefulResources extends React.Component {
  constructor() {
    super();
    this.state = {
      resourceList: [
        { id: 1, title: "Test1", imgURL: "", sourceURL: "google.com" },
        { id: 2, title: "Test1", imgURL: "", sourceURL: "google.com" },
        { id: 3, title: "Test1", imgURL: "", sourceURL: "google.com" },
        { id: 4, title: "Test1", imgURL: "", sourceURL: "google.com" },
      ],
    };
  }
  render() {
    return (
      <Card>
        <UsefulResourceList resourceList={this.state.resourceList} />
      </Card>
    );
  }
}
