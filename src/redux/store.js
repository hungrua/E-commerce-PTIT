import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducer/UserSlice'
import categorySlice from "./reducer/CategorySlice";
import voucherSlice from "./reducer/VoucherSlice";
import productSlice from "./reducer/ProductSlice";
import promotionSlice from "./reducer/PromotionSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        category: categorySlice.reducer,
        voucher: voucherSlice.reducer,
        product: productSlice.reducer,
        promotion: promotionSlice.reducer
    }
})

export default store