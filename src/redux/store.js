import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducer/UserSlice'
import categorySlice from "./reducer/CategorySlice";
import voucherSlice from "./reducer/VoucherSlice";
import productSlice from "./reducer/ProductSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        category: categorySlice.reducer,
        voucher: voucherSlice.reducer,
        product: productSlice.reducer
    }
})

export default store