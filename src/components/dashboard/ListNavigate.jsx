import {
  UserOutlined,
  PieChartOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const Items = [
  getItem(
    <Link to="/dashboard" style={{ fontSize: "15px" }}>
      Dashboard
    </Link>,
    "1",
    <PieChartOutlined />
  ),
  getItem(
    <Link to="/dashboard/thread" style={{ fontSize: "15px" }}>
      Manage Threads
    </Link>,
    "2",
    <ContainerOutlined />
  ),
  getItem(
    <Link to="/dashboard/users" style={{ fontSize: "15px" }}>
      Manage Users
    </Link>,
    "3",
    <UserOutlined />
  ),
  getItem(
    <span
      onClick={() => {
        Cookies.remove("token");
      }}
    >
      <Link
        to="/login"
        style={{ color: "red", fontWeight: "400", fontSize: "14px" }}
      >
        Logout
      </Link>
    </span>,
    "4",
    <LogoutOutlined className="logout-btn" />
  ),
];
