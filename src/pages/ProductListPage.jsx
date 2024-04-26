import React from "react";
import Header from "../components/Layout/Header/Header";
import Filter from "../components/Route/Filter/Filter";
import BreadScrumb from "../components/Route/BreadScrumb/BreadScrumb";
import ProductsGrid from "../components/Route/ProductsGrid/ProductsGrid";
import Footer from "../components/Layout/Footer/Footer";
import ViewedProduct from "../components/Route/ViewedProducts/ViewedProducts";

const ProductListPage = () => {
    return (
        <div>
            <Header />
            <div className="px-[62px] pt-2.5 bg-[#f6f6f6]">
                <BreadScrumb />
                <div className="flex">
                    <Filter />
                    <ProductsGrid />
                </div>
                <div className="mt-5">
                    <div className="text-2xl font-bold">
                        Mô tả nhóm sản phẩm
                    </div>
                    <p className="pt-5"></p>
                </div>
                <ViewedProduct />
            </div>
            <Footer />

        </div>

    )
}
export default ProductListPage;