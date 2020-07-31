import React from "react";
import { SocialBand } from "../../components/social-band/social-band.component";
import "./contact.page.css";
import { Card } from "antd";
export class ContactPage extends React.Component {
  render() {
    return (
      <Card>
        <div className="contact-page">
          <SocialBand
            text="Contact Me On"
            textStyle={{
              margin: "10px",
              color: "white",
              fontSize: "x-large",
            }}
            iconStyle={{ color: "white", margin: "5px", fontSize: "40px" }}
            tooltipPlacement="bottom"
          />
        </div>
      </Card>
    );
  }
}
