import React, { useEffect, useState } from "react";
import "./App.css";
import { Layout, Spin, FloatButton } from "antd";
import { getCertificates, getBio } from "./data-stores/data-store-master-util";
import { Content as MyContent } from "./components/content/content.component";
import { Footer as MyFooter } from "./components/footer/footer.component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Route, Routes } from "react-router-dom";

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 24 }} spin />;
const { Content, Footer } = Layout;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [portfolioCertificationList, setPortfolioCertificationList] = useState([]);
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setPortfolioCertificationList(getCertificates());
    setBio(getBio());
    setLoading(false);
  }, []);

  const renderSpinner = () => (
    <div className="spinner">
      <Spin size="large" indicator={antIcon} />
    </div>
  );

  const renderHomePage = () => {
    if (!bio) return null;
    return (
      <MyContent
        portfolioCertificationList={portfolioCertificationList}
        bio={bio}
      />
    );
  };

  return (
    <div className="App">
      <Layout className="layout">
        <Content style={{ padding: "0 50px" }}>
          {loading ? renderSpinner() : (
            <Routes>
              <Route path="/" element={renderHomePage()} />
            </Routes>
          )}
          <FloatButton.BackTop />
        </Content>

        <Footer style={{ textAlign: "center" }}>
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
