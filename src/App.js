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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Voucher from "./components/Route/Voucher/Voucher.jsx";
import SearchProducts from "./pages/SearchProductsPage.jsx";
import SearchProductsPage from "./pages/SearchProductsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/cua-hang" element={<ShopsPage />} />
        <Route path="/san-pham/:id" element={<ProductDetailPage />} />
        <Route path="/loai-san-pham" element={<ProductListPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/account" element={<UserAccountPage/>}/>
        <Route path="/search" element={<SearchProductsPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/test" element={<Voucher/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
