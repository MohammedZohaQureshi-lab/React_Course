import { createSlice } from "@reduxjs/toolkit";
import { initialCircle } from '../region';
const { users: initialCircleUsers } = initialCircle;
const usersReducer = createSlice({
    name: 'users',
    initialState: { userData: initialCircleUsers, userDetails: false, userId: '' },
    reducers: {
        showInfo(state, action) {           
            state.userId = action.payload.id;
            state.userDetails = !state.userDetails;
        },
        updateUsers(state, action){
            state.userData=action.payload.userList;
            state.userDetails = action.payload.updateInfo;
        },
        showList(state){
            state.userDetails = false;
        }
    }
})

export const usersActions = usersReducer.actions
export default usersReducer;