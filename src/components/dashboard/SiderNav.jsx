import { Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Items } from "./ListNavigate";
import './navbar.css';

import LogoCharum from "./logo-charum.png";

const SiderNav = (props) => {
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
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={Items}
      />
    </Sider>
  );
};

export default SiderNav;
