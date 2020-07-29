import React from "react";
import "./certificates-section.styles.scss";
import Certificate from "./certificate/certificate.component";
import {
  firestore,
  convertCertificateSnapshotToList,
} from "../firebase/firebase-utils";
import { Row, Col } from "antd";
export class Certificates extends React.Component {
  constructor() {
    super();
    this.state = {
      certificates: [],
    };
  }

  componentDidMount() {
    const portfolioCertificates = firestore.collection(
      "portfolio_certificates"
    );
    portfolioCertificates.onSnapshot(async (snapshot) => {
      const certificates = convertCertificateSnapshotToList(snapshot);
      this.setState({ loading: false, certificates });
    });
  }

  render() {
    let filteredCertificates = this.state.certificates.filter(
      (certificate) => certificate.active
    );
    return (
      <div>
        <Row gutter={[16, 40]}>
          <Col span={8}>
            {filteredCertificates.map((certificate) => (
              <Certificate key={certificate.id} certificate={certificate} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}
