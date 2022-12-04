import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import React from "react";
import AboutPage from "./AboutPage";
import FeaturePage from "./FeaturePage";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

const MainLandingPage = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <HomePage />
        <FeaturePage />
        <AboutPage />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLandingPage;
