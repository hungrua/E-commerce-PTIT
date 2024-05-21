import React from 'react';

import slider1 from '../../../images/cart/slider.webp'
import { useNavigate } from 'react-router-dom';

const CartBill = (props) => {
    const navigate = useNavigate()
    const handleCheckout = (e) => {
        navigate('/checkout')
    }
    return (
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

            <button className="w-full bg-[rgb(254_56_52)] py-[13px] px-[10px] text-white text-base mt-[10px] rounded outline-none"
                onClick={handleCheckout}>
                Mua hàng <span>(2)</span>
            </button>
            <div className="mt-[10px]">
                <div className="overflow-hidden rounded-[5px] hidden lg:block">
                    <img className="w-full" src={slider1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CartBill;