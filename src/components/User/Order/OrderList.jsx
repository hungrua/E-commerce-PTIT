import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RiForbid2Fill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";


const OrderList = (props) => {
    const [search, setSearch] = useState('')


    return (
        <div className='mt-3'>
            {/* search bar */}
            <div className='flex w-full items-center rounded border-[1px] border-solid border-[rgb(196_196_207)] overflow-hidden bg-white'>
                <FaSearch className='ml-2' />
                <input type="text" className='flex-1 px-5 py-1 outline-none' placeholder='Tìm theo mã đơn hàng' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className={`pr-2 ${search.length === 0 ? `hidden` : `block`}`} onClick={() => setSearch('')}>
                    <MdOutlineCancel />
                </button>
                <div className='w-[1px] h-[19px] bg-black'></div>
                <div className='py-1 px-4 outline-none cursor-pointer'>Tìm đơn hàng</div>
            </div>
            <div className="">
                <div className='mt-5 p-4 bg-white rounded-md'>
                    <div className='flex items-center gap-x-3 pb-1 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                        <RiForbid2Fill />
                        <div>Đã Hủy</div>
                    </div>
                    <div className='[&>*:not(:last-child)]:border-b-[1px]'>
                        <div className='flex justify-between py-4 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                            <div className='flex gap-x-3'>
                                <div className='flex items-center shadow-[0px_2px_10px_#00000014] relative w-20'>
                                    <img src="/static/images/products/basic/may-tinh-asrock-mini-pc-deskmini-x300-1.webp" alt="" />
                                    <span className='absolute bottom-[-2px] text-right right-[-2px] text-sm p-1 bg-[rgb(235_235_240)] rounded-tl-full'>x1</span>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <div className='font-medium'>Công phá lý thuyết hóa 10-11-12</div>
                                    <div className='flex items-center gap-x-2'>
                                        <FaStore />
                                        <span className='text-sm'>This website</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>144.000đ</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className='flex justify-end mt-3'>
                        <div className='pr-3'>
                            <div className='flex justify-between gap-x-3 text-lg font-medium'>
                                <div className=' text-[rgb(128_128_137)]'>Tổng tiền: </div>
                                <div className=''>166.000<span>đ</span></div>
                            </div>
                            <div className='flex gap-x-3 mt-3'>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Mua lại</button>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Xem chi tiết</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-5 p-4 bg-white rounded-md'>
                    <div className='flex items-center gap-x-3 pb-1 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                        <FaTruckFast />
                        <div>Đang vận chuyển</div>
                    </div>
                    <div className='[&>*:not(:last-child)]:border-b-[1px]'>
                        <div className='flex justify-between py-4 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                            <div className='flex gap-x-3'>
                                <div className='flex items-center shadow-[0px_2px_10px_#00000014] relative w-20'>
                                    <img src="/static/images/products/basic/may-tinh-asrock-mini-pc-deskmini-x300-1.webp" alt="" />
                                    <span className='absolute bottom-[-2px] text-right right-[-2px] text-sm p-1 bg-[rgb(235_235_240)] rounded-tl-full'>x1</span>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <div className='font-medium'>Công phá lý thuyết hóa 10-11-12</div>
                                    <div className='flex items-center gap-x-2'>
                                        <FaStore />
                                        <span className='text-sm'>This website</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>144.000đ</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className='flex justify-end mt-3'>
                        <div className='pr-3'>
                            <div className='flex justify-between gap-x-3 text-lg font-medium'>
                                <div className=' text-[rgb(128_128_137)]'>Tổng tiền: </div>
                                <div className=''>166.000<span>đ</span></div>
                            </div>
                            <div className='flex gap-x-3 mt-3'>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Mua lại</button>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Xem chi tiết</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-5 p-4 bg-white rounded-md'>
                    <div className='flex items-center gap-x-3 pb-1 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                        <TfiReload />
                        <div>Đang xử lý</div>
                    </div>
                    <div className='[&>*:not(:last-child)]:border-b-[1px]'>
                        <div className='flex justify-between py-4 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                            <div className='flex gap-x-3'>
                                <div className='flex items-center shadow-[0px_2px_10px_#00000014] relative w-20'>
                                    <img src="/static/images/products/basic/may-tinh-asrock-mini-pc-deskmini-x300-1.webp" alt="" />
                                    <span className='absolute bottom-[-2px] text-right right-[-2px] text-sm p-1 bg-[rgb(235_235_240)] rounded-tl-full'>x1</span>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <div className='font-medium'>Công phá lý thuyết hóa 10-11-12</div>
                                    <div className='flex items-center gap-x-2'>
                                        <FaStore />
                                        <span className='text-sm'>This website</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>144.000đ</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className='flex justify-end mt-3'>
                        <div className='pr-3'>
                            <div className='flex justify-between gap-x-3 text-lg font-medium'>
                                <div className=' text-[rgb(128_128_137)]'>Tổng tiền: </div>
                                <div className=''>166.000<span>đ</span></div>
                            </div>
                            <div className='flex gap-x-3 mt-3'>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Mua lại</button>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Xem chi tiết</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-5 p-4 bg-white rounded-md'>
                    <div className='flex items-center gap-x-3 pb-1 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                        <FaTruck />
                        <div>Giao hàng thành công</div>
                    </div>
                    <div className='[&>*:not(:last-child)]:border-b-[1px]'>
                        <div className='flex justify-between py-4 border-b-[1px] border-solid border-[rgb(235_235_240)]'>
                            <div className='flex gap-x-3'>
                                <div className='flex items-center shadow-[0px_2px_10px_#00000014] relative w-20'>
                                    <img src="/static/images/products/basic/may-tinh-asrock-mini-pc-deskmini-x300-1.webp" alt="" />
                                    <span className='absolute bottom-[-2px] text-right right-[-2px] text-sm p-1 bg-[rgb(235_235_240)] rounded-tl-full'>x1</span>
                                </div>
                                <div className='flex flex-col justify-evenly'>
                                    <div className='font-medium'>Công phá lý thuyết hóa 10-11-12</div>
                                    <div className='flex items-center gap-x-2'>
                                        <FaStore />
                                        <span className='text-sm'>This website</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>144.000đ</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className='flex justify-end mt-3'>
                        <div className='pr-3'>
                            <div className='flex justify-between gap-x-3 text-lg font-medium'>
                                <div className=' text-[rgb(128_128_137)]'>Tổng tiền: </div>
                                <div className=''>166.000<span>đ</span></div>
                            </div>
                            <div className='flex gap-x-3 mt-3'>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Mua lại</button>
                                <button className='px-2 py-1 outline-none rounded-md text-[rgb(10_104_255)] border-[1px] border-[rgb(10_104_255)] hover:text-white hover:bg-[rgb(10_104_255)]'>Xem chi tiết</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderList;