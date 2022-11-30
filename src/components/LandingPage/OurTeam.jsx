import React from 'react';
import { Layout, Typography, Col, Row, Image } from 'antd';
import '../LandingPage/styling/landing-page.css';

import Shaharani from '../LandingPage/img/ourTeam/shaharani.png';
import Vinka from '../LandingPage/img/ourTeam/vinka.png';
import Puan from '../LandingPage/img/ourTeam/puan.png';
import Farhan from '../LandingPage/img/ourTeam/farhan.png';
import Bagus from '../LandingPage/img/ourTeam/bagus.png';
import Fadillah from '../LandingPage/img/ourTeam/fadillah.png';
import Arsyal from '../LandingPage/img/ourTeam/arsyal.png';
import Dio from '../LandingPage/img/ourTeam/dio.png';
import Irfan from '../LandingPage/img/ourTeam/irfan.png';
import Razan from '../LandingPage/img/ourTeam/razan.png';
import Timotius from '../LandingPage/img/ourTeam/timotius.png';
import Fivo from '../LandingPage/img/ourTeam/fivo.png';
import Khaerul from '../LandingPage/img/ourTeam/khaerul.png';
import Nur from '../LandingPage/img/ourTeam/nur.png';
import Maulidya from '../LandingPage/img/ourTeam/maulidya.png';
import Faisal from '../LandingPage/img/ourTeam/faisal.png';
import Shidan from '../LandingPage/img/ourTeam/shidan.png';
import Faraz from '../LandingPage/img/ourTeam/faraz.png';

const {Content} = Layout;
const {Title, Text} = Typography;

const OurTeam = () => {
    return(
        <Content style={{padding: 30}}>
            <Title style={{color:'#178066'}} className='ourTeamTitle'>Our Team</Title>
            <Row>
                <Col span={24}>
                    <Title style={{textAlign: 'center'}}>UI/UX Designer</Title>
                    <div className="ourTeamContainer" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', overflowX: 'scroll'}}>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Shaharani} preview={false} />
                            <p style={{textAlign: 'center'}}>Shaharani A.C</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Vinka} preview={false} />
                            <p style={{textAlign: 'center'}}>Vinka Annisa A.R.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Puan} preview={false} />
                            <p style={{textAlign: 'center'}}>Puan Maharani S.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Farhan} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Farhan Alfauzan</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Bagus} preview={false} />
                            <p style={{textAlign: 'center'}}>Bagus Satria K.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={16}>
                    <Title style={{textAlign: 'center'}}>React Js <br /> Front End Engineer</Title>
                    <div className="ourTeamContainer" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', overflowX: 'scroll'}}>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Fadillah} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Fadillah A.A.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Arsyal} preview={false} />
                            <p style={{textAlign: 'center'}}>M.Arsyal A.E.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Dio} preview={false} />
                            <p style={{textAlign: 'center'}}>Putu Bagus D.P.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Irfan} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Irfan Maulana</p>
                        </div>
                    </div>
                </Col>
                <Col xl={8}>
                    <Title style={{textAlign: 'center'}}>Golang <br /> Back End Engineer</Title>
                    <div className="ourTeamContainer" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', overflowX: 'scroll'}}>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Razan} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Razan F.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Timotius} preview={false} />
                            <p style={{textAlign: 'center'}}>Timotius Wirawan</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Title style={{textAlign: 'center'}}>Mobile Flutter</Title>
                    <div className="ourTeamContainer" style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around', overflowX: 'scroll'}}>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Fivo} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Fivo Arnande</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Khaerul} preview={false} />
                            <p style={{textAlign: 'center'}}>Khaerul Latif</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Nur} preview={false} />
                            <p style={{textAlign: 'center'}}>Nur Muhammad A.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Maulidya} preview={false} />
                            <p style={{textAlign: 'center'}}>Maulidya Amanda</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Faisal} preview={false} />
                            <p style={{textAlign: 'center'}}>Faisal Aprianto</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <Title style={{textAlign: 'center'}}>Quality Engineer</Title>
                    <div className="ourTeamContainer" style={{margin: 'auto', display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', overflowX: 'scroll', width: '60%'}}>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Shidan} preview={false} />
                            <p style={{textAlign: 'center'}}>M. Shidan Nur A.</p>
                        </div>
                        <div style={{maxWidth: 150}}>
                            <Image width={145} src={Faraz} preview={false} />
                            <p style={{textAlign: 'center'}}>Faraz Herviansyah</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Content>
    )
}

export default OurTeam;