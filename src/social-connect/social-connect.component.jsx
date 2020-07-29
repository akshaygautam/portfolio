import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfTwoTone,
  MailTwoTone,
} from "@ant-design/icons";

const SocialConnect = ({ style }) => {
  return (
    <div style={style}>
      <a
        href="https://github.com/akshaygautam"
        target="_blank"
        rel="noopner noreferrer"
      >
        <GithubOutlined twoToneColor="#eb2f96" />
      </a>
      <a
        href="https://www.linkedin.com/in/akshay-gautam-74577a117/"
        target="_blank"
        rel="noopner noreferrer"
      >
        <LinkedinOutlined twoToneColor="#eb2f96" />
      </a>
      <a
        href="https://www.hackerrank.com/akshaygautam"
        target="_blank"
        rel="noopner noreferrer"
      >
        <img src="https://img.icons8.com/windows/40/000000/hackerrank.png" />
      </a>
      <a
        href="https://drive.google.com/file/d/1ZJuFFjg1Mmc7KcfhNG5c5j0LA5AHRrXp/view?usp=sharing"
        target="_blank"
        rel="noopner noreferrer"
      >
        <FilePdfTwoTone />
      </a>
      <a
        href="mailto:akshay.gautam2209@gmail.com"
        target="_blank"
        rel="noopner noreferrer"
      >
        <MailTwoTone />
      </a>
    </div>
  );
};
export default SocialConnect;
