import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Harrasment",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Violation",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Child Abuse",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Spam",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Annoying",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  }
];

export const DetailsChart = () => {
    return (
        <ComposedChart
        style={{ 
          'display' : 'flex',
         }}
          className="chart-user"
          layout="vertical"
          width={740}
          height={180}
          data={data}
          margin={{ 
            bottom: 30
           }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          {/* <Legend layout="horizontal" verticalAlign="middle" align="right" height={90} width={10}/> */}
          <Bar dataKey="pv" fill="#0074C1" className="bar-size"/>
        </ComposedChart>
      );
};
