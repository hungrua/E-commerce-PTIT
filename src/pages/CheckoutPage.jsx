import React from 'react';
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Checkout from "../components/Route/Checkout/Checkout"

const CheckoutPage = () => {
    return (
        <div>
            <Header/>
            <Checkout/>
            <Footer/>
        </div>
    );
};

export default CheckoutPage;