import { Header } from "antd/es/layout/layout";
import "./LandingPage.css";
import React from "react";
import logo from "./img/logo-header.png";
import { Button, Image } from "antd";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <div
        className="nav-content"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="nav-logo">
          <Image width={120} src={logo} preview={false} />
        </div>
        <div className="nav-list-menu">
          <ul style={{ display: "flex", gap: "30px" }}>
            <li>Home</li>
            <li>Feature</li>
            <li>About</li>
            <li>Download</li>
            <li>Our Team</li>
          </ul>
        </div>
        <Button
          style={{ background: "white", color: "black" }}
          onClick={() => navigate("/login")}
          type="primary"
        >
          Login
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
