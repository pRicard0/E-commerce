import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface productState {
    amountOfProducts: number
}

const initialState: productState = {
    amountOfProducts: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.amountOfProducts += action.payload
        },
        deleteAmount: (state) => {
            state.amountOfProducts = 0
        }
    }
})


export const { incrementByAmount, deleteAmount } = productSlice.actions
export default productSlice.reducer