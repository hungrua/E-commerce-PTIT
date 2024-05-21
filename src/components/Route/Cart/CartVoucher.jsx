import React, { useEffect, useState } from 'react';
import { RiCoupon2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

import Voucher from '../Voucher/Voucher';

const CartVoucher = (props) => {
    const [openVoucher, setOpenVoucher] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [discountVouchers, setDiscountVouchers] = useState([
        {
            id: 1,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2020-12-12'
        },
        {
            id: 2,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2020-12-12'
        },
        {
            id: 3,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2025-12-12'
        }
    ])
    const [deliveryVouchers, setDeliveryVouchers] = useState([
        {
            id: 1,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2020-12-12'
        }
    ])
    useEffect(() => {
        if (openVoucher) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }
    }, [openVoucher])
    return (
        <div className="p-4 bg-white rounded mb-3">
            <div className="flex justify-between mb-3">
                <div className="text-base">Khuyến mãi</div>
                <div className="text-[rgb(120_120_120)] text-sm">Có thể chọn 2</div>
            </div>
            <div className="pt-4 text-[rgb(11_116_229)]">
                <button to="#" className="flex items-center gap-x-1"
                    onClick={() => setOpenVoucher(!openVoucher)}>
                    <RiCoupon2Line />
                    Chọn hoặc nhập khuyến mãi khác
                </button>
            </div>
            {
                openVoucher &&
                <div className='absolute top-0 left-0 bottom-0 right-0 bg-[rgba(39,39,42,0.7)] z-[999] flex justify-center items-center'>
                    <div className='bg-white py-4 rounded-lg w-[35%] max-h-[80%] overflow-hidden'>
                        <div className='px-6'>
                            <div className='flex items-center justify-between text-lg pb-2'>
                                <div className=' font-semibold'>Shop khuyến mãi</div>
                                <button onClick={() => setOpenVoucher(!openVoucher)}>
                                    <IoMdClose />
                                </button>
                            </div>
                            <div className='flex justify-between items-center gap-x-1 pb-3'>
                                <div className='relative flex-1 flex items-center'>
                                    <div className='absolute pl-3'>
                                        <RiCoupon2Line />
                                    </div>
                                    <input type="text" value={searchValue} className='w-full py-1 px-8 border-[1px] border-solid border-[rgb(196,196,207)] rounded focus:outline-[rgb(0,180,204)]' 
                                        onChange={(e) => setSearchValue(e.target.value)}/>
                                    <button className={`${searchValue.length === 0 ? 'hidden' : 'block'} absolute right-2`}
                                        onClick={() => setSearchValue('')}>
                                        <MdOutlineCancel />
                                    </button>
                                </div>
                                <div className='py-[5px] px-2 bg-[#efefef] hover:bg-[rgb(10,104,255)] hover:text-white rounded cursor-pointer'>Áp dụng</div>
                            </div>
                        </div>
                        <div className='px-6 overflow-y-scroll h-[400px]'>
                            <div className='pb-3'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-lg mb-2'>Mã giảm giá</div>
                                    <div className='text-sm text-[rgb(128,128,137)]'>Áp dụng tối đa: {1}</div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    {
                                        discountVouchers.map((voucher, index) => (
                                            <Voucher key={index} data={voucher}/>
                                        ))
                                        // console.log(discountVouchers)
                                    }
                                </div>
                            </div>
                            <div className='py-3'>
                                <div className='flex justify-between items-center'>
                                    <div className='text-lg mb-2'>Mã vận chuyển</div>
                                    <div className='text-sm text-[rgb(128,128,137)]'>Áp dụng tối đa: {1}</div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    {
                                        deliveryVouchers.map((voucher, index) => (
                                            <Voucher key={index} data={voucher}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartVoucher;