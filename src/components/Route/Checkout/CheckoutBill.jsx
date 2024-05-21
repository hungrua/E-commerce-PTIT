import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutBill = (props) => {
    const handlePay = () => {

    }
    return (
        <div className="sticky top-[77px]">
            <div className="p-4 bg-white rounded">
                <div className="flex justify-between">
                    <div className="font-semibold text-[rgb(51_51_51)]">
                        Đơn hàng
                    </div>
                    <Link to={"/cart"} className="text-[rgb(11_116_229)]">
                        Thay đổi
                    </Link>
                </div>
                <div className='text-sm pb-2 border-solid border-b-[1px] border-b-[rgb(235,235,240)'>
                    {11} sản phẩm
                </div>
                <div className="flex justify-between mt-3">
                    <div className="font-normal text-[rgb(51_51_51)] mb-3">
                        Tạm tính
                    </div>
                    <div className="font-medium">
                        1.380.000đ
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="font-normal text-[rgb(51_51_51)] mb-3">
                        Phí vận chuyển
                    </div>
                    <div className="font-medium">
                        40.000đ
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="font-normal text-[rgb(51_51_51)] mb-3">
                        Khuyến mãi vận chuyển
                    </div>
                    <div className="font-medium">
                        -40.000đ
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
                <div className="flex justify-between pt-5 border-solid border-t-[1px] border-t-[rgb(235,235,240)]">
                    <div className="font-normal text-[rgb(51_51_51)] mb-3">
                        Tổng tiền
                    </div>
                    <div className="font-medium text-2xl text-[rgb(254_56_52)]">
                        1.380.000đ
                    </div>
                </div>
                <div className="text-right text-sm text-[rgb(120_120_120)]">
                    (Giá này đã bao gồm thuế GTGT, <br /> phí đóng gói, phí vận chuyển và các chi phí phát sinh khác)
                </div>
            </div>

            <button className="w-full bg-[rgb(254_56_52)] py-[13px] px-[10px] text-white text-base mt-[10px] rounded outline-none"
                onClick={handlePay}>
                Đặt hàng <span>(2)</span>
            </button>
        </div>
    );
};

export default CheckoutBill;