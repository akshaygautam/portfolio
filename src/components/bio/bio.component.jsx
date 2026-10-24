import React from "react";
import "./bio.styles.css";
import { Card, Row, Col } from "antd";
import { SocialBand } from "../social-band/social-band.component";
import { TimeLine } from "../timeline/timeline.component";

export const Bio = ({ bio }) => {
  const {
    imageURL,
    content,
    intro,
    subIntro,
    interests,
    googleImpact,
    microsoftCdnImpact,
  } = bio[0];

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
            <TimeLine title="Education" timeLine={bio[1].educationTimeLine} />
            <SocialBand text="Know more" tooltipPlacement="bottom" />
          </div>
        </Col>

        <Col className="gutter-row bio-timeline-column" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <TimeLine title="Work Experience" timeLine={bio[1].professionalTimeLine} />
        </Col>
      </Row>
      <section className="bio-impacts" aria-labelledby="bio-impacts-title">
        <h2 className="bio-impacts-title" id="bio-impacts-title">Impact</h2>
        <article className="bio-impact" aria-labelledby="google-impact-title">
          <span className="bio-eyebrow">Google</span>
          <h2 id="google-impact-title">Support automation and reporting platform</h2>
          <p>{googleImpact}</p>
        </article>
        <article className="bio-impact" aria-labelledby="microsoft-impact-title">
          <span className="bio-eyebrow">Microsoft</span>
          <h2 id="microsoft-impact-title">Microsoft 365 CDN architecture</h2>
          <p>{microsoftCdnImpact}</p>
        </article>
        <article className="bio-impact" aria-labelledby="word-impact-title">
          <span className="bio-eyebrow">Microsoft</span>
          <h2 id="word-impact-title">Word boot performance</h2>
          <p>
            As a Software Engineer 2, I led Word performance work that improved boot time across processes.
          </p>
        </article>
      </section>
    </Card>
  );
};
