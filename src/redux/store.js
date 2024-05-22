import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducer/UserSlice'
import categorySlice from "./reducer/CategorySlice";
import voucherSlice from "./reducer/VoucherSlice";
import productSlice from "./reducer/ProductSlice";
import promotionSlice from "./reducer/PromotionSlice";
import supplierSlice from "./reducer/SupplierSlice";
import cartSlice from "./reducer/CartSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        category: categorySlice.reducer,
        voucher: voucherSlice.reducer,
        product: productSlice.reducer,
        promotion: promotionSlice.reducer,
        supplier :supplierSlice.reducer,
        cart : cartSlice.reducer
    }
})

export default store