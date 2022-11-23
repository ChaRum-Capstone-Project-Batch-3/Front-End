import { Layout, Menu, Image, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Items } from "./ListNavigate";
import "./Dashboard.css";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

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
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={Items}
        />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: !collapsed.status ? "200px" : "75px" }}
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
          <div style={{ textAlign: "start" }}>
            <div className="header-title" style={{ margin: "0 0 10px 0" }}>
              Dashboard
            </div>
          </div>
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
                  <span className="title-head">Hello Admin</span>
                  <p>
                    Buat lebih banyak untuk menjangkau diskusi lebih banyak lagi
                    sekarang juga
                  </p>

                  <Button
                    type="primary"
                    style={{
                      marginTop: "75px",
                      background: "#B1B1B1",
                    }}
                  >
                    Lihat Topik <ArrowRightOutlined />
                  </Button>
                </div>
                <div>
                  <Image
                    width={276}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={false}
                  />
                </div>
              </div>
              <div className="counter-box">
                <div className="counter-box-content">
                  <div className="tittle-box-content">
                    Users
                    <span className="body-box-content">351</span>
                  </div>
                  <Image
                    width={48}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={false}
                  />
                </div>
                <div className="counter-box-content">
                  <div className="tittle-box-content">
                    Thread
                    <span className="body-box-content">10000</span>
                  </div>
                  <Image
                    width={48}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={false}
                  />
                </div>
                <div className="counter-box-content">
                  <div className="tittle-box-content">
                    Report
                    <span className="body-box-content">5221</span>
                  </div>
                  <Image
                    width={48}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={false}
                  />
                </div>
              </div>
            </div>
            <div
              className="group-information"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="content-information"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  width: "auto",
                  margin: "0 0 10px 0",
                  padding: "10px",
                }}
              >
                <span className="title-content-information">Top Topic</span>
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
              <div
                className="content-information"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  width: "auto",
                }}
              >
                <span className="title-content-information">Top Thread</span>
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainDashboard;
