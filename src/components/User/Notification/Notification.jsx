import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaGifts } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import NotificationNav from "./NotificationNav";


const Notification = () => {
    const [notiActiveTab, setNotiActiveTab] = useState(0)
    const notiTabs = {
        0: {
            name: 'Thông báo chung',
            icon: <AiFillHome/>
        },
        1: {
            name: 'Thông báo khuyến mại',
            icon: <FaGifts/>
        },
        2: {
            name: 'Thông báo đơn hàng',
            icon: <BiSolidDiscount/>
        },
        3: {
            name: 'Thông báo hệ thông',
            icon: <MdOutlineHistory/>
        }
    }
    return (
        <div className="bg-white h-80 rounded-lg p-4">
            <NotificationNav notiTabs={notiTabs} notiActiveTab={notiActiveTab} setNotiActiveTab={setNotiActiveTab}/>
            <div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Notification;