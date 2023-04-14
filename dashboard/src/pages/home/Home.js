import React, { useState } from 'react';
import './Home.scss'
import SideNav from '../../components/nav/SideNav';
import Nav from '../../components/nav/Nav';
import Composed from '../../components/chart/Composed';
import Users from '../../components/users/Users';
import DrawLineChart from '../../components/chart/LineChart';
import { circleData, trendData, initialCircleData, initialTrendData } from '../../region';
import { Grid } from '@mui/material';



const Home = () => {
    
    const { tickets: initialCircleTickets, users: initialCircleUsers } = initialCircleData;
    const [chartData, setChartData] = useState(initialCircleTickets);
    const [trendChart, setTrendChart] = useState(initialTrendData);
    const [usersData, setUserData] = useState(initialCircleUsers);
    let chartTitle = "Overall Ticket Count Month";
    let trendTitle = "Last Six Months Trend";

    const chartHandler = (id) => {
        const { dataArray: ticketsData, name: circleName, users: userData } = getData(circleData, id);
        const { dataArray: trendingData, name: regionName } = getData(trendData, id);
        chartTitle = `Overall Ticket Count Current Month in ${circleName} Region`;
        trendTitle = `Last Six Months Trend in ${regionName} Region`
        setChartData(ticketsData);
        setTrendChart(trendingData);
        setUserData(userData);
    }

    const getData = (paramsArray, identifier) => {
        const params = [...paramsArray];
        const paramsIndex = params.findIndex(({ id }) => id === identifier);
        const { tickets, circle, users } = params[paramsIndex];
        return {
            name: circle,
            dataArray: tickets,
            users
        }
    }


    return (
        <div className='home'>
            <div className='homeContainer'>
                <Grid container>
                    <Grid className='borderRight' item xs={6} md={2}>
                        <SideNav updateChart={chartHandler} />
                    </Grid>
                    <Grid item xs={6} md={10}>
                        <Nav />
                        {/* Charts */}
                        <div className='pageContent'>

                            <div className='topContainer'>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <DrawLineChart chartData={chartData} title={chartTitle} />
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Composed chartData={trendChart} title={trendTitle} />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='bottomContainer'>
                                <Grid container>
                                    <Grid item xs={12} md={12}>
                                        <Users userData={usersData} />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        {/* User */}

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home