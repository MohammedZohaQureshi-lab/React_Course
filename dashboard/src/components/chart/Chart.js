import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
const Chart = () => {
    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];

    return (
        <div className='chartsContainer'>
            <div className="title">Last Six Months Trends</div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, }} >
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart