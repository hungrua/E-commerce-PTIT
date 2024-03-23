import "./App.css";
import React from "react";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ShopsPage,
  ProductDetailPage,
  BreadScrumb
} from "./routes/Routes.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage.jsx";
import ProductsGrid from "./components/Route/ProductsGrid/ProductsGrid.jsx";

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
        <Route path="test" element={<ProductsGrid/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
