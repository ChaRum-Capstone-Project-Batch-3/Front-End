import React, { useState } from 'react';
import { Layout, Image, Drawer, Button } from "antd";
import { AlignRightOutlined } from '@ant-design/icons';
import Logo from '../LandingPage/img/Logo.png';
import '../LandingPage/styling/navbar.css';
import NavbarList from './NavbarList';

const { Header } = Layout;

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


const Navbar = () => {
    
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true)
    }

    const closeDrawer = () => {
        setVisible(false)
    }

    return(
        <Header>
            <nav className="menuBar">
            <div className='logo'>
                <a  href="/">
                    <Image
                    width={150}
                    src={Logo}
                    preview={false}
                /></a>
            </div>
            <div className="menuCon">
                <div className='menu'>
                    <NavbarList mode="horizontal" />
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <AlignRightOutlined style={{ fontSize: '22px' }} />
                </Button>
            </div>
            <Drawer title='Charum'
                    placement='right'
                    closable={false}
                    visible={visible}
                    onClose={closeDrawer}
            >
                <div className='menuMobile'>
                    <NavbarList className="menuMobile" mode="vertical"/>
                </div>
                test
            </Drawer>
        </nav>
        </Header>
    )
}

export default Navbar;
