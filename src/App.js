import "./App.css";
import React from "react";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ShopsPage,
  ProductDetailPage,
  CartPage, 
  ProductListPage
} from "./routes/Routes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
