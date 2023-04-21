import React from 'react'
import './Users.scss'
import UserInfo from './UserInfo';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/slice-usersReducer';
import ReactTable from '../table/ReactTable';
import { GlobalFilter } from '../table/FilterOptions';


const Users = ({ userData }) => {
    const useRows = userData.map(({ id, username, img, email }) => ({ id, username, img, email }));
    const useColumns = [
        {
            Header: 'Employee Id',
            accessor: 'id',
        },
        {
            Header: 'Employee Name',
            accessor: 'username',            
            Cell: (props) => (
                <div className='userItem'>
                    <span className='userItem-avatar'><img alt={`${props.row.original.username} profile pic`} src={props.row.original.img} /></span>
                    <span className="userItem-title">{props.row.original.username}</span>
                </div>
            ),
            Filter:GlobalFilter,
        },
        {
            Header: 'Email Id',
            accessor: 'email',
            disableFilters: true
        },
        {
            Header: 'Action',
            Cell: (props) => <button className="button primary" onClick={() => showUserDetails(props.row.original.id)}>View</button>
        },
    ]
    const dispatch = useDispatch()
    const { userId, userDetails: showToggle, pageSize, pageIndex } = useSelector(state => state.users);
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
            </Grid>

            {!showToggle && <ReactTable currentPageSize={pageSize} currentPageIndex={pageIndex} useRows={useRows} useColumns={useColumns} />}
            {showToggle && <UserInfo goBack={showUsersList} data={newUserData} />}

        </div>

    )
}

export default Users