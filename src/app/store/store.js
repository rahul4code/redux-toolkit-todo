import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "../counterSlices";

export const store=configureStore({
    reducer:{counter:counterSlices}
})