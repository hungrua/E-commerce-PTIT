import React from 'react';

function HeaderNotification(props) {
    return (
        <div className='absolute flex flex-col gap-y-1 w-[400px] bg-white right-[-50px] mt-3 rounded-lg shadow-[0px_2px_10px_#000014] p-4'>
            <div className='absolute top-[-8px] right-[58px] w-0 h-0 border-l-[10px] borderl-l-solid border-l-transparent border-r-[10px] border-r-solid border-r-transparent border-b-[10px] border-solid border-white drop-shadow-[0_-5px_3px_rgba(156,143,143,0.88)] z-10'></div>
            <div className='flex gap-x-2 bg-blue-100 rounded z-0'>
                <div className='max-w-14'>
                    <img src="/static/images/notification/mascot-1.svg" alt="" />
                </div>
                <div className=''>
                    <div className='text-lg'>Tiêu đề thông báo</div>
                    <div className='text-sm'>Nội dung thông báo</div>
                </div>
            </div>
            <div className='flex gap-x-2 bg-blue-100 rounded'>
                <div className='max-w-14'>
                    <img src="/static/images/notification/mascot-1.svg" alt="" />
                </div>
                <div className=''>
                    <div className='text-lg'>Tiêu đề thông báo</div>
                    <div className='text-sm'>Nội dung thông báo</div>
                </div>
            </div>
            <div className='flex gap-x-2 bg-blue-100 rounded'>
                <div className='max-w-14'>
                    <img src="/static/images/notification/mascot-2.svg" alt="" />
                </div>
                <div className=''>
                    <div className='text-lg'>Tiêu đề thông báo</div>
                    <div className='text-sm'>Nội dung thông báo</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNotification;