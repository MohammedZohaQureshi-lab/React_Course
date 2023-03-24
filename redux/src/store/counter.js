import { createSlice } from "@reduxjs/toolkit";

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
export const countActions = countSlice.actions;
export default countSlice.reducer;