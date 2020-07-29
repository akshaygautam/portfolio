import React from "react";
import { Menu } from "antd";
import "./header.styles.scss";
import SocialConnect from "../social-connect/social-connect.component";
const CustomHeader = function ({ style }) {
  return (
    <div>
      <div style={{ fontSize: "35px" }}>
        <SocialConnect />
      </div>
    </div>
  );
};

export default CustomHeader;
