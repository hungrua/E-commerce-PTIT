import React from "react";
import { TiTick } from "react-icons/ti";
import { FaTruckFast } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";

import slider1 from '../../../images/cart/slider.webp'
import { Link } from "react-router-dom";
import ViewedProduct from "../ViewedProducts/ViewedProducts";

const Cart = () => {
    return (
        <div className="p-5 bg-[#efefef] mt-11">
            <div className="font-Roboto font-bold mb-5">
                <h1> GIỎ HÀNG</h1>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4'>
                <div className="col-span-1 lg:col-span-3">
                    <div className="mb-5">
                        <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 rounded items-center py-2 px-4 sticky top-[77px] bg-white 
                        before:contents-[''] before:bg-[#efefef] before:absolute before:w-full before:h-5 before:top-[-20px]
                        after:contents-[''] after:bg-[#efefef] after:absolute after:w-full after:h-[10px] after:bottom-[-10px]">
                            <div className="flex items-center gap-x-3">
                                <input type="checkbox" name="" id="all-cart" />
                                <label for="all-cart">tất cả (x sản phẩm)</label>
                            </div>
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                            <span>
                                <FaTrash />
                            </span>
                        </div>
                        <div className="bg-white rounded mt-[15px] [&>*:not(:last-child)]:border-b-[1px]">
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                            <div className="grid grid-cols-[auto_180px_120px_120px_20px] gap-x-6 items-center p-4">
                                <div className="grid grid-cols-[18px_80px_1fr] items-center gap-x-3">
                                    <input type="checkbox" />
                                    <div className="w-20 h-20 aspect-square">
                                        <img className="w-full h-full" src={require("../../../images/cart/amsieutoc.webp")} alt="" />
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
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="p-4 mb-3 bg-white rounded">
                        <div className="flex justify-between mb-3">
                            <div className="text-lg">Giao tới</div>
                            <Link to="#" className="text-[rgb(11_116_229)]">Thay đổi</Link>
                        </div>
                        <div className="flex font-bold text-[15px]">
                            <div className="user-name">Nguyen Hai Yen</div>
                            <div className="w-[1px] bg-[rgb(235_235_240)] mx-2"></div>
                            <div className="phone-number">0123456789</div>
                        </div>
                        <div className="text-[15px]">
                            <span className="bg-[rgb(255_245_235)] text-[rgb(255_130_10)] text-sm mr-0.5">Văn phòng </span>thôn tân thanh xã trường lâm huyện tĩnh gia, Xã Trường Lâm,
                            Huyện Tĩnh Gia,
                            Thanh Hóa
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded mb-3">
                        <div className="flex justify-between mb-3">
                            <div className="text-base">Khuyến mãi</div>
                            <div className="text-[rgb(120_120_120)] text-sm">Có thể chọn 2</div>
                        </div>
                        <div className="pt-4 text-[rgb(11_116_229)]">
                            <Link to="#" className="flex items-center gap-x-1">
                                <RiCoupon2Line />
                                Chọn hoặc nhập khuyến mãi khác
                            </Link>
                        </div>
                    </div>
                    <div className="sticky top-[77px]">
                        <div className="p-4 bg-white mb-3 rounded">
                            <div className="flex justify-between">
                                <div className="font-normal text-[rgb(51_51_51)] mb-3">
                                    Tạm tính
                                </div>
                                <div className="font-medium">
                                    1.380.000đ
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="font-normal text-[rgb(51_51_51)] mb-3">
                                    Giảm giá
                                </div>
                                <div className="font-medium">
                                    -40.000đ
                                </div>
                            </div>
                            <div className="flex justify-between pt-5 border-solid border-t-[1px] border-t-black">
                                <div className="font-normal text-[rgb(51_51_51)] mb-3">
                                    Tổng tiền
                                </div>
                                <div className="font-medium text-2xl text-[rgb(254_56_52)]">
                                    1.380.000đ
                                </div>
                            </div>
                            <div className="text-right text-sm text-[rgb(120_120_120)]">
                                (Đã bao gồm VAT)
                            </div>
                        </div>

                        <button className="w-full bg-[rgb(254_56_52)] py-[13px] px-[10px] text-white text-base mt-[10px] rounded outline-none">Mua hàng <span>(2)</span></button>
                        <div className="mt-[10px]">
                            <div className="overflow-hidden rounded-[5px] hidden lg:block">
                                <img className="w-full" src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3">
                    <ViewedProduct  />
                </div>
            </div>

        </div>
    )

}
export default Cart;