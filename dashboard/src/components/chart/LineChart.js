import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './Chart.scss'


const DrawLineChart = ({ chartData, title }) => {
    const sampleData = [
        { name: "JAN", total: 1200 },
        { name: "FEB", total: 2100 },
        { name: "MAR", total: 800 },
        { name: "APR", total: 1600 },
        { name: "MAY", total: 900 },
        { name: "JUN", total: 1700 },
    ];
    const data = chartData || sampleData;
    return (
        <div className='chartsContainer'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" padding={{ left: 30, right: 30 }} />
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