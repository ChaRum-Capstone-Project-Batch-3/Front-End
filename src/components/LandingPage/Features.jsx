import React from 'react';
import { Layout, Typography, Col, Row, Image } from 'antd';
import '../LandingPage/styling/landing-page.css';
import ThreadIcon from '../LandingPage/img/threadIcon.png'
import BookmarkIcon from '../LandingPage/img/bookmarkIcon.png'
import GroupIcon from '../LandingPage/img/groupIcon.png'

const {Content} = Layout;
const {Title, Text} = Typography;

const Features = () => {
    return (
        <Content style={{minHeight: 664, background: "#178066"}}>
            <div style={{padding: 40}}>
                <Title className='featureTitle'>Features</Title>
                <Row style={{marginTop: 100}}>
                    <Col xl={8} xs={24}>
                        <Row>
                            <Col xl={12} xs={8} className="featureImg">
                                <Image src={ThreadIcon} width={120} preview={false} />
                            </Col>
                            <Col xl={12} xs={16} className="featureText">
                                <Title color='#EAE9E9'>Thread</Title>
                                <Text>Create a thread that allows others to comments, likes, and following your thread</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={8} xs={24}>
                        <Row>
                            <Col xl={12} xs={8} className="featureImg">
                                <Image src={BookmarkIcon} width={120} preview={false} />
                            </Col>
                            <Col xl={12} xs={16} className="featureText">
                                <Title>Bookmark</Title>
                                <Text>Save thread that you want to read again in other time</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={8} xs={24}>
                        <Row>
                            <Col xl={12} xs={8} className="featureImg">
                                <Image src={GroupIcon} width={120} preview={false} />
                            </Col>
                            <Col xl={12} xs={16} className="featureText">
                                <Title>Group</Title>
                                <Text>Explore and share knowledge based on certain topics which you want</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Content>
    )
}

export default Features;