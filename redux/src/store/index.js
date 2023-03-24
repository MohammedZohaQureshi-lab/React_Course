import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth';
import countReducer from './counter';

const store = configureStore({
    reducer: { counter: countReducer, auth: authReducer }
})

export default store;