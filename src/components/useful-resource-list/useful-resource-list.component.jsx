import React from "react";
import "./useful-resource-list.styles.css";
import { Card, Divider } from "antd";
import { Table } from "antd";

const columns = [
  {
    title: "Resource Title",
    dataIndex: "title",
  },
  {
    title: "Resource Description",
    dataIndex: "desc",
    responsive: ["md"],
  },
  {
    title: "Resource Source",
    dataIndex: "sourceName",
    render: (text, record) => (
      <a href={record.sourceURL} target="_blank" rel="noopner noreferrer">
        {text}
      </a>
    ),
  },
  {
    title: "Resource Category",
    dataIndex: "category",
    responsive: ["lg"],
  },
  {
    title: "Added On",
    dataIndex: "created",
    responsive: ["lg"],
  },
];

export const UsefulResourceList = ({ resourceList, loading }) => {
  return (
    <Card className="resource-list" loading={loading}>
      <Divider orientation="center">
        <h1>Resources</h1>
      </Divider>
      <Card>
        <Table
          loading={loading}
          columns={columns}
          dataSource={resourceList}
          bordered
        />
      </Card>
    </Card>
  );
};
