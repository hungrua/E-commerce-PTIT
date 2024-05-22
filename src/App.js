import "./App.css";
import React, { useState, useEffect } from "react";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ShopsPage,
  ProductDetailPage,
  CartPage,
  ProductListPage,
  UserAccountPage
} from "./routes/Routes.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Payment from "./components/Payment/Payment.jsx";
import Supplier from "./pages/admin/Supplier.jsx";
import Voucher from "./components/Route/Voucher/Voucher.jsx";
import SearchProducts from "./pages/SearchProductsPage.jsx";
import SearchProductsPage from "./pages/SearchProductsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import {getUser} from "./redux/reducer/UserSlice.jsx"

const App = () => {
  const user = getUser();
  console.log(user )
  return (
    <Provider store={store}>
      <Routes> 
        {
          user !== null ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/cua-hang" element={<ShopsPage />} />
              <Route path="/san-pham/:id" element={<ProductDetailPage />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/loai-san-pham/:category" element={<ProductListPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/account" element={<UserAccountPage />} />
              <Route path="/order-status/:id" element={<UserAccountPage />} />
              <Route path="/search" element={<SearchProductsPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/test" element={<NotFoundPage />} />
              {
                user.role === 'ADMIN' && (
                  <Route path="/admin/*" element={<AdminHomePage />} />
                )
              }
               <Route exact path='/*' element={<NotFoundPage />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<LoginPage/>} />
              <Route exact path="/sign-up" element={<SignupPage />} />
            </>
          )
        }

      </Routes>
    </Provider >
  );
};

export default App;
