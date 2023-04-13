import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import './Chart.scss'

const Chart = ({ chartData,title }) => {
    const sampleData = [
        { name: "January", total: 1200 },
        { name: "February", total: 2100 },
        { name: "March", total: 800 },
        { name: "April", total: 1600 },
        { name: "May", total: 900 },
        { name: "June", total: 1700 },
    ];
    const data = chartData || sampleData;
    return (
        <div className='chartsContainer'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, }} >
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="open" stroke="green" fill="green)" />
                    <Area type="monotone" dataKey="closed" stroke="black" fill="black" />
                    <Area type="monotone" dataKey="pending" stroke="blue" fill="blue" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart