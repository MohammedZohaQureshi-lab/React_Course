import { createSlice } from "@reduxjs/toolkit";
import { initialCircle } from '../region';
const { users: initialCircleUsers } = initialCircle;
const usersReducer = createSlice({
    name: 'users',
    initialState: { userData: initialCircleUsers, userDetails: false, userId: '', pageSize: 2, pageIndex: 0 },
    reducers: {
        showInfo(state, action) {
            state.userId = action.payload.id;
            state.userDetails = !state.userDetails;
        },
        updateUsers(state, action) {
            state.userData = action.payload.userList;
            state.userDetails = action.payload.updateInfo;
        },
        showList(state) {
            state.userDetails = false;
        },
        updatePageDetails(state, action) {
            state.pageSize = action.payload.currentPageSize === undefined ? state.pageSize : action.payload.currentPageSize;
            state.pageIndex = action.payload.currentPageIndex;
        }
    }
})

export const usersActions = usersReducer.actions
export default usersReducer;