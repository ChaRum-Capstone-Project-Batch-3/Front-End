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
  getItem("Manage Users", "2", <UserOutlined />),
  getItem("Manage Threads", "3", <ContainerOutlined />),
  getItem("Setting", "4", <SettingOutlined />, [
    getItem("Logout", "5", <LogoutOutlined />),
  ]),
];
