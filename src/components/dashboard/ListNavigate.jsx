import {
  UserOutlined,
  PieChartOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
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
  getItem(<Link to="/dashboard">Dashboard</Link>, "1", <PieChartOutlined />),
  getItem(
    <Link to="/dashboard/thread">Manage Threads</Link>,
    "2",
    <ContainerOutlined />
  ),
  getItem(
    <Link to="/dashboard/users">Manage Users</Link>,
    "3",
    <UserOutlined />
  ),
  getItem(
    <span style={{ color: "red" }}>Logout</span>,
    "4",
    <LogoutOutlined style={{ color: "red" }} />
  ),
];
