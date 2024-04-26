import React from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const Comments = () => {
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

                        <span>(190 đánh giá)</span>
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
                                <div className='w-[30%] bg-[rgb(10,104,255)] h-2 rounded'></div>
                            </div>
                            <div>4</div>
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
                                <div className='w-[30%] bg-[rgb(10,104,255)] h-2 rounded'></div>
                            </div>
                            <div>4</div>
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
                                <div className='w-[30%] bg-[rgb(10,104,255)] h-2 rounded'></div>
                            </div>
                            <div>4</div>
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
                                <div className='w-[30%] bg-[rgb(10,104,255)] h-2 rounded'></div>
                            </div>
                            <div>4</div>
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
                                <div className='w-[30%] bg-[rgb(10,104,255)] h-2 rounded'></div>
                            </div>
                            <div>4</div>
                        </div>

                    </div>
                    <div className="flex-1 flex flex-col items-end gap-2">
                        <textarea name="" id="" className="w-full rounded-lg p-4" rows="5"></textarea>
                        <button className="px-2 py-0.5 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white">Gửi</button>
                    </div>
                </div>


                <div className="border-solid border-b-[1px] border-b-[#f6dacd] pb-[20px] relative"></div>
                <div className='flex flex-col gap-y-3 mt-3'>
                    <div className="bg-[rgb(168,233,245)] p-3 rounded-lg">
                        <div className="flex items-center pb-2 gap-x-4">
                            <div className="flex gap-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="italic">Reviewed on Today</div>
                        </div>
                        <div className="pb-4">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex gap-x-4">
                            <button className="px-3 py-1 border-solid border-[#198754] text-[#198754] border-[1px] rounded hover:bg-[#198754] hover:text-white flex items-center"><AiOutlineLike size={25} />10</button>
                            <button className="px-3 py-1 border-solid border-[#dc3545] text-[#dc3545] border-[1px] rounded hover:bg-[#dc3545] hover:text-white flex items-center"><AiOutlineDislike size={25} />20</button>
                            <button className="px-3 py-1 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white flex items-center">Report abuse</button>
                        </div>
                    </div>
                    <div className="bg-[rgb(245,245,250)] p-3 rounded-lg">
                        <div className="flex items-center pb-2 gap-x-4">
                            <div className="flex gap-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="italic">Reviewed on Today</div>
                        </div>
                        <div className="pb-4">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex gap-x-4">
                            <button className="px-3 py-1 border-solid border-[#198754] text-[#198754] border-[1px] rounded hover:bg-[#198754] hover:text-white flex items-center"><AiOutlineLike size={25} />10</button>
                            <button className="px-3 py-1 border-solid border-[#dc3545] text-[#dc3545] border-[1px] rounded hover:bg-[#dc3545] hover:text-white flex items-center"><AiOutlineDislike size={25} />20</button>
                            <button className="px-3 py-1 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white flex items-center">Report abuse</button>
                        </div>
                    </div>
                    <div className="bg-[rgb(245,245,250)] p-3 rounded-lg">
                        <div className="flex items-center pb-2 gap-x-4">
                            <div className="flex gap-x-1">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className="italic">Reviewed on Today</div>
                        </div>
                        <div className="pb-4">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex gap-x-4">
                            <button className="px-3 py-1 border-solid border-[#198754] text-[#198754] border-[1px] rounded hover:bg-[#198754] hover:text-white flex items-center"><AiOutlineLike size={25} />10</button>
                            <button className="px-3 py-1 border-solid border-[#dc3545] text-[#dc3545] border-[1px] rounded hover:bg-[#dc3545] hover:text-white flex items-center"><AiOutlineDislike size={25} />20</button>
                            <button className="px-3 py-1 border-solid border-[#6c757d] text-[#6c757d] border-[1px] rounded hover:bg-[#6c757d] hover:text-white flex items-center">Report abuse</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Comments;