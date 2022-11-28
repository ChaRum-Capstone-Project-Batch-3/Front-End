import React from 'react';
import { Layout, Col, Row, Image, Typography } from "antd";
import '../LandingPage/styling/landing-page.css';
import DownloadUsImage from '../LandingPage/img/downloadUsImg.png'

const { Content } = Layout;
const { Title, Text } = Typography;

const DownloadUs = () => {
    return(
        <Content>
            <div className='downloadUsSection'>
                <Row>
                    <Col xl={12} xs={24} className='downloadUsLeft'>
                        <Title className='aboutTitle'>Download Us</Title>
                        <Text>Download Charum application to bring you more educated and full of knowledge</Text>
                    </Col>
                    <Col xl={12} xs={24} className='downloadUsRight' >
                        <Image src={DownloadUsImage} width={400} preview={false} />
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default DownloadUs;