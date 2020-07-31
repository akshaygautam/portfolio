import React from "react";
import "./App.css";
import { Layout, Spin, Menu, BackTop } from "antd";
import {
  firestore,
  convertCertificateSnapshotToList,
  convertHeaderOptionSnapshotToList,
} from "./firebase/firebase-utils";
import { Content as MyContent } from "./components/content/content.component";
import { Footer as MyFooter } from "./components/footer/footer.component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Route, Switch, withRouter } from "react-router";
import { BlogsPage } from "./pages/blogs/blogs.page";
import { CertificationsPage } from "./pages/certifications/certifications.page";
import { Link } from "react-router-dom";
import { DemoProjectsPage } from "./pages/demo-projects/demo-projects.page";
import { UsefulResources } from "./pages/useful-resources/useful-resources.page";
import { ContactPage } from "./pages/contact/contact.page";
import Avatar from "antd/lib/avatar/avatar";

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 24 }} spin />;
const { Content, Footer, Header } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolioCertificationList: [],
      portfolioDemoProjectList: [],
      headerOptions: [{ sequence: 1, title: "About me", link: "/portfolio" }],
      selectedHeader: ["1", "2"],
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

    const portfolioHeaderOptions = firestore.collection(
      "portfolio_header_options"
    );
    portfolioHeaderOptions.onSnapshot(async (snapshot) => {
      const headerOptions = convertHeaderOptionSnapshotToList(snapshot);
      this.setState({ loading: false, headerOptions });
    });
  }

  renderSpinner() {
    return (
      <div className="spinner">
        <Spin size="large" indicator={antIcon} />
      </div>
    );
  }

  renderHomePage = () => {
    return (
      <MyContent
        portfolioCertificationList={this.state.portfolioCertificationList}
        portfolioDemoProjectList={this.state.portfolioDemoProjectList}
      />
    );
  };

  renderCertificationsPage = () => {
    return (
      <CertificationsPage
        portfolioCertificationList={this.state.portfolioCertificationList}
      />
    );
  };

  renderDemoProjectsPage = () => {
    return (
      <DemoProjectsPage
        portfolioDemoProjectList={this.state.portfolioDemoProjectList}
      />
    );
  };

  renderContent = () => {
    return (
      <Switch>
        <Route path="/portfolio" render={this.renderHomePage} />
        <Route path="/blogs" component={BlogsPage} />
        <Route
          path="/certifications"
          component={this.renderCertificationsPage}
        />
        <Route path="/demo_projects" component={this.renderDemoProjectsPage} />
        <Route path="/useful_resources" component={UsefulResources} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    );
  };

  renderPage() {
    let selectedKeys = [];
    let selectedOption = this.state.headerOptions.find(
      (option) => option.link === this.props.history.location.pathname
    );
    if (selectedOption) {
      selectedKeys.push(selectedOption.id + "");
    }
    return (
      <Layout hasSider="false" className="layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Link to="/portfolio">
            <div className="logo">
              <Avatar
                shape="square"
                src="https://img.icons8.com/officel/40/000000/popeye.png"
              />
            </div>
          </Link>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={["1"]}
          >
            {this.state.headerOptions.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  <Link to={item.link} className="option">
                    {item.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {this.renderContent()}
          <BackTop />
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

export default withRouter(App);
