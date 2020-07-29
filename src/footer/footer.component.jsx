import React from "react";
import SocialConnect from "../social-connect/social-connect.component";
const CustomFooter = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "25px" }}>
      <SocialConnect />
      <p style={{ fontSize: "10px" }}>
        Portfolio ©2020 Created by Akshay Gautam
      </p>
    </div>
  );
};

export default CustomFooter;
