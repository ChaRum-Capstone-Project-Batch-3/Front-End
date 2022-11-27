import React from 'react';
import { Layout, Col, Row, Image, Typography } from "antd";

import '../LandingPage/styling/landing-page.css';
import flyPhones from '../LandingPage/img/flyPhones.png';
import LogoIcon from '../LandingPage/img/LogoIcon.png';
import LogoType from '../LandingPage/img/LogoType.png';
const { Content } = Layout;
const { Text } = Typography;


const HeroSection = () => {
        const {innerWidth} = window;
        // return innerWidth;
        console.log(innerWidth);
    return(
        <div className='bgImage'>
            <Content>
                <Row>
                    <Col xl={12} className='heroLeftSide'>
                        <Image  src={flyPhones}
                                preview={false}å
                                width={800} 
                                style={{marginTop: '85px'}}/>
                                
                    </Col>
                    <Col xl={12} xs={24} className='heroRightSide'>
                        <div>
                            <div className='aligner-custom'>
                                <Image src={LogoIcon}
                                    width={100}
                                    preview={false}
                            />
                                <Image src={LogoType}
                                        width={250}
                                        preview={false}/>
                            </div>
                            <Text style={{marginTop: "30px"}} className='heroText'>The right place to educate yourself and spread knowledge</Text>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Content>
                2
            </Content>
            {/* <img src="../LandingPage/img/background.png" alt="" /> */}
        </div>
    )
}

export default HeroSection;