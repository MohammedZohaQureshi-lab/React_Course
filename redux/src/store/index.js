//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { count: 0, showCount: true };
const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) { state.count++ },
        decrement(state) { state.count-- },
        increase(state, action) { state.count = state.count + action.payload },
        toggle(state) { state.showCount = !state.showCount },
        reset(state) { state.count = 0 }
    }
})

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) { state.isAuthenticated = true },
        logout(state) { state.isAuthenticated = false }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') return { count: state.count + 1, showCount: state.showCount }
//     if (action.type === 'INCREASE') return { count: state.count + action.amount, showCount: state.showCount };
//     if (action.type === 'DECREMENT') return { count: state.count - 1, showCount: state.showCount }
//     if (action.type === 'TOGGLE_COUNT') return { showCount: !state.showCount, count: state.count };
//     if (action.type === 'RESET') return { count: 0, showCount: true };
//     return state
// }
//const store = createStore(counterReducer)

const store = configureStore({
    reducer: { counter: countSlice.reducer, auth: authSlice.reducer }
})
export const countActions = countSlice.actions;
export const authActions = authSlice.actions;
export default store;