import React from 'react';
import {
    FaTimes,
    FaMinus,
    FaPlus
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const CartHeader = (props) => {
    return (
        <div className="fixed z-50 right-0 w-[550px] top-[58px] translate-x-0 translate-y-0 opacity-[1] max-w-[90%] bottom-0 overflow-y-auto bg-[#fff] transition-all shadow-3">
            <div className="h-full flex flex-col">
                <div className="py-[40px] pl-[40px] pr-[30px] flex flex-col h-full relative overflow-hidden">
                    <div
                        onClick={() => props.setOpenCartList(!props.openCartList)}
                        className="absolute top-[20px] right-[20px] w-[30px] h-[30px] border border-solid border-[#031230] flex items-center justify-center cursor-pointer"
                    >
                        <FaTimes className="text-[18px] font-[400] text-[#444545] hover:text-[#f66315] transition-all" />
                    </div>
                    <p className="text-center mb-[20px] md:text-[35px] font-[700] text-[#031230] text-[27px]">
                        Giỏ hàng
                    </p>
                    <div className="pr-[12px] max-h-[400px] flex flex-col gap-y-[30px] overflow-y-auto overflow-x-hidden">
                        <div className="flex gap-[12px]">
                            <div className="w-[77px] h-[77px] shrink-0 rounded-[6px] overflow-hidden">
                                <img
                                    className="h-full object-cover max-w-[100%]"
                                    src="https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-yonex-nam-trang-ma-038-1.webp"
                                    alt=""
                                    width="300"
                                    height="372"
                                />
                            </div>
                            <div className="flex flex-col">
                                <Link
                                    to="/san-pham/id"
                                    className="no-underline text-[16px]"
                                >
                                    Quần Cầu Lông Yonex Nam Trắng
                                </Link>
                                <div className="flex mt-auto">
                                    <div className="flex gap-[20px] p-[6px] rounded-[30px] border border-solid border-[#eee]">
                                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                                            <FaMinus className="text-[14px]" />
                                        </div>
                                        <p className="text-[14px] text-[#031230]">
                                            01
                                        </p>
                                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                                            <FaPlus className="text-[14px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px] text-[#f66315] mt-auto ml-auto font-[700]">
                                <span>5.150.000đ</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-[12px] pr-[20px] mt-[50px] text-[16px] font-[700]">
                        <span className="text-[#000]">Tổng cộng</span>
                        <span className="text-[#f66315]">5.150.000đ </span>
                    </div>

                    <div className="mt-auto pr-[20px] flex gap-6">
                        <Link
                            to="/cart"
                            className="bg-[#fff] hover:bg-[#f66315] text-[#031230]  hover:text-[white] border border-solid border-[#f66315] w-full cursor-pointer relative overflow-hidden transition-all my-0 mx-auto rounded-[40px] flex items-center justify-center"
                        >
                            <span className="flex items-center justify-center py-[10px] px-[20px]">
                                <span className="leading-[1.2] text-[16px] font-[700] ">
                                    Xem giỏ hàng
                                </span>
                            </span>
                        </Link>

                        <Link
                            to="/thanh-toan"
                            className="hover:bg-[#fff] bg-[#f66315] hover:text-[#031230] text-white border border-solid border-[#f66315] w-full cursor-pointer relative overflow-hidden transition-all my-0 mx-auto rounded-[40px] flex items-center justify-center"
                        >
                            <span className="flex items-center justify-center py-[10px] px-[20px] gap-[6px]">
                                <FaCartShopping className="text-[16px]" />
                                <span className="leading-[1.2] text-[16px] font-[700] ">
                                    Đặt mua
                                </span>
                            </span>
                        </Link>
                    </div>

                    <div className="absolute w-[40%] bottom-0 right-0 -z-1 translate-y-[15%]">
                        <div className="opacity-100 transition-all">
                            <img
                                className="block w-full max-w-full h-auto"
                                src="https://fbshop.vn/template/assets/images/cart-dcor.webp"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;