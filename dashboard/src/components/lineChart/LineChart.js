import "./LineChart.scss";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
    { week: "Week 1", open: 1200, closed: 600 },
    { week: "Week 2", open: 200, closed: 1600 },
    { week: "Week 3", open: 800, closed: 100 },
    { week: "Week 4", open: 1600, closed: 600 },
    { week: "Week 5", open: 90, closed: 10 }
];


const DrawLineChart = () => {
    return (
        <div className='chartsContainer'>
            <div className="title">Tickets Count for this Month</div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="closed" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DrawLineChart