import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import UserProfile from "../components/User/Profile/UserProfile";
import Navbar from "../components/User/Navbar/Navbar";
import Order from "../components/User/Order/Order";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Notification from "../components/User/Notification/Notification";
import ChangePassword from "../components/User/Profile/ChangePassword";


const UserAccountPage = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = {
        0: {
            name: 'Thông tin tài khoản',
            icon: <FaUser />,
            display: true,
            tab: <UserProfile activeTab={activeTab} setActiveTab={setActiveTab} />
        },
        1: {
            name: 'Thông báo của tôi',
            icon: <FaBell />,
            display: true,
            tab: <Notification/>
        },
        2: {
            name: 'Quản lý đơn hàng',
            icon: <IoReceipt />,
            display: true,
            tab: <Order />
        },
        3: {
            name: 'Nhận xét sản phẩm',
            icon: <BiSolidCommentDetail />,
            display: true
        },
        4: {
            name: 'Đánh giá sản phẩm',
            icon: <FaStarHalfAlt />
        },
        5: {
            name: 'Sản phẩm đã xem',
            icon: <FaEye />,
            display: true
        },
        6 : {
            name: 'Thay đổi mật khẩu',
            tab: <ChangePassword />,
            display: false
        }
    }


    return (
        <>
            <Header />
            <div className="p-5 bg-[#efefef] mt-[58px]">
                <div className="mb-4">
                    <ul className="flex gap-x-2">
                        <li>
                            <Link className="text-[rgb(100_100_109)] hover:underline" to={"/"}>
                                Trang chủ
                            </Link>
                        </li>
                        <li>&gt;</li>
                        <li>{tabs[activeTab].name}</li>
                    </ul>
                </div>
                <div className="grid grid-cols-5 gap-x-4">

                    <div className="col-span-1">
                        <Navbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    <div className="col-span-4">
                        <h1 className="font-bold text-lg pb-[13px]">{tabs[activeTab].name}</h1>
                        {tabs[activeTab].tab}
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default UserAccountPage;