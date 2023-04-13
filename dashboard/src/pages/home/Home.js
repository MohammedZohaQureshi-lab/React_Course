import React, { useState } from 'react';
import './Home.scss'
import SideNav from '../../components/sidenav/SideNav';
import Nav from '../../components/nav/Nav';
import Composed from '../../components/chart/Composed';
import Users from '../users/Users';
import { circleData, trendData, initialCircleData, initialTrendData } from '../../region';
import DrawLineChart from '../../components/chart/LineChart';



const Home = () => {
    const [chartData, setChartData] = useState(initialCircleData);
    const [trendChart, setTrendChart] = useState(initialTrendData)
    let chartTitle = "Overall Ticket Count Month";
    let trendTitle = "Last Six Months Trend"


    const getData = (paramsArray, identifier) => {
        const params = [...paramsArray];
        const paramsIndex = params.findIndex(({ id }) => id === identifier);
        const { tickets, circle } = params[paramsIndex];
        return {
            name: circle,
            dataArray: tickets
        }
    }
    const chartHandler = (id) => {
        const { dataArray: ticketsData, name: circleName } = getData(circleData, id);
        const { dataArray: trendingData, name: regionName } = getData(trendData, id);
        chartTitle = `Overall Ticket Count Current Month in ${circleName} Region`;
        trendTitle = `Last Six Months Trend in ${regionName} Region`
        setChartData(ticketsData);
        setTrendChart(trendingData);
    }
    return (
        <div className='home'>
            <SideNav updateChart={chartHandler} />
            <div className='homeContainer'>
                <Nav />
                <div className='content'>
                    <DrawLineChart chartData={chartData} title={chartTitle} />
                    <div className='flexContainer'>
                        <Users isPage={false} />
                        <Composed chartData={trendChart} title={trendTitle} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home