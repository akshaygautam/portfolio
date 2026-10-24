import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { Layout, Spin, Menu, FloatButton, Avatar } from "antd";
import { getCertificates, getBio } from "./data-stores/data-store-master-util";
import { Content as MyContent } from "./components/content/content.component";
import { Footer as MyFooter } from "./components/footer/footer.component";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Navigate, Route, Routes, useLocation, Link } from "react-router-dom";

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 24 }} spin />;
const { Content, Footer, Header } = Layout;

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [portfolioCertificationList, setPortfolioCertificationList] = useState([]);
  const [bio, setBio] = useState(null);

  const headerOptions = useMemo(
    () => [{ sequence: 1, title: "About me", link: "/about-me" }],
    []
  );

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

  const selectedKeys = headerOptions
    .filter((option) => option.link === location.pathname)
    .map((option) => String(option.sequence));

  const menuItems = headerOptions.map((item) => ({
    key: String(item.sequence),
    label: <Link to={item.link} className="option">{item.title}</Link>,
  }));

  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Link to="/about-me">
            <div className="logo">
              <Avatar
                shape="square"
                src={`${import.meta.env.BASE_URL}assets/akshay-gautam.jpg`}
              />
            </div>
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={["1"]}
            items={menuItems}
          />
        </Header>

        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {loading ? renderSpinner() : (
            <Routes>
              <Route path="/" element={<Navigate to="/about-me" replace />} />
              <Route path="/about-me" element={renderHomePage()} />
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
