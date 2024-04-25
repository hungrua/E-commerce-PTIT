import React, { useState } from 'react';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <div className='flex flex-col items-center justify-center bg-white p-5 rounded-lg'>
            <form className='p-4 border-[1px] border-solid borderrgb(235,235,240) outline-[rgb(102,175,233)] rounded-lg w-[400px]'>
                <div className="pb-2 flex flex-col">
                    <div>Mật khẩu hiện tại</div>
                    <input type="password" placeholder='Nhập mật khẩu hiện tại' className='p-2 border-[1px] border-solid borderrgb(235,235,240) outline-[rgb(102,175,233)] rounded flex-1' value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}/>
                </div>
                <div className="pb-2 flex flex-col">
                    <div>Mật khẩu mới</div>
                    <input type="password" placeholder='Nhập mật khẩu mới' className='p-2 border-[1px] border-solid borderrgb(235,235,240) outline-[rgb(102,175,233)] rounded flex-1' value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}/>
                    <span className='text-sm'>Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm chữ và số</span>
                </div>
                <div className="pb-2 flex flex-col">
                    <div>Xác nhận lại mật khẩu mới</div>
                    <input type="password" placeholder='Nhập lại mật khẩu mới' className='p-2 border-[1px] border-solid borderrgb(235,235,240) outline-[rgb(102,175,233)] rounded flex-1' value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <span className='text-sm'>{newPassword !== confirmPassword && confirmPassword && 'Chưa khớp'}</span>
                </div>
                <div className=''>
                    <input type="submit" value="Lưu thay đổi" className='w-full p-2 cursor-pointer border-solid border-[rgb(11_116_229)] text-[rgb(11_116_229)] border-[1px] rounded hover:bg-[rgb(11_116_229)] hover:text-white'/>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;