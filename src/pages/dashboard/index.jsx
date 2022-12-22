import { Avatar, Layout } from "antd";
import React, { useState } from "react";
import "./Dashboard.css";
import "../dashboard/threads/Thread.css";
import "../dashboard/media/Media.css";

import SiderNav from "../../components/dashboard/SiderNav";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
const { Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState({
    status: false,
  });
  const dataUser = JSON.parse(Cookies.get("user"));

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
          marginLeft: !collapsed.status ? "130px" : "75px",
        }}
      >
        <Header className="header-bar site-layout-background">
          <div
            className="user-profile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Hello, {dataUser.displayName}
            <Avatar size={40} src={dataUser.profilePictureURL} />
          </div>
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
