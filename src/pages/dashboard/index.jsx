import { Layout } from "antd";
import React, { useState } from "react";
import "./Dashboard.css";

import SiderNav from "../../components/dashboard/SiderNav";
import SearchBar from "../../components/dashboard/SearchBar";
import { Outlet } from "react-router-dom";
const { Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState({
    status: false,
  });

  const clickHandler = (value) => {
    setCollapsed({ ...collapsed, status: value });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <SiderNav clickHandler={clickHandler} />
      <Layout
        className="site-layout"
        style={{
          marginLeft: !collapsed.status ? "200px" : "75px",
        }}
      >
        <Header className="header-bar site-layout-background">
          <SearchBar />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "hidden",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
