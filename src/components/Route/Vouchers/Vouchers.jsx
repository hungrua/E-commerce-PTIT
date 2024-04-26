import React from 'react';
import Voucher from '../Voucher/Voucher';

const Vouchers = (props) => {
    return (
        <div className='flex justify-around max-h-24 gap-x-2 px-4 mb-8 flex-wrap gap-y-4'>
            <Voucher/>
            <Voucher/>
            <Voucher/>
        </div>
    );
};

export default Vouchers;