import React from "react";
import "./App.css";
import { Layout, Spin, Menu, BackTop } from "antd";
import {
  getCertificates,
  getDemoProject,
  getBio,
} from "./data-stores/data-store-master-util";
import { Content as MyContent } from "./components/content/content.component";
import { Footer as MyFooter } from "./components/footer/footer.component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Route, Switch, withRouter } from "react-router";
import { Link } from "react-router-dom";
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
      bio: null,
    };
  }

  componentDidMount() {
    const portfolioCertificationList = getCertificates();
    this.setState({ portfolioCertificationList });

    const portfolioDemoProjectList = getDemoProject();
    this.setState({ portfolioDemoProjectList });
    
    const bio = getBio();
    this.setState({ loading: false, bio });
  }

  renderSpinner() {
    return (
      <div className="spinner">
        <Spin size="large" indicator={antIcon} />
      </div>
    );
  }

  renderHomePage = () => {
    if (!this.state.bio) return null;
    return (
      <MyContent
        portfolioCertificationList={this.state.portfolioCertificationList}
        portfolioDemoProjectList={this.state.portfolioDemoProjectList}
        bio={this.state.bio}
      />
    );
  };

  renderContent = () => {
    return (
      <Switch>
        <Route path="/portfolio" render={this.renderHomePage} />
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
                  <Link
                    key={item.id}
                    to={item.link}
                    style={{ fontSize: "large" }}
                    className="option"
                  >
                    {item.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {this.state.loading ? this.renderSpinner() : this.renderContent()}
          <BackTop />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <MyFooter />
        </Footer>
      </Layout>
    );
  }

  render() {
    return <div className="App">{this.renderPage()}</div>;
  }
}

export default withRouter(App);
