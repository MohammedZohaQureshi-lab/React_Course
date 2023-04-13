import React from 'react'
import './SideNav.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from '@mui/icons-material/Assessment';
import { regionList } from '../../region'

const SideNav = (props) => {
    const itemList = [...regionList];
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"><DashboardIcon className="icon" />LMI Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {itemList.map(({ id, state, circles }) => (
                        <div className='listItem' role='listitem' key={id}> <h3 className="title">{state}</h3>
                            {circles.map(({ id, title }) => <li key={id} id={id} onClick={() => props.updateChart(id)}><AssessmentIcon className="icon" /><span>{title}</span></li>)}
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default SideNav