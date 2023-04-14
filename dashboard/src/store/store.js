import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice-usersReducerr'
import chartReducer from './slice-chartReducerr'
import regionReducer from './slice-regionReducerer'

const store = configureStore({
    reducer: {
        users: usersReducer,
        charts: chartReducer,
        region: regionReducer
    },
})

export default store