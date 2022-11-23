import {
  UserOutlined,
  PieChartOutlined,
  SettingOutlined,
  ContainerOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const Items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Manage Threads", "2", <ContainerOutlined />),
  getItem("Manage Users", "3", <UserOutlined />),
  getItem("Setting", "4", <SettingOutlined />, [
    getItem("Logout", "5", <LogoutOutlined />),
  ]),
];
