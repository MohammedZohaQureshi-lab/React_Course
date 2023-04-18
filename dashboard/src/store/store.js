import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slice-usersReducer'
import chartReducer from './slice-chartReducer'

const store = configureStore({
    reducer: {
        users: usersReducer.reducer,
        charts: chartReducer.reducer
    },
})

export default store