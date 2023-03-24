import { createStore } from 'redux';
const initialState = { count: 0, showCount: true };
const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') return { count: state.count + 1, showCount: state.showCount }
    if (action.type === 'INCREASE') return { count: state.count + action.amount, showCount: state.showCount };
    if (action.type === 'DECREMENT') return { count: state.count - 1, showCount: state.showCount }
    if (action.type === 'TOGGLE_COUNT') return { showCount: !state.showCount, count: state.count };
    if (action.type === 'RESET') return { count: 0, showCount: true };
    return state
}
const store = createStore(counterReducer)
export default store;