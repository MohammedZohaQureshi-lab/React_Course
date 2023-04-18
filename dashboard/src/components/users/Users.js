import React from 'react'
import './Users.scss'
import DataTable from '../dataTable/DataTable'
import UserInfo from './UserInfo';
import { Grid } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/slice-usersReducer';


const Users = ({ userData }) => {
    const useRows = userData.map(({ id, username, img }) => ({ id, username, img }));
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
                return (<button className="viewButton" onClick={() => showUserDetails(params.row.id)}>View</button>)
            },
        }
    ]
    const dispatch = useDispatch()
    const showToggle = useSelector(state => state.users.userDetails);
    const userId = useSelector(state => state.users.userId);
    let newUserData = [];

    if (showToggle) {
        const userIndex = userData.findIndex(user => user.id === userId);
        newUserData = userData[userIndex];
    }

    const showUserDetails = (identifier) => dispatch(usersActions.showInfo({ id: identifier }));
    const showUsersList = () => dispatch(usersActions.showList());



    return (
        <div className='userContainer'>
            <Grid container>
                <Grid item xs={9} md={11}>
                    <h2 className='userTitle'>Nodal Users Information</h2>
                </Grid>
                {showToggle && <Grid item xs={3} md={1}>
                    <button className='primary back withIcon' onClick={showUsersList}><ArrowCircleLeftOutlinedIcon /></button>
                </Grid>}
            </Grid>

            {!showToggle && <DataTable rowData={useRows} columnData={userColumns} pageSize={5} />}
            {showToggle && <UserInfo goBack={showUsersList} data={newUserData} />}
        </div>

    )
}

export default Users