import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.scss'
import { regionList } from '../../region'

const SideNav = (props) => {
    const itemList = [...regionList];
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/'><span className="logo">Telecom</span></Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {itemList.map(({ id, state, circles }) => (
                        <div key={id}> <h3 className="title">{state}</h3>
                            {circles.map(({ id, title }) => <li key={id} id={id} onClick={() => props.updateChart(id)}><span>{title}</span></li>)}
                        </div>
                    ))}

                    <hr />

                    <h3 className="title users">Users</h3>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <span>Users</span>
                        </li>
                    </Link>

                </ul>
            </div>

        </div>
    )
}

export default SideNav