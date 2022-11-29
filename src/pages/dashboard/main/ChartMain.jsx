import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  { name: "January", users: 20, thread: 50, report: 120 },
  { name: "Febuary", users: 70, thread: 40, report: 100 },
  { name: "March", users: 100, thread: 400, report: 101 },
  { name: "April", users: 120, thread: 200, report: 190 },
  { name: "Mei", users: 110, thread: 90, report: 110 },
  { name: "June", users: 200, thread: 60, report: 310 },
];
const ChartMain = () => {
  return (
    <LineChart
      width={800}
      height={300}
      data={data}
      style={{ margin: "20px 0" }}
    >
      <Line type="monotone" dataKey="users" stroke="#2196f3" strokeWidth={3} />
      <Line type="monotone" dataKey="thread" stroke="red" strokeWidth={3} />
      <Line type="monotone" dataKey="report" stroke="orange" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default ChartMain;
