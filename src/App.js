import "./App.css";
import React from "react";
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
import { Routes, Route,BrowserRouter } from "react-router-dom";
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

const App = () => {
  
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/cua-hang" element={<ShopsPage />} />
        <Route path="/san-pham/:id" element={<ProductDetailPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/loai-san-pham/:category" element={<ProductListPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/account" element={<UserAccountPage/>}/>
        <Route path="/order-status/:id" element={<UserAccountPage/>}/>
        <Route path="/search" element={<SearchProductsPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/test" element={<NotFoundPage/>}/>
      </Routes>
    </Provider>
  );
};

export default App;
