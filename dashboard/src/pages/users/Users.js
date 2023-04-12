import React from 'react'
import SideNav from '../../components/sidenav/SideNav'
import Nav from '../../components/nav/Nav'
import Widgets from '../../components/widgets/Widgets'

const Users = () => {
    return (
        <div className='home'>
            <SideNav />
            <div className='homeContainer'>
                <Nav />
                <div className='charts'>
                    <Widgets type='user' />
                </div>

            </div>
        </div>
    )
}

export default Users