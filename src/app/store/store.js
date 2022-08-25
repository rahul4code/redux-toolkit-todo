import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "../slices/counterSlices";
import userInfoSlices from '../slices/userInfoSlices'

export const store=configureStore({
    reducer:{counter:counterSlices,
    userInfo:userInfoSlices
    }
})