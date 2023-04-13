import React, { useState } from 'react'
import './Users.scss'
import DataTable from '../dataTable/DataTable'

import UserInfo from '../info/UserInfo';


let showDetails = false;

const Users = ({ userData }) => {
    const rowsList = userData.map(({ id, username, img }) => ({ id, username, img }));
    const [userDetails, setUserDetails] = useState(null);
    const userColumns = [
        {
            field: "id", headerName: "Emp ID", width: 150
        },
        {
            field: "user", headerName: "Employee Name", width: 300,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "view", headerName: "View Details", width: 150,
            renderCell: (params) => {
                return (<button className="viewButton" onClick={() => showDetailsHandler(params.row.id)}>View</button>)
            },
        }
    ]
    const showTable = () => {
        setUserDetails(false);
        showDetails = false;
    }
    const showDetailsHandler = (id) => {
        const usersData = [...userData];
        const userIndex = usersData.findIndex(user => user.id === id);
        setUserDetails(usersData[userIndex]);
        showDetails = true;
    }
    return (
        <div className='userContainer'>
            <h2 className='userTitle'>Nodal Users Information</h2>
            {!showDetails && <DataTable rowData={rowsList} columnData={userColumns} pageSize={5} />}
            {showDetails && <UserInfo goBack={showTable} data={userDetails} />}
        </div>

    )
}

export default Users