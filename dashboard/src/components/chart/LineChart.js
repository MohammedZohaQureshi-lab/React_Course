import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './Chart.scss'


const DrawLineChart = ({ chartData, title }) => {
    const sampleData = [
        { name: "Week 1", total: 1200 },
        { name: "Week 2", total: 2100 },
        { name: "Week 3", total: 800 },
        { name: "Week 4", total: 1600 },
        { name: "Week 5", total: 900 },
        { name: "Week 6", total: 1700 },
    ];
    const data = chartData || sampleData;
    return (
        <div className='chartsContainer'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="open" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="closed" stroke="black" />
                    <Line type="monotone" dataKey="pending" stroke="green" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DrawLineChart