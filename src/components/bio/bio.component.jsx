import React from "react";
import "./bio.styles.css";
import { Card } from "antd";
import { SocialBand } from "../social-band/social-band.component";
import ReactTypingEffect from "react-typing-effect";
export const Bio = ({ bio }) => {
  const { imageURL, content, intro, subIntro } = bio;
  return (
    <Card className="bio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <img
              className="img-responsive img-thumbnail"
              src={imageURL}
              alt="me.jpg"
            />
          </div>
          <div className="col-xs-12 col-md-8">
            <h1>{intro}</h1>
            <ReactTypingEffect cursor="_" className="lead" text={subIntro} />
            <div id="demo">{content}</div>
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
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <p>Profile will change randomly with every refresh.</p>
            <p> All Certificates are clickable and will lead you to source.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
