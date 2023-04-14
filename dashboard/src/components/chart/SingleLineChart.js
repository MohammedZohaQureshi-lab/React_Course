import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './Chart.scss'


const SingleBarChart = ({ chartData, title }) => {
    const sampleData = [
        { week: "Week 1", total: 800, open: 400, closed: 300, pending: 100 },   
        { week: "Week 2", total: 900, open: 50, closed: 150, pending: 600 },
        { week: "Week 3", total: 1200, open: 100, closed: 100, pending: 800 },
        { week: "Week 4", total: 1600, open: 1000, closed: 150, pending: 250 },
        { week: "Week 5", total: 2010, open: 10, closed: 1400, pending: 600 },
    ];
    const data = chartData || sampleData;
    return (
        <div className='chartsContainer'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar type="monotone" dataKey="total" fill="#607D8B" />
                    <Bar type="monotone" dataKey="open" fill="#E91E63" />
                    <Bar type="monotone" dataKey="closed" fill="#009688" />
                    <Bar type="monotone" dataKey="pending" fill="#f2e46b" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SingleBarChart