import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryAddress = (props) => {
    return (
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
    );
};

export default DeliveryAddress;