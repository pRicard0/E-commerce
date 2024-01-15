import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incrementByAmount } from "./productSlice";

interface warningState {
    productIncreasedAmount: number   
}

const initialState: warningState = {
    productIncreasedAmount: 0
}

const warningSlice = createSlice({
    name: 'warning',
    initialState,
    reducers: {
        removeAmount: (state) => {
            state.productIncreasedAmount = 0
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action: PayloadAction<number>) => {
            state.productIncreasedAmount += action.payload
        })
    }
})

export const { removeAmount } = warningSlice.actions
export default warningSlice.reducer

