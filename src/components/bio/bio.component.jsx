import React from "react";
import "./bio.styles.css";
import { Card, Carousel, Row, Col } from "antd";
import { SocialBand } from "../social-band/social-band.component";
import { TimeLine } from "../timeline/timeline.component";
import ReactTypingEffect from "react-typing-effect";
export const Bio = ({ bio }) => {
  const { imageURL, content, intro, subIntro } = bio[0];
  return (
    <Card className="bio">
      <Row gutter={[{ xs: 4, sm: 4, md: 24, lg: 32 }, { xs: 4, sm: 4, md: 24, lg: 24 }]}>
        <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <img className="img-responsive img-thumbnail"
            src={imageURL}
            alt="me.jpg"
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
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
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TimeLine title={'Work XP'} timeLine={bio[1].professionalTimeLine} />
          <TimeLine title={'Education'} timeLine={bio[1].educationTimeLine} />
        </Col>
      </Row>
    </Card>
  );
};
