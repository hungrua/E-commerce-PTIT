import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Hero from "../components/Route/Hero/Hero";
import Services from "../components/Route/Services/Services";
import ProductCategories from "../components/Route/ProductCategories/ProductCategories";
import Products from "../components/Route/Products/Products";
import IntroBrands from "../components/Route/IntroBrands/IntroBrands";
import Consultation from "../components/Route/Consultation/Consultation";
import News from "../components/Route/News/News";
import Vouchers from "../components/Route/Vouchers/Vouchers";
const HomePage = () => {
  return (
    <div className="font-Roboto">
      <Header />
      <div className="bg-[#f6f6f6]">
        <Hero />
        <Vouchers/>
        <Services />
        <ProductCategories />
        <Products />
        {/* <News /> */}
        <IntroBrands />
        <Consultation />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
