import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice"

export const ReduxStore = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export type Rootstate = ReturnType<typeof ReduxStore.getState>
export type Dispatch = typeof ReduxStore.dispatch