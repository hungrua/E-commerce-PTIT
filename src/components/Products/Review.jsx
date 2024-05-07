import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Review = (props) => {
    const [user, setUser] = useState({
        "id": 2,
        "username": "tronghuong2002",
        "name": "Nguyễn Trọng Hướng",
        "email": "Tronghuong2002@gmail.com",
        "password": null,
        "avatar": "/static/images/avatars/uan.jpg",
        "address": "Quảng Bố Quảng Phú Lương Tài Bắc Ninh",
        "createDate": "2024-05-04",
        "modifiedDate": "2024-03-22",
        "roles": "ADMIN, EMPLOYEE"
    })
    const getAcronym = () => { // lấy viết tắt nếu người dùng chưa cập nhật ảnh đại diện
        let arr = user.name.split(" ");
        let acronym = ""
        for(let i = arr.length - 2; i < arr.length; i++) {
            acronym += arr[i][0];
        }
        return acronym;
    }
    const getDurationCreateAccount = () => {
        let created = new Date(user.createDate);
        let now = new Date();
        let days = parseInt((now - created) / (1000 * 3600 * 24));
        let months = parseInt(days / 30);
        let years = parseInt(days / 365);
        if(years >= 1) {
            return years + " năm trước";
        }
        if(months >= 1 ) {
            return months + " tháng trước";
        }
        if (days < 1) {
            return "hôm nay";
        }
        return days + " ngày trước"
    }
    return (
        <div className='bg-[rgb(168,233,245)] p-3 rounded-lg flex'>
            <div className='w-1/6 flex justify-center items-center flex-col '>
                <div className='rounded-full w-14 h-14 bg-[rgb(194,225,255)] flex justify-center items-center overflow-hidden'>
                    {user.avatar ? 
                    <div className='overflow-hidden'>
                        <img src={user.avatar} alt="" />
                    </div> :
                    <div className=''>{getAcronym()}</div> 
                    }
                </div>
                <div className=''>
                    <div>
                        {user.name}
                    </div>
                    <div className='text-sm italic text-[rgb(128,128,137)]'>
                        Đã tham gia {getDurationCreateAccount()}
                    </div>
                </div>
            </div>
            <div className="bg-[rgb(168,233,245)] p-3 rounded-lg">
                <div className="flex items-center pb-2 gap-x-4">
                    <div className="flex gap-x-1">
                        {
                            Array.from({length: props.data.ranking}, (_, index) => (
                                <FaStar key={index} color='orange' />
                            ))
                        }
                        {
                            Array.from({length: 5 - props.data.ranking}, (_, index) => (
                                <FaStar key={index} color='rgb(209, 209, 211)' />
                            ))
                        }
                    </div>
                    <div className="italic">Reviewed on {props.data.dateReview}</div>
                </div>
                <div className="pb-4">
                    <p>{props.data.comment}</p>
                </div>
                <div className="flex gap-x-4">
                    <button className="px-3 py-1 border-solid border-[#198754] text-[#198754] border-[1px] rounded hover:bg-[#198754] hover:text-white flex items-center"><AiOutlineLike size={25} />10</button>
                    <button className="px-3 py-1 border-solid border-[#dc3545] text-[#dc3545] border-[1px] rounded hover:bg-[#dc3545] hover:text-white flex items-center"><AiOutlineDislike size={25} />20</button>
                    <button className="px-3 py-1 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white flex items-center">Report abuse</button>
                </div>
            </div>
        </div>
    );
};

export default Review;