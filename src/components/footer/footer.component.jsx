import React from "react";
import { FileSearchOutlined } from "@ant-design/icons";
import "./footer.styles.css";
import { SocialBand } from "../social-band/social-band.component";
export const Footer = () => {
  return (
    <div className="footer">
      Portfolio ©2020 Created by Akshay Gautam
      <a
        className="footer-visual-resume"
        href={`${import.meta.env.BASE_URL}assets/Akshay_Gautam_Visual_Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open visual recruiter resume"
        title="Visual resume"
      >
        <FileSearchOutlined aria-hidden="true" />
      </a>
      <div className="footer">
        <SocialBand
          text="Connect On"
          tooltipPlacement="top"
        />
      </div>
    </div>
  );
};
