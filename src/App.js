import React from "react";
import "./App.css";
import { Certificates } from "./certificates-section/certificates-section.component";
import CustomHeader from "./header/header.component";
import { Layout, Breadcrumb } from "antd";
import CustomFooter from "./footer/footer.component";
function App() {
  const { Content, Footer, Header } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header
          title="Akshay Gautam"
          style={{
            backgroundColor: "pink",
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <CustomHeader />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Certificates />
          </div>
        </Content>
        <Footer style={{ backgroundColor: "pink" }}>
          <CustomFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
