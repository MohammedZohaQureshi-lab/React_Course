import DrawLineChart from '../chart/LineChart';

import './UserInfo.scss'

const UserInfo = (props) => {
    const { data } = props;
    return (
        <div className="single">
            <div className="singleContainer">
                <div className="top">
                    <div className="left">
                        <h1 className="title">Details</h1>
                        <div className="item">
                            <img
                                src={data.img}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{data.username}</h1>
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
                    </div>
                    <div className="right">
                        <DrawLineChart chartData={data.tickets} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo


