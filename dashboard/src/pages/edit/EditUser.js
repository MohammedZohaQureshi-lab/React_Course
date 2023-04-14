import { Grid } from '@mui/material'
import React from 'react'
import SideNav from '../../components/nav/SideNav'
import Nav from '../../components/nav/Nav'

const EditUser = () => {
    return (
        <>
            <Grid container>
                <Grid className='borderRight' item xs={6} md={2}>
                    <SideNav />
                </Grid>
                <Grid item xs={6} md={10}>
                    <Nav />

                    <div className='pageContent'>

                        UserDetails
                    </div>


                </Grid>
            </Grid>
        </>
    )
}

export default EditUser
