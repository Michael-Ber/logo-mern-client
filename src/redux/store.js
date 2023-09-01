import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/AuthSlice";
import goodsSlice from "./goods/GoodsSlice"; 

export const store = configureStore({
     reducer: { authSlice, goodsSlice }
})
