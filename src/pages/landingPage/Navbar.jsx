import { Header } from "antd/es/layout/layout";
import "./LandingPage.css";
import React, { useState } from "react";
import NavbarList from "./NavbarList";
import logo from "./img/logo-header.png";
import { Image, Drawer, Button } from "antd";
import { AlignRightOutlined } from '@ant-design/icons';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true)
    }

    const closeDrawer = () => {
        setVisible(false)
    }

  return (
    <Header>
      <div
        className="nav-content"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="nav-logo">
          <Image width={120} src={logo} preview={false} />
        </div>
        <div className="nav-list-menu">
          <NavbarList className='ant-menu-horizontal-custom' mode="horizontal" style={{display: "flex", gap: "30px", background: 'rgba(23, 128, 102, 1)'}} />
        </div>
          <Button className="barsMenu" type="primary" onClick={showDrawer}>
            <AlignRightOutlined style={{ fontSize: '22px' }} />
          </Button>
        <Drawer title='Charum'
                    placement='right'
                    closable={false}
                    visible={visible}
                    onClose={closeDrawer}
            >
                <div className='menuMobile'>
                    <NavbarList className="menuMobile" mode="vertical"/>
                </div>
        </Drawer>
      </div>
    </Header>
  );
};

export default Navbar;
