import React, { useState } from 'react';
import './Home.scss'
import SideNav from '../../components/nav/SideNav';
import Nav from '../../components/nav/Nav';
import Composed from '../../components/chart/Composed';
import Users from '../../components/users/Users';
import DrawLineChart from '../../components/chart/LineChart';
import { circleData, trendData } from '../../region';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/slice-usersReducer';
import { chartActions } from '../../store/slice-chartReducer';



const Home = () => {
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users.userData);
    const { chartTitle, trendTitle, tickets: chartData, trending: trendChart } = useSelector(state => state.charts);
    const [viewChartDetails, setViewChartDetails] = useState(false);

    const chartHandler = (id) => {
        const { dataArray: ticketsData, name: circleName, users: userData } = getData(circleData, id);
        const { dataArray: trendingData, name: regionName } = getData(trendData, id);
        dispatch(chartActions.updateCharts({
            tickets: ticketsData,
            trending: trendingData,
            trendTitle: `Last Six Months Trend in ${regionName} Region`,
            chartTitle: `Overall Ticket Count Current Month in ${circleName} Region`
        }));
        dispatch(usersActions.updateUsers({ updateInfo: false, userList: userData }));
        setViewChartDetails(false);
    }

    const showChartDetails = () => {
        setViewChartDetails(true);
    }

    const getData = (paramsArray, identifier) => {
        const params = [...paramsArray];
        const paramsIndex = params.findIndex(({ id }) => id === identifier);
        const { tickets, circle, users } = params[paramsIndex];
        return { name: circle, dataArray: tickets, users };
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
                                        <Composed chartData={trendChart} title={trendTitle} onDetailsClick={showChartDetails} viewChartDetails={viewChartDetails} />
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
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home