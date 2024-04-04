import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import ProductCard from "../ProductCard/ProductCard";

const ViewedProduct = () => {
    return (
        <div className="px-[15px] pb-5 rounded-[20px] line"
            style={{backgroundImage: 'linear-gradient(45deg, rgb(32, 211, 254), rgb(107, 35, 167))'}}>
                <div className="text-2xl font-bold">Sản phẩm đã xem</div>
                <div className="px-[5px] relative">
                    <button className="bg-[#f3f4f6] flex justify-center items-center text-sm absolute top-[40%] w-[50px] h-[50px] rounded-full left-[-10px] z-1 shadow-[0px_0px_15px_6px_rgba(179,179,173,0.75)] hover:bg-white">
                        <FaAnglesLeft style={{marginLeft: '-4px'}}/>
                    </button>

                    <div className="grid grid-cols-5 gap-x-5 pt-5">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <button className="bg-[#f3f4f6] flex justify-center items-center text-sm absolute top-[40%] w-[50px] h-[50px] rounded-full right-[-10px] z-1 shadow-[0px_0px_15px_6px_rgba(179,179,173,0.75)] hover:bg-white">
                        <FaAnglesRight style={{marginRight: '-4px'}}/>
                    </button>
                </div>
            </div>
    )
}
export default ViewedProduct;