import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";


const ProductCard = () => {
    return (
        <a href="#" className="block group bg-white rounded-[10px] shadow-[0px_2px_10px_#00000014] transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-[0px_8px_16px_#0000002f]">
            <div className="relative">
                <div className="p-2.5">
                    <img src={require("../../../images/products/basic/may-tinh-asrock-mini-pc-deskmini-x300-1.webp")}
                        alt="" />
                </div>
                <div className="absolute top-0 h-[31px] w-20 left-[-5px]"
                    style={{
                        background: "url('/static/discount.png') center no-repeat",
                        backgroundSize: "contain"
                    }}>
                    <p className="text-xs font-bold text-center text-white my-[5px]">Giảm 12%</p>

                </div>
                <div className="absolute top-[65%] right-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                    <div className="mr-2 p-1.5 rounded-full border-2 border-solid border-red text-[#f66315] hover:text-white hover:bg-[#f66315] transition-all duration-300 ease-in-out">
                        <FaCartPlus size={20} />
                    </div>
                    <div className="mt-2 mr-2 p-1.5 rounded-full border-2 border-solid border-red text-[#f66315] hover:text-red-600 hover:bg-gray-200 transition-all duration-300 ease-in-out">
                        <FaHeart size={20} />
                    </div>
                </div>

            </div>
            <div className="p-2.5 pt-0">
                <div className="group-hover:text-green-600 line-clamp-3">Mini PC ASRock DeskMini X300 - X300/B/BB/BOX/US</div>
                <div className="pb-[5px]">
                    <div className="inline-block font-medium text-green-600">
                        3.450.000đ
                    </div>
                    <div className="inline-block line-through text-sm pl-1">
                        3.990.000đ
                    </div>
                </div>
                <div className="flex justify-between flex-[2] flex-wrap lg:flex-nowrap">
                    <div className="flex justify-around flex-1">
                        <FaStar style={{ color: "#ffa534" }} />
                        <FaStar style={{ color: "#ffa534" }} />
                        <FaStar style={{ color: "#ffa534" }} />
                        <FaStar style={{ color: "#ffa534" }} />
                        <FaStar style={{ color: "#ffa534" }} />
                    </div>
                    <div className="pl-2 text-[13px]">(408 đánh giá)</div>
                </div>
            </div>
        </a>
    )
}

export default ProductCard;