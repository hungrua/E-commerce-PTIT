import React, { useState } from 'react';
import OrderNav from './OrderNav';
import OrderList from './OrderList';

const Order = () => {
    const orderTabs = {
        0: {
            name: 'Tất cả đơn',
        },
        1: {
            name: 'Chờ thanh toán',
        },
        2: {
            name: 'Đang xử lý',
        },
        3: {
            name: 'Đang vận chuyển',
        },
        4: {
            name: 'Đã hủy',
        }
    }
    const [orderActiveTab, setOrderActiveTab] = useState(0)

    return (
        <div>
            <OrderNav orderTabs={orderTabs} orderActiveTab={orderActiveTab} setOrderActiveTab={setOrderActiveTab}/>
            <OrderList orderActiveTab={orderActiveTab}/>
        </div>
    );
};

export default Order;