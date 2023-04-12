import React from "react";
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from "recharts";

const initialData = [
    { name: "Sample A", open: 590, closed: 800, total: 1400, cnt: 490 },
    { name: "Sample B", open: 868, closed: 967, total: 1506, cnt: 590 },
    { name: "Sample C", open: 1397, closed: 1098, total: 989, cnt: 350 },
    { name: "Sample D", open: 1480, closed: 1200, total: 1228, cnt: 480 },
    { name: "Sample E", open: 1520, closed: 1108, total: 1100, cnt: 460 },
    { name: "Sample F", open: 1400, closed: 680, total: 1700, cnt: 380 }
];

const Composed = ({ chartData }) => {
    const data = chartData || initialData;
    return (
        <ComposedChart width={500} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="open" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="closed" stroke="#ff7300" />
            <Scatter dataKey="pending" fill="red" />
        </ComposedChart>
    );
}


export default Composed