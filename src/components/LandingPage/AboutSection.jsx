import React from 'react';
import { Layout, Col, Row, Image, Typography } from "antd";
import AboutImg from '../LandingPage/img/aboutImg.png'
import '../LandingPage/styling/landing-page.css';

const { Content } = Layout;
const { Title, Text } = Typography;

const AboutSection = () => {
    return(
        <Content>
            <div className='aboutSection' >
                <Row>
                    <Col xl={12} xs={24} className="aboutSectionLeft">
                        <Image className='aboutSectionImg' src={AboutImg} preview={false} />
                    </Col>
                    <Col xl={12} xs={24} className="aboutSectionRight">
                        <Title className='aboutTitle'>About <br /> Charum</Title>
                        <Text>Charum is a forum group discussion application that supports its users to ask questions and answer about certain topics.</Text><br />
                        <Text>Charum will improve your knowledge and educate yourself with threads that are shared by users. We prioritize our users comfortability because we have a princip which we should be kind and polite.</Text>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default AboutSection;