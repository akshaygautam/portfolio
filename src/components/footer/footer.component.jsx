import React from "react";
import "./footer.styles.css";
import { SocialBand } from "../social-band/social-band.component";
export const Footer = () => {
  return (
    <div className="footer">
      Portfolio ©2020 Created by Akshay Gautam
      <div className="footer">
        <SocialBand
          text="Connect On"
          tooltipPlacement="top"
        />
      </div>
    </div>
  );
};
