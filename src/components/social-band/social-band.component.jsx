import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export const SocialBand = ({ text, textStyle, iconStyle }) => {
  return (
    <Row>
      <Col>
        <span style={textStyle}>{text}</span>
        <a
          href="https://www.linkedin.com/in/akshay-gautam-74577a117/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://github.com/akshaygautam"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <GithubOutlined />
        </a>
        <a
          href="https://drive.google.com/file/d/1ZJuFFjg1Mmc7KcfhNG5c5j0LA5AHRrXp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FilePdfOutlined />
        </a>
        <a href="mailto:akshay.gautam2209@gmail.com" style={iconStyle}>
          <MailOutlined />
        </a>
      </Col>
    </Row>
  );
};
