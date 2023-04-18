import React from 'react';
// import { Grid } from '@mui/material'
// import SideNav from '../../components/nav/SideNav'
// import Nav from '../../components/nav/Nav'
import ReactTable from '../../components/dataTable/ReactTable'
import { useSelector } from 'react-redux';

const EditUser = () => {
    const usersData = useSelector(state => state.users.userData);
    return <ReactTable tableData={usersData} />
}

export default EditUser
