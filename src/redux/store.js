import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducer/UserSlice'
import categorySlice from "./reducer/CategorySlice";
import voucherSlice from "./reducer/VoucherSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        category: categorySlice.reducer,
        voucher: voucherSlice.reducer
    }
})

export default store