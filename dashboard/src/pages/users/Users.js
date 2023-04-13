import React, { useState } from 'react'
import './Users.scss'
import SideNav from '../../components/sidenav/SideNav'
import Nav from '../../components/nav/Nav'
import DataTable from '../../components/dataTable/DataTable'
import { userColumns, userRows } from '../../datatablesource';
import UserInfo from '../../components/info/UserInfo';


let showDetails = false;
const Users = ({ isPage = true }) => {
    const rowsList = userRows.map(({ id, username, img }) => ({ id, username, img }));
    const [userDetails, setUserDetails] = useState(null)
    const showTable = () => {
        setUserDetails(false);
        showDetails = false;
    }
    const showDetailsHandler = (id) => {
        const usersData = [...userRows];
        const userIndex = usersData.findIndex(user => user.id === id);
        setUserDetails(usersData[userIndex]);
        showDetails = true;
    }
    return (
        <>
            {isPage && <div className='home'>
                <SideNav />
                <div className='homeContainer'>
                    <Nav />
                    <div className='charts'>
                        {!showDetails && <DataTable rowData={rowsList} columnData={userColumns} pageSize={5} viewDetails={showDetailsHandler} />}
                        {showDetails && <button className='primary back' onClick={showTable}><span>Back</span></button>}
                        {showDetails && <UserInfo data={userDetails} />}
                    </div>

                </div>
            </div>}
            {!isPage && <div className='userGroup'>
                {!showDetails && <DataTable rowData={rowsList} columnData={userColumns} pageSize={5} viewDetails={showDetailsHandler} />}
                {showDetails && <button className='primary back' onClick={showTable}><span>Back</span></button>}
                {showDetails && <UserInfo data={userDetails} />}
            </div>}
        </>

    )
}

export default Users