import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import Comment from './Review';
const Reviews = (props) => {

    const [reviews, setReviews] = useState([])

    const [statistics, setStatstics] = useState([]);
    const [percentages, setPercentages] = useState([]);

    useEffect(() => {
        setReviews([
            {
                id: 1,
                comment: 'Ngon ddaays',
                ranking: 4,
                dateReview: '2024-01-01',
                user: {
                    "id": 2,
                    "username": "tronghuong2002",
                    "name": "Nguyễn Trọng Hướng",
                    "email": "Tronghuong2002@gmail.com",
                    "password": null,
                    "avatar": "/static/images/avatars/uan.jpg",
                    "address": "Quảng Bố Quảng Phú Lương Tài Bắc Ninh",
                    "createDate": "2020-04-27",
                    "modifiedDate": "2024-03-22",
                    "roles": "ADMIN, EMPLOYEE"
                }
            },
            {
                id: 2,
                comment: 'Quá tệ, chất lượng dịch vụ quá kém',
                ranking: 1,
                dateReview: '2023-01-01',
                user: {
                    "id": 2,
                    "username": "tronghuong2002",
                    "name": "Nguyễn Trọng Hướng",
                    "email": "Tronghuong2002@gmail.com",
                    "password": null,
                    "avatar": "/static/images/avatars/uan.jpg",
                    "address": "Quảng Bố Quảng Phú Lương Tài Bắc Ninh",
                    "createDate": "2020-04-27",
                    "modifiedDate": "2024-03-22",
                    "roles": "ADMIN, EMPLOYEE"
                }
            }
        ])
    }, [])
    useEffect(() => {
        const fetchStatistics = () => {
            setStatstics([10, 20, 30, 40, 10]);
        }
        fetchStatistics();
    }, [])
    useEffect(() => {
        setPercentages(statistics)
    }, [statistics])
    return (
        <div className="p-[30px] rounded-b-[12px] bg-[#feefe8] relative z-1">
            <div>
                <div className="flex justify-between items-center">
                    <div className="mb-[20px]">
                        <div className='flex max-[800px]:flex-col items-center'>
                            <p className="text-[#f6af15] font-[700] text-[40px]">
                                5 <span className="text-[24px]">/5</span>
                            </p>
                            <div className="flex ml-4 gap-2 text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                        </div>

                        <span>({statistics.reduce((a, b) => a + b, 0)} đánh giá)</span>
                    </div>

                    <div>
                        <span className="text-[16px]">
                            Bạn đã mua sản phẩm này?{" "}
                            <button
                                className="text-[#e10600] font-[700] no-underline"
                            >
                                Để lại đánh giá
                            </button>
                        </span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                            </div>
                            <div className='w-40 bg-[rgb(209,209,211)] h-2 rounded'>
                                <div className={`bg-[rgb(10,104,255)] h-2 rounded`} style={{width: percentages[0]}}></div>
                            </div>
                            <div>{statistics[0]}</div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='rgb(209,209,211)' />
                            </div>
                            <div className='w-40 bg-[rgb(209,209,211)] h-2 rounded'>
                                <div className={`bg-[rgb(10,104,255)] h-2 rounded`} style={{width: percentages[1]}}></div> 
                            </div>
                            <div>{statistics[1]}</div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='orange' /> 
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                            </div>
                            <div className='w-40 bg-[rgb(209,209,211)] h-2 rounded'>
                                <div className={`bg-[rgb(10,104,255)] h-2 rounded`} style={{width: percentages[2]}}></div>
                            </div>
                            <div>{statistics[2]}</div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaStar color='orange' />
                                <FaStar color='orange' />
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                            </div>
                            <div className='w-40 bg-[rgb(209,209,211)] h-2 rounded'>
                                <div className={`bg-[rgb(10,104,255)] h-2 rounded`} style={{width: percentages[3]}}></div>
                            </div>
                            <div>{statistics[3]}</div>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex gap-x-1'>
                                <FaStar color='orange' />
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                                <FaStar color='rgb(209,209,211)' />
                            </div>
                            <div className='w-40 bg-[rgb(209,209,211)] h-2 rounded'>
                                <div className={`bg-[rgb(10,104,255)] h-2 rounded`} style={{width: percentages[4]}}></div>
                            </div>
                            <div>{statistics[4]}</div>
                        </div>

                    </div>
                    <div className="flex-1 flex flex-col items-end gap-2">
                        <textarea name="" id="" className="w-full rounded-lg p-4" rows="5"></textarea>
                        <button className="px-2 py-0.5 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white">Gửi</button>
                    </div>
                </div>


                <div className="border-solid border-b-[1px] border-b-[#f6dacd] pb-[20px] relative mb-2"></div>
                <div className='flex flex-col gap-y-3 mt-3npm sd flex-1'>
                    {
                        reviews.map((review) => (
                            <Comment key={review.id} data={review} />
                        ))
                    }
                </div>



            </div>
            <div>

            </div>
        </div>
    );
};

export default Reviews;