import { Image, Typography } from "antd";
import React from "react";
import "./LandingPage.css";
import LandingPageCharum from "./img/img-landing.png";
import LogoCharum from "./img/logo-charum-landing.png";

const { Title } = Typography;
const HomePage = () => {
  return (
    <div
      className="home-page"
      style={{
        display: "flex",
        padding: "112px 0 80px 0",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
      }}
    >
      <div className="home-img-phone">
        <Image width={660} src={LandingPageCharum} preview={false} />
      </div>
      <div
        className="charum-landing"
        style={{
          display: "flex",
          marginBottom: "110px",
          flexDirection: "column",
          gap: "10px",
          marginTop: "100px",
        }}
      >
        <div
          className="logo-landing"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <Image src={LogoCharum} width={80} preview={false} />
          <Title
            style={{
              color: "rgba(29, 154, 123, 1)",
              fontWeight: "700",
              fontSize: "68px",
            }}
            level={1}
          >
            Charum
          </Title>
        </div>
        <div
          className="text-landing"
          style={{ fontWeight: "600", fontSize: "20px" }}
        >
          The right place to educate yourself and spread knowledge
        </div>
      </div>
    </div>
  );
};

export default HomePage;
