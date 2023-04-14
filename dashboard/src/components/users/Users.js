import React, { useState } from 'react'
import './Users.scss'
import DataTable from '../dataTable/DataTable'
import UserInfo from './UserInfo';
import { Grid } from '@mui/material';


const Users = (props) => {
    const rowsList = props.userData.map(({ id, username, img }) => ({ id, username, img }));
    const [userData, setUserData] = useState(rowsList);
    const [showDetails, setShowDetails] = useState(null);
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
        setUserData(rowsList);
        setShowDetails(false);
    }
    const showDetailsHandler = (id) => {
        const usersData = [...userData];
        const userIndex = usersData.findIndex(user => user.id === id);
        setUserData(usersData[userIndex]);
        setShowDetails(true);
    }
    return (
        <div className='userContainer'>
            <Grid container>
                <Grid className='borderRight' item xs={8} md={10}>
                    <h2 className='userTitle'>Nodal Users Information</h2>
                </Grid>
                <Grid className='borderRight' item xs={8} md={10}>
                    <button className="viewButton">Add New User <span> &nbsb; +</span></button>
                </Grid>
            </Grid>

            {!showDetails && <DataTable rowData={rowsList} columnData={userColumns} pageSize={5} />}
            {showDetails && <UserInfo goBack={showTable} data={userData} />}
        </div>

    )
}

export default Users