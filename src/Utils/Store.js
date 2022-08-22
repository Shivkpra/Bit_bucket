import { configureStore } from "@reduxjs/toolkit";
import product from "../modules/reducer";

export const store = configureStore({
    reducer: {product : product},
})