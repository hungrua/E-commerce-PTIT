import React, { useEffect, useState } from 'react';
import {
    FaTimes,
    FaMinus,
    FaPlus
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchCartItem } from '../../../redux/reducer/CartSlice';
import { HeaderCartItem } from './HeaderCartItem';
import { formatCurrency } from '../../basicFunction';
const HeaderCart = (props) => {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.cartItems)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        dispatch(fetchCartItem())
        if (cartItem) {
            let total = cartItem.reduce((cucl, item) => {
                return parseInt(cucl) + parseInt(item.totalPrice)
            }, 0)
            setTotal(formatCurrency(total))
        }

    }, [dispatch])
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
                    <div className='h-[80%] overflow-y-scroll' >
                        {
                            cartItem.map(item => {
                                return <HeaderCartItem key={item.id} itemInfo ={item} />
                            })
                        }
                    </div>

                    <div className="flex justify-between gap-[12px] pb-5 pr-[20px] mt-[50px] text-[16px] font-[700]">
                        <span className="text-[#000]">Tổng cộng</span>
                        <span className="text-[#f66315]">{total} </span>
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
                </div>
            </div>
        </div>
    );
};

export default HeaderCart;