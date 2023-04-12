import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.scss'

const SideNav = () => {
    const itemList = [
        {
            state: "Maharashtra",
            circles: [{ id: "mah1", title: "Mumbai" }, { id: "mah2", title: "Pune" }, { id: "mah3", title: "Satara" }]
        },
        {
            state: "Gujrat",
            circles: [{ id: "guj1", title: "Surat" }, { id: "guj2", title: "Ahemadabad" }, { id: "guj3", title: "Navsari" }]
        },
        {
            state: "Kashmir",
            circles: [{ id: "kas1", title: "Srinagar" }, { id: "kas2", title: "Gulmarg" }, { id: "kas3", title: "Sonmarg" }]
        }
    ];
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Telecom Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {itemList.map(({ state, circles }) => (
                        <> <h3 className="title">{state}</h3>
                            {circles.map(({ id, title }) => <li key={id} id={id}><span>{title}</span></li>)}
                        </>
                    ))}
                    <h3 className="title">Users</h3>
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