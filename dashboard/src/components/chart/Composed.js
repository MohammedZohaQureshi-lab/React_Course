import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from "recharts";
import './Chart.scss'
import { useState } from "react";
import SingleBarChart from "./SingleLineChart";

const initialData = [
    { name: "Sample A", open: 590, closed: 800, total: 1400, pending: 490 },
    { name: "Sample B", open: 868, closed: 967, total: 1506, pending: 590 },
    { name: "Sample C", open: 1397, closed: 1098, total: 989, pending: 350 },
    { name: "Sample D", open: 1480, closed: 1200, total: 1228, pending: 480 },
    { name: "Sample E", open: 1520, closed: 1108, total: 1100, pending: 460 },
    { name: "Sample F", open: 1400, closed: 680, total: 1700, pending: 380 }
];
const detailData = [{ week: "Week 1", total: 1200, open: 100, closed: 100, pending: 800 },
{ week: "Week 2", total: 2010, open: 10, closed: 1400, pending: 600 },
{ week: "Week 3", total: 800, open: 400, closed: 300, pending: 100 },
{ week: "Week 4", total: 1600, open: 1000, closed: 150, pending: 250 },
{ week: "Week 5", total: 900, open: 50, closed: 150, pending: 600 }]

const Composed = ({ chartData, title }) => {
    const data = chartData || initialData;
    const [toggle, setToggle] = useState(false);
    const [newData, setNewData] = useState([])
    const showBarDetails = (event) => {
        setToggle(true);
        debugger;
        setNewData(event.routeData)
    }
    return (
        <>
            {!toggle && <div className='chartsContainer'>
                <div className="title">{title}</div>
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="open" barSize={20} fill="#413ea0" onClick={showBarDetails}   />
                        <Line type="monotone" dataKey="closed" stroke="#ff7300" />
                        <Scatter dataKey="pending" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>}
            {toggle && <SingleBarChart chartData={newData} title='Month Detail Chart' />}
        </>

    );
}


export default Composed