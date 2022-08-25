import {createSlice} from '@reduxjs/toolkit';

const initialState={firstName:'',lastName:''}

const userInfoSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        getUserInfo(state){
            state.firstName='Rahul';
            state.lastName='Gupta'
        }
    }
})

export const {getUserInfo}=userInfoSlice.actions;
export default userInfoSlice.reducer;

