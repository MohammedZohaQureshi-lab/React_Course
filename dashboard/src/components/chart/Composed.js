import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from "recharts";
import './Chart.scss'

const initialData = [
    { name: "Sample A", open: 590, closed: 800, total: 1400, pending: 490 },
    { name: "Sample B", open: 868, closed: 967, total: 1506, pending: 590 },
    { name: "Sample C", open: 1397, closed: 1098, total: 989, pending: 350 },
    { name: "Sample D", open: 1480, closed: 1200, total: 1228, pending: 480 },
    { name: "Sample E", open: 1520, closed: 1108, total: 1100, pending: 460 },
    { name: "Sample F", open: 1400, closed: 680, total: 1700, pending: 380 }
];

const Composed = ({ chartData, title }) => {
    const data = chartData || initialData;
    return (
        <div className='chartsContainer'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
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
            </ResponsiveContainer>
        </div>

    );
}


export default Composed