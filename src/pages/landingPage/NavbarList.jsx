import React from 'react';
import { Menu } from 'antd';
import "./LandingPage.css";
// import '../LandingPage/styling/navbar.css';

const NavbarList = (props) => {
    return(
        <Menu mode={props.mode} className='ant-menu-horizontal-custom'>
            <Menu.Item key="home">
            <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="features">
            <a href="/">Features</a>
            </Menu.Item>
            <Menu.Item key="about">
            <a href="/">About</a>
            </Menu.Item>
            <Menu.Item key="download">
            <a href="/">Download</a>
            </Menu.Item>
            <Menu.Item key="our-team">
            <a href="/">Our Team</a>
            </Menu.Item>
        </Menu>
    )
}

export default NavbarList;