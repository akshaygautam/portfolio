import React from "react";
import "./bio.styles.css";
import { Row, Col, Card } from "antd";
import { SocialBand } from "../social-band/social-band.component";
export const Bio = ({ bio }) => {
  const { imageURL, content, intro, subIntro } = bio;
  return (
    <Card className="bio">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
          <img src={imageURL} alt="me.jpg" />
        </Col>
        <Col span={12}>
          <h1>{intro}</h1>
          <h4>{subIntro}</h4>
          <h3>{content}</h3>
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
        </Col>
      </Row>
    </Card>
  );
};
