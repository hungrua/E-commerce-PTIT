import "./App.css";
import React from "react";
import {
  HomePage,
  LoginPage,
  SignupPage,
  ShopsPage,
  ProductDetailPage,
} from "./routes/Routes.js";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./pages/admin/AdminHomePage.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Payment from "./components/Payment/Payment.jsx";
import Supplier from "./pages/admin/Supplier.jsx";
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
      </Routes>
    </Provider>
  );
};

export default App;
