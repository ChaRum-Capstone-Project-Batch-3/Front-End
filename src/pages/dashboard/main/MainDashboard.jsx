import { Button, Image, Typography } from "antd";
import React from "react";
import { ArrowRightOutlined, EllipsisOutlined } from "@ant-design/icons";

import LogoHead from "../img/admin-header.png";
import LogoCounterUser from "../img/counter-users.png";
import LogoCounterThread from "../img/counter-thread.png";
import LogoCounterReport from "../img/counter-report.png";
import LogoEducation from "../img/education.png";
import LogoMovie from "../img/movie.png";
import LogoBusiness from "../img/bussines.png";
const { Title } = Typography;

const MainDashboard = () => {
  return (
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
            <span className="title-head">Hello Vinka!</span>
            <p className="body-head">
              Tahukah kamu literasi digital masih kurang di masyarkat, maka dari
              itu buat lebih banyak topik untuk menjangkau diskusi lebih banyak
              lagi sekarang juga
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
            <div className="tittle-box-content" style={{ color: "white" }}>
              Users
              <span className="body-box-content" style={{ color: "white" }}>
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
          <div className="title-content-information">
            <Title level={4}>Top Topic</Title>
            <div className="drop-down-topic">
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              background: "rgba(239, 183, 0, 1)",
              color: "white",
              fontWeight: "bolder",
              textShadow: "1px 1px black",
            }}
          >
            <span
              style={{
                margin: "0 5px",
                fontWeight: "bolder",
              }}
            >
              #1
            </span>
            Education
            <Image preview={false} width={65} src={LogoEducation} />
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              background: "rgba(129, 129, 129, 1)",
              fontWeight: "bolder",
              color: "white",
              textShadow: "1px 1px black",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                margin: "0 5px",
              }}
            >
              #2
            </span>
            Bussines
            <Image preview={false} width={65} src={LogoBusiness} />
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              background: "rgba(45, 11, 0, 1)",
              fontWeight: "bolder",
              color: "white",
              textShadow: "2px 2px black",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                margin: "0 5px",
              }}
            >
              #3
            </span>
            Movie
            <Image preview={false} width={65} src={LogoMovie} />
          </div>
        </div>
        <div className="content-information">
          <div className="title-content-information">
            <Title level={4}>Top Thread</Title>
            <div className="drop-down-topic">
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              height: "auto",
              justifyContent: "start",
            }}
          >
            Putin sakit kepala, Karena ini !!
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              height: "auto",
              justifyContent: "start",
            }}
          >
            Kenapa baju ada 4 lubang ?
          </div>
          <div
            className="body-card-information"
            style={{
              margin: "10px 0",
              height: "auto",
              justifyContent: "start",
            }}
          >
            Kenapa orang berjalan dengan kaki bukan tangan ?
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
