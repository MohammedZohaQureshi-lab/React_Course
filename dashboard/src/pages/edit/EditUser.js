import React from 'react';
// import { Grid } from '@mui/material'
// import SideNav from '../../components/nav/SideNav'
// import Nav from '../../components/nav/Nav'
import ReactTable from '../../components/table/ReactTable'
import { useSelector } from 'react-redux';

const EditUser = () => {
    const useRows = useSelector(state => state.users.userData);
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
                    <span><img className='userItem-avatar' alt={`${props.row.original.username} profile pic`} src={props.row.original.img} /></span>
                    <span className="userItem-title">{props.row.original.username}</span>
                </div>
            )
        },
        {
            Header: 'Email Id',
            accessor: 'email',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: '',
            Cell: (props) => <button className='button primary' onClick={() => alert(props.row.original.id)}>View</button>
        },
    ]
    return <ReactTable useRows={useRows} useColumns={useColumns} />
}

export default EditUser
