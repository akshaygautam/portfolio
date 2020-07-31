import React from "react";
import "./bio.styles.css";
import { Card } from "antd";
import { SocialBand } from "../social-band/social-band.component";
export const Bio = ({ bio }) => {
  const { imageURL, content, intro, subIntro } = bio;
  return (
    <Card className="bio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-md-6">
            <img
              className="img-responsive img-thumbnail"
              src={imageURL}
              alt="me.jpg"
            />
          </div>
          <div className="col-xs-* col-md-*">
            <div>{intro}</div>
            <p className="lead">{subIntro}</p>
            <div>{content}</div>
            <SocialBand
              text="Know more"
              textStyle={{
                margin: "10px",
                color: "white",
                fontSize: "x-large",
              }}
              iconStyle={{ color: "white", margin: "5px", fontSize: "30px" }}
              tooltipPlacement="bottom"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
