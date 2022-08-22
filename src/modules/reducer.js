import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterData : "",
}

const product = createSlice({
    name: 'product',
    initialState: initialState,

    reducers: {
        filterData : (state,payload) => {
            state.filterData = payload.payload;
            console.log(state.filterData)
        }

    }
})

export default product.reducer;
export const {filterData} = product.actions