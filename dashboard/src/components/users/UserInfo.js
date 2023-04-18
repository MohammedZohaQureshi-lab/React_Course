import { Grid } from '@mui/material';
import DrawLineChart from '../chart/LineChart';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import './UserInfo.scss'

const UserInfo = (props) => {
    const { data } = props;
    debugger;
    return (
        <div className="single">
            <div className="singleContainer">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className='userDetails'>
                            <h3 className="title">User Details</h3>
                            <div className="item">
                                <img src={data.img} alt="" className="itemImg" />
                                <div className="details">
                                    <h4 className="itemTitle">{data.username}</h4>
                                    <div className="detailItem">
                                        <span className="itemKey">Employee ID:</span>
                                        <span className="itemValue">{data.id}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">{data.email}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Phone:</span>
                                        <span className="itemValue">{data.phone}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Address:</span>
                                        <span className="itemValue">
                                            {data.address}
                                        </span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">State:</span>
                                        <span className="itemValue">{data.state}</span>
                                    </div>
                                    <div className="detailItem">
                                        <span className="itemKey">Circle:</span>
                                        <span className="itemValue">{data.circle}</span>
                                    </div>
                                </div>
                            </div>
                            <button className='primary back withIcon' onClick={props.goBack}><span><ArrowCircleLeftOutlinedIcon /></span><span>Show All Users</span></button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <DrawLineChart chartData={data.tickets} title="User Tickets Info ( Last 6 Months)" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default UserInfo


