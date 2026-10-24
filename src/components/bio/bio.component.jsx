import React from "react";
import "./bio.styles.css";
import { Card, Row, Col } from "antd";
import { SocialBand } from "../social-band/social-band.component";
import { TimeLine } from "../timeline/timeline.component";

export const Bio = ({ bio }) => {
  const { imageURL, content, intro, subIntro, interests } = bio[0];

  return (
    <Card className="bio">
      <Row
        className="bio-row"
        gutter={[{ xs: 16, sm: 20, md: 24, lg: 32 }, { xs: 28, sm: 28, md: 24, lg: 24 }]}
      >
        <Col
          className="gutter-row bio-intro-column"
          xs={24}
          sm={24}
          md={16}
          lg={16}
          xl={16}
          xxl={16}
        >
          <div className="bio-intro">
            <span className="bio-eyebrow">A little about me</span>
            <h1>{intro}</h1>
            <div className="bio-role">
              <span className="bio-role-mark" aria-hidden="true" />
              {subIntro}
            </div>
            {imageURL && (
              <div className="bio-portrait-frame">
                <img className="bio-portrait" src={imageURL} alt="Akshay Gautam" />
              </div>
            )}
            <p className="bio-description">{content}</p>
            <div className="bio-interests">
              <span className="bio-interests-label">Away from the keyboard</span>
              <ul aria-label="Personal interests">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
            <SocialBand text="Know more" tooltipPlacement="bottom" />
          </div>
        </Col>

        <Col className="gutter-row bio-timeline-column" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TimeLine title="Work Experience" timeLine={bio[1].professionalTimeLine} />
          <TimeLine title="Education" timeLine={bio[1].educationTimeLine} />
        </Col>
      </Row>
    </Card>
  );
};
