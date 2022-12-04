import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import AboutPage from "./AboutPage";
import Download from "./Download";
import FeaturePage from "./FeaturePage";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Team from "./Team";

const MainLandingPage = () => {
  return (
    <Layout style={{ overflowX: "hidden" }}>
      <Navbar />
      <Content>
        <HomePage />
        <FeaturePage />
        <AboutPage />
        <Download />
        <Team />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLandingPage;
