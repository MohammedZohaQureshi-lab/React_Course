import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'

const ErrorPage = () => {
    const error = useRouteError()
    let title = 'An Error Occured'
    let message = 'Enter correct page path'
    debugger;
    if (error.status === 500) {
        //When manual response is sent
        //message = JSON.parse(error.data).message

        //When response is through json utility function
        message = error.data.message
    }
    if (error.status === 404) {
        title = 'Not found'
        message = "Couldn't find resource or page"
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>

    )
}

export default ErrorPage