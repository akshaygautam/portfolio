import React from "react";
import { Tooltip } from "antd";
import {
  MailOutlined,
  FilePdfOutlined,
  GithubOutlined,
  LinkedinOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
export const SocialBand = ({
  text,
  textStyle,
  iconStyle,
  tooltipPlacement,
}) => {
  return (
    <div className="social-band">
      <p className="social-band-label" style={textStyle}>
        {text}
      </p>
      <div className="social-band-links">
        <a
          className="social-band-link"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/akshay-gautam-74577a117/"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="LinkedIn">
            <LinkedinOutlined />
          </Tooltip>
        </a>
        <a
          className="social-band-link"
          aria-label="GitHub"
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
          className="social-band-link"
          aria-label="Resume"
          href={`${import.meta.env.BASE_URL}assets/Akshay_Gautam_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="Resume">
            <FilePdfOutlined />
          </Tooltip>
        </a>
        <a
          className="social-band-link"
          aria-label="Email"
          href="mailto:akshaygautamofficial@gmail.com"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="Email">
            <MailOutlined />
          </Tooltip>
        </a>
        <a
          className="social-band-link"
          aria-label="YouTube"
          href="https://www.youtube.com/channel/UC_t8fjPij3zCHbNIgWfPPHg"
          style={iconStyle}
        >
          <Tooltip placement={tooltipPlacement} title="YouTube">
            <YoutubeFilled />
          </Tooltip>
        </a>
      </div>
    </div>
  );
};
