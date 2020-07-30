import React from "react";
import "./App.css";
import { Layout, Spin } from "antd";
import {
  firestore,
  convertCertificateSnapshotToList,
} from "./firebase/firebase-utils";
import { Content as MyContent } from "./components/content/content.component";
import { Header as MyHeader } from "./components/header/header.component";
import { Footer as MyFooter } from "./components/footer/footer.component";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 24 }} spin />;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      portfolioCertificationList: [],
      portfolioDemoProjectList: [],
    };
  }

  componentDidMount() {
    const portfolioCertificates = firestore.collection(
      "portfolio_certificates"
    );
    portfolioCertificates.onSnapshot(async (snapshot) => {
      const portfolioCertificationList = convertCertificateSnapshotToList(
        snapshot
      );
      this.setState({ loading: false, portfolioCertificationList });
    });

    const portfolioDemoProjects = firestore.collection(
      "portfolio_demo_projects"
    );
    portfolioDemoProjects.onSnapshot(async (snapshot) => {
      const portfolioDemoProjectList = convertCertificateSnapshotToList(
        snapshot
      );
      this.setState({ loading: false, portfolioDemoProjectList });
    });
  }

  renderSpinner() {
    return (
      <div className="spinner">
        <Spin size="large" indicator={antIcon} />
      </div>
    );
  }

  renderPage() {
    const { Content, Footer, Header } = Layout;
    return (
      <Layout>
        <Header className="header">
          <MyHeader />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <MyContent
            portfolioCertificationList={this.state.portfolioCertificationList}
            portfolioDemoProjectList={this.state.portfolioDemoProjectList}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <MyFooter />
        </Footer>
      </Layout>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? this.renderSpinner() : this.renderPage()}
      </div>
    );
  }
}

export default App;
