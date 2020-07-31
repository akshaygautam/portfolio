import React from "react";
import "./useful-resource-list.styles.css";
import { Card, Divider, Pagination } from "antd";
import { UsefulResource } from "../useful-resource/useful-resource.component";

export const UsefulResourceList = ({ resourceList }) => {
  return (
    <Card className="resource-list">
      <Divider orientation="center">
        <h1>Resources</h1>
      </Divider>
      <Pagination
        itemRender={() => {
          resourceList &&
            resourceList.map((resource) => {
              return <UsefulResource resource={resource} />;
            });
        }}
        responsive={true}
        size="small"
        total={resourceList.resourceList}
        showSizeChanger
        showQuickJumper
      />
    </Card>
  );
};
