import {
  UserOutlined,
  PieChartOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Cookies from "js-cookie";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: `Are you sure want logout?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Logout",
              text: "You has been logout!",
              timer: 2000,
            });
            Cookies.remove("token");
            window.location.reload();
          }
        });
      }}
    >
      Logout
    </span>,
    "4",
    <LogoutOutlined className="logout-btn" />
  ),
];
