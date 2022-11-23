import { Layout, Menu, Image, Input, Button, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Items } from "./ListNavigate";
import "./Dashboard.css";
import LogoHead from "./img/admin-header.png";
import LogoCounterUser from "./img/counter-users.png";
import LogoCounterThread from "./img/counter-thread.png";
import LogoCounterReport from "./img/counter-report.png";
import LogoCharum from "./img/logo-charum.png";
const { Header, Content, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const MainDashboard = () => {
  const [collapsed, setCollapsed] = useState({
    status: false,
    width: "75px",
  });
  console.log(collapsed);
  const onSearch = (value) => console.log(value);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        onCollapse={(value) => setCollapsed({ ...collapsed, status: value })}
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
      <Layout
        className="site-layout"
        style={{
          marginLeft: !collapsed.status ? "200px" : "75px",
        }}
      >
        <Header className="header-bar site-layout-background">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "hidden",
          }}
        >
          <div className="site-layout-background">
            <div
              className="content-main"
              style={{
                margin: "0 15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="header-content">
                <div className="text-head-content">
                  <Title level={2} className="title-head">
                    Hello Vinka!
                  </Title>
                  <p className="body-head">
                    Tahukah kamu literasi digital masih kurang di masyarkat,
                    maka dari itu buat lebih banyak topik untuk menjangkau
                    diskusi lebih banyak lagi sekarang juga
                  </p>

                  <Button
                    type="primary"
                    size="large"
                    style={{
                      marginTop: "50px",
                      borderRadius: "5px",
                      background: "#04353D",
                    }}
                  >
                    Lihat Topik <ArrowRightOutlined />
                  </Button>
                </div>
                <div>
                  <Image width={276} src={LogoHead} preview={false} />
                </div>
              </div>
              <div className="counter-box">
                <div
                  className="counter-box-content"
                  style={{
                    background:
                      "linear-gradient(1.62deg, #222222 -5.17%, #969696 119.13%)",
                  }}
                >
                  <div
                    className="tittle-box-content"
                    style={{ color: "white" }}
                  >
                    Users
                    <span
                      className="body-box-content"
                      style={{ color: "white" }}
                    >
                      351
                    </span>
                  </div>
                  <Image width={48} src={LogoCounterUser} preview={false} />
                </div>
                <div
                  className="counter-box-content"
                  style={{
                    background:
                      "linear-gradient(9.78deg, #0074C1 21.79%, #88B7D5 118.89%)",
                    color: "white",
                  }}
                >
                  <div className="tittle-box-content">
                    Thread
                    <span className="body-box-content">10000</span>
                  </div>
                  <Image width={48} src={LogoCounterThread} preview={false} />
                </div>
                <div
                  className="counter-box-content"
                  style={{
                    background:
                      "linear-gradient(28.35deg, #561600 13.02%, #D39B88 101.86%)",
                    color: "white",
                  }}
                >
                  <div className="tittle-box-content">
                    Report
                    <span className="body-box-content">5221</span>
                  </div>
                  <Image width={48} src={LogoCounterReport} preview={false} />
                </div>
              </div>
            </div>
            <div
              className="group-information"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="content-information">
                <span className="title-content-information">
                  <Title level={4}>Top Topic</Title>
                </span>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0" }}
                >
                  #1 Education
                </div>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0" }}
                >
                  #2 Business
                </div>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0" }}
                >
                  #3 Technology
                </div>
              </div>
              <div className="content-information">
                <span className="title-content-information">
                  <Title level={4}>Top Thread</Title>
                </span>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0", height: "auto" }}
                >
                  Lorem ipsum dolor sit amet.
                </div>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0", height: "auto" }}
                >
                  Lorem ipsum dolor sit amet.
                </div>
                <div
                  className="body-card-information"
                  style={{ margin: "10px 0", height: "auto" }}
                >
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainDashboard;
