import React from "react";
import { SocialBand } from "../../components/social-band/social-band.component";
import "./contact.page.css";
export class ContactPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
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
    );
  }
}
