import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "../slices/counterSlices";
import userInfoSlices from '../slices/userInfoSlices'
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer=combineReducers({counter:counterSlices,
    userInfo:userInfoSlices
    })

export const store=configureStore({
    reducer: rootReducer
})