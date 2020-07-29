import React from "react";
import "./certificate.styles.scss";

const Certificate = ({ certificate }) => {
  const { imageURL, siteURL, displayInfo } = certificate;
  return (
    <div className="certificate">
      <a href={siteURL} target="_blank" rel="noopner noreferrer">
        <img
          className="certificate-image"
          src={imageURL}
          alt={displayInfo}
        ></img>
        <p>{displayInfo}</p>
      </a>
    </div>
  );
};

export default Certificate;
