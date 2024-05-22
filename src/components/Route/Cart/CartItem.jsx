import React from 'react';
import { TiTick } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CartItem = (props) => {
    return (
        <div className="text-sm md:text-base grid grid-cols-[repeat(5,1fr)_0.5fr] lg:grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
            <div className="block md:grid col-span-2 grid-cols-[18px_1fr_2fr] lg:col-span-1 lg:grid-cols-[18px_80px_1fr] items-center gap-x-3">
                <input type="checkbox" />
                <div className="aspect-square max-w-20">
                    <img className="w-full h-full" src="/static/images/cart/amsieutoc.webp" alt="" />
                </div>
                <div className="item">
                    <div className="text-[rgb(10_104_255)] text-sm flex items-center">
                        <TiTick className="text-white bg-[rgb(10_104_255)] rounded-full mr-1" />
                        Chính hãng
                    </div>
                    <Link to="#" className="line-clamp-2">
                        Ấm Đun Siêu Tốc Inox 2 Lớp Sunhouse SHD1351 (1.8 Lít) - trông tôn việt nam
                    </Link>
                    <div className="flex items-center gap-x-1">
                        <FaTruckFast />
                        <div className="text-xs">Giao thứ 7, 06/04</div>

                    </div>
                </div>
            </div>
            <div className="font-bold">239.000đ</div>
            <div className="flex justify-start">
                <button className="border-solid border-[1px] border-[rgb(200_200_200)] cursor-pointer rounded-tl-lg rounded-bl-lg px-[6px]">-</button>
                <input type="text" className="w-8 h-[26px] text-center border-[1px] border-solid border-[rgb(200_200_200)] outline-none appearance-none" />
                <button className="border-solid border-[1px] border-[rgb(200_200_200)] cursor-pointer rounded-tr-lg rounded-br-lg px-[6px]">+</button>
            </div>
            <div className="font-bold text-[rgb(254_56-52)]">239.000đ</div>
            <button>
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;