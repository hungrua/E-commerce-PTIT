import React, { useState } from 'react';
import voucher1 from '../../../images/voucher1.jpg'
import { CiCircleInfo } from "react-icons/ci";

const Voucher = () => {
    const [displayButton, setDisplayButton] = useState(false);
    return (
        <div className='relative flex justify-around rounded-lg p-2 [background:radial-gradient(10px_at_calc(100%/3+3px)_0%_,#0000_98%,_#fff)_top,_radial-gradient(10px_at_calc(100%/3+3px)_100%,#0000_98%,_#fff)_bottom] !bg-[length:100%_51%] !bg-no-repeat drop-shadow-[0_0_3px_rgba(156,143,143,0.88)]'
            onMouseOver={() => setDisplayButton(true)}
            onMouseLeave={() => setDisplayButton(false)}>
            <div className='relative w-1/3 flex flex-col items-center'>
                <div className='w-[75%] flex justify-center mr-[7.5px]'>
                    <img src={voucher1}  className='max-w-[70%]' alt="" />
                </div>
                <div className='text-sm text-ellipsis whitespace-nowrap overflow-hidden w-full'>Đây là voucher1</div>
                {/* <div className='absolute top-[-18px] right-[-10px] w-5 h-5 rounded-full bg-white' ></div>
                <div className='absolute bottom-[-18px] right-[-10px] w-5 h-5 rounded-full bg-white'></div> */}
                <div className='absolute right-0 top-[7.5px] bottom-[7.5px] border-r-[1px] border-dashed border-[rgb(120,120,120)]'></div>
            </div>
            <div className='flex flex-col justify-between flex-1 pl-8'>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-lg font-bold'>Giảm 5%</div>
                        <span className='text-sm text-[rgb(120,120,120)] whitespace-nowrap'>Cho đơn hàng từ 250k</span>
                    </div>
                    
                    <div className='absolute right-2 cursor-pointer'>
                        <CiCircleInfo color='blue' size={20}/>
                    </div>
                    
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-[rgb(120,120,120)] text-sm'>HSD: 31/10/2024</div>
                    {   displayButton && 
                        <button className='absolute right-2 text-sm px-1 border-solid border-[rgb(11_116_229)] text-[rgb(11_116_229)] border-[1px] rounded hover:bg-[rgb(11_116_229)] hover:text-white'>Lưu</button>
                    }
                </div>
            </div>
        </div>
            // <div className='w-[90%] h-[200px] mx-[auto] my-[50px] min-w-[250px] ![background-size:51%_100%] !bg-no-repeat [filter:drop-shadow(0_0_2rem_black)] [background:radial-gradient(50px_at_left_,_#0000_98%,_#fff)_left,_radial-gradient(50px_at_right,_#0000_98%,_#fff)_right] '></div>

    );
};

export default Voucher;