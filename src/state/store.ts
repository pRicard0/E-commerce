import { configureStore } from "@reduxjs/toolkit";
import productReducer from './product/productSlice'
import warningReducer from './product/warningSlice'


export const store = configureStore({
    reducer: {
        product: productReducer,
        warning: warningReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch