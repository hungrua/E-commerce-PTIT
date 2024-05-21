import React, { useState } from 'react';
import Voucher from '../Voucher/Voucher';

const Vouchers = (props) => {
    const [vouchers, setVouchers] = useState([
        {
            id: 1,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2025-12-12'
        },
        {
            id: 2,
            name: 'Giảm giá 10%',
            description: 'Cho đơn hàng từ 250k',
            discount: 10, // 10%
            number_voucher: 10,
            start_date: '2020-1-1',
            end_date: '2025-12-12'
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
    return (
        <div className='flex justify-around max-h-24 gap-x-2 px-4 mb-8 flex-wrap gap-y-4'>
            <div    >
                <Voucher data={vouchers[0]} />
            </div>
            <div className={`hidden md:block`} >
                <Voucher data={vouchers[1]} />
            </div>
            <div className={`hidden lg:block`} >
                <Voucher data={vouchers[2]} />
            </div>
        </div>
    );
};

export default Vouchers;