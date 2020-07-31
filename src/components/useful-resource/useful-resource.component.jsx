import React from "react";
import "./useful-resource.styles.css";
import { Card } from "antd";

export const UsefulResource = ({ resource }) => {
  return (
    <Card title={resource.title}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 col-xs-4">
            <img src={resource.imgSource} alt={resource.title} />
          </div>
          <div className="col-md-8 col-xs-4">
            <a
              href={resource.sourceURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a>{resource.sourceURL}</a>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
