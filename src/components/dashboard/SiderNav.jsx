import { Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Items } from "./ListNavigate";
import "./navbar.css";

import LogoCharum from "./logo-charum.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SiderNav = (props) => {
  const [page, setPage] = useState("1");
  const path = useLocation();
  useEffect(() => {
    if (path.pathname === "/dashboard") setPage("1");
    else if (path.pathname === "/dashboard/thread") setPage("2");
    else if (path.pathname === "/dashboard/users") setPage("3");
  }, [path]);
  return (
    <Sider
      collapsible
      onCollapse={(value) => props.clickHandler(value)}
      style={{
        overflow: "auto",
        position: "fixed",
        height: "100vh",
        left: 0,
        top: 0,
        bottom: 0,
        background: "rgba(255, 255, 255, 1)",
      }}
    >
      <Image src={LogoCharum} preview={false} />
      <Menu
        theme="light"
        defaultSelectedKeys={[page]}
        selectedKeys={[page]}
        mode="inline"
        items={Items}
      />
    </Sider>
  );
};

export default SiderNav;
