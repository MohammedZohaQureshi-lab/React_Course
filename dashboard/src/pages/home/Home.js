import React from 'react';
import './Home.scss'
import SideNav from '../../components/sidenav/SideNav';
import Nav from '../../components/nav/Nav';
import DrawLineChart from '../../components/lineChart/LineChart';
import Chart from '../../components/chart/Chart';
import Composed from '../../components/chart/Composed';



const Home = () => {
    const data = [
        { name: "January", total: 1000, open: 200, closed: 450, pending: 350 },
        { name: "February", total: 500, open: 300, closed: 50, pending: 150 },
        { name: "March", total: 800, open: 200, closed: 300, pending: 300 },
        { name: "April", total: 1275, open: 475, closed: 500, pending: 300 },
        { name: "May", total: 240, open: 100, closed: 40, pending: 100 },
        { name: "June", total: 500, open: 150, closed: 100, pending: 150 }
    ]
    return (
        <div className='home'>
            <SideNav />
            <div className='homeContainer'>
                <Nav />
                <div className='charts'>
                    <Composed chartData={data} />
                    {/* <Chart /> */}
                    <DrawLineChart />
                </div>

            </div>
        </div>
    )
}

export default Home