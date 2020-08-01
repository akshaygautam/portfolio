import React from "react";
import { Tooltip } from "antd";
import {
  MailOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export const SocialBand = ({
  text,
  textStyle,
  iconStyle,
  tooltipPlacement,
}) => {
  return (
    <div className="row" style={{ marginLeft: "10px" }}>
      <div className="col-md-* col-xs-*">
        <p style={textStyle}>{text}</p>
        <a
          href="https://www.linkedin.com/in/akshay-gautam-74577a117/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="LikedIn">
            <LinkedinOutlined />
          </Tooltip>
        </a>
        <a
          href="https://github.com/akshaygautam"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="Github">
            <GithubOutlined />
          </Tooltip>
        </a>
        <a
          href="https://drive.google.com/file/d/1ZJuFFjg1Mmc7KcfhNG5c5j0LA5AHRrXp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="Resume">
            <FilePdfOutlined />
          </Tooltip>
        </a>
        <a href="mailto:akshay.gautam2209@gmail.com" style={iconStyle}>
          <Tooltip placement={tooltipPlacement} title="Email">
            <MailOutlined />
          </Tooltip>
        </a>
      </div>
    </div>
  );
};
