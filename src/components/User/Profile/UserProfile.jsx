import React, { useState, useEffect, useRef } from "react";
import Avatar from "../../../images/user/avatar.png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";


const UserProfile = (props) => {
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedYear, setSelectedYear] = useState(0);

    const [isChangePhoneNumber, setIsChangePhoneNumber] = useState(false);
    const phoneNumberRef = useRef(null);
    const [isChangeEmail, setIsChangeEmail] = useState(false);
    const emailRef = useRef(null);
    const [isChangePassword, setIsChangePassword] = useState(false);


    const years = Array.from({ length: 2024 - 1900 }, (_, index) => 2024 - index);
    const months = Array.from({ length: 12 }, (_, index) => index + 1);
    const [days, setDays] = useState(Array.from({ length: 31 }, (_, index) => index + 1))

    useEffect(() => {
        let maxDay = maxDayOfMonthInYear(selectedMonth, selectedYear)
        setDays(Array.from({ length: maxDay }, (_, index) => index + 1))
    }, [selectedMonth, selectedYear])

    const isLeapYear = (year) => {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return true;
        return false;
    }

    const maxDayOfMonthInYear = () => {
        // console.log(selectedYear, isLeapYear(selectedYear))
        if (isLeapYear(selectedYear)) { // year is leap or not selected
            if (selectedMonth === 2) {
                return 29;
            }
        }
        if (selectedMonth === 2) {
            return 28;
        }
        if ([4, 6, 9, 10].includes(selectedMonth)) {
            return 30;
        }
        return 31;
    }

    const handleChange = event => {
        var { name, value } = event.target
        // console.log(selectedDay, selectedMonth, selectedYear)
        value = isNaN(value) ? 0 : parseInt(value)
        if (name === "day") {
            if (!value in days) {
                setSelectedDay(0)
            }
            else setSelectedDay(value)

        }
        else {
            name === 'month' ? setSelectedMonth(value) : setSelectedYear(value)
            if (!selectedDay in days) {
                selectedDay(0)
            }
        }
    }

    const handleChangePhoneNumber = () => {
        setIsChangePhoneNumber(!isChangePhoneNumber);
        setTimeout(() => {
            phoneNumberRef.current.focus();
        })
    }

    const handleChangeEmail = () => {
        setIsChangeEmail(!isChangeEmail);
        setTimeout(() => {
            emailRef.current.focus();
        })
    }

    const handleChangePassword = () => {
        setIsChangePassword(!isChangePassword);
        props.setActiveTab(6);
    }

    return (
        <div className="bg-white grid grid-cols-1 rounded-lg md:grid-cols-2 p-4">
            <form className="pt-2 pb-4 pl-4 pr-5 border-solid border-r-[1px] border-[196_196_207]">
                <div className="text-[rgb(100_100_109)]">
                    Thông tin cá nhân
                </div>
                <div className="flex gap-x-5 mt-4">
                    <div className="flex w-28 h-28 rounded-full overflow-hidden items-center justify-center border-solid border-4 border-[rgb(194_225_255)] bg-[rgb(240_248_255)]">
                        <img className="w-[50px]" src={Avatar} alt="" srcset="" />
                    </div>
                    <div className="flex-1">
                        <div className="flex mb-8 gap-x-8 items-center">
                            <label htmlFor="name">Họ và tên<span className="text-red-600">*</span>:</label>
                            <input className="flex-1 h-9 px-3 py-4 border-solid border-[rgb(196_196_207)] border-[1px] rounded" id="name" type="text" value={"Lê Thị Hà"} placeholder="Thêm họ và tên" />
                        </div>
                        <div className="flex mb-8 gap-x-8 items-center">
                            <label htmlFor="nickname">NickName:</label>
                            <input className="flex-1 h-9 px-3 py-4 border-solid border-[rgb(196_196_207)] border-[1px] rounded" id="nickname" type="text" placeholder="Thêm nickname" />
                        </div>
                    </div>
                </div>

                <div className="flex mb-8 items-center">
                    <label className="w-36 min-w-36">Ngày sinh:</label>
                    <div className="flex gap-x-4">
                        <span>
                            <select className="flex items-center h-9 w-[90px] border-solid border-[rgb(196_196_207)] border-[1px] rounded px-1.5" name="day" id="" value={selectedDay} onChange={handleChange}>
                                <option value="Ngày">Ngày</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </span>
                        <span>
                            <select className="flex items-center h-9 w-[90px] border-solid border-[rgb(196_196_207)] border-[1px] rounded px-1.5" name="month" id="" value={selectedMonth} onChange={handleChange}>
                                <option value="tháng">Tháng</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                        </span>
                        <span>
                            <select className="flex items-center h-9 w-[90px] border-solid border-[rgb(196_196_207)] border-[1px] rounded px-1.5" name="year" id="" value={selectedYear} onChange={handleChange}>
                                <option value="năm">Năm</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </span>
                    </div>

                </div>
                <div className="flex mb-8 items-center">
                    <label className="w-36 min-w-36" htmlFor="">Giới tính</label>
                    <div className="flex gap-x-8">
                        <span className="flex gap-x-2">
                            <input type="radio" name="gender" id="male" value={"Nam"} />
                            <label htmlFor="male">Nam</label>
                        </span>
                        <span className="flex gap-x-2">
                            <input type="radio" name="gender" id="female" value={"Nữ"} />
                            <label htmlFor="female">Nữ</label>
                        </span>
                        <span className="flex gap-x-2">
                            <input type="radio" name="gender" id="other" value={"Khác"} />
                            <label htmlFor="other">Khác</label>
                        </span>

                    </div>

                </div>
                <div className="flex mb-8">
                    <label className="w-36 min-w-36" htmlFor="address">Địa chỉ thường trú:</label>
                    <input className="flex-1 h-9 px-3 py-4 border-solid border-[rgb(196_196_207)] border-[1px] rounded" type="text" name="" id="address" placeholder="Nhập địa chỉ thường trú" />
                </div>
                <div className="text-center">
                    <button className="px-4 py-1 text-white bg-[rgb(11_116_229)] border-solid border-[rgb(196_196_207)] border-[1px] rounded" type="submit">Lưu thay đổi</button>
                </div>
            </form>
            <div className="pt-2 pb-4 pr-4 pl-5">
                <div className="text-[rgb(100_100_109)] mb-4">
                    Số điện thoại và Email
                </div>
                <div className="flex justify-between items-center mb-4 px-2">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <FaPhoneAlt />
                        </div>
                        <div className="flex flex-col">
                            <span>Số điện thoại</span>
                            <input value={"0123456789"}  disabled={!isChangePhoneNumber} className="p-1 rounded w-[250px]" ref={phoneNumberRef}/>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <button className={`px-2 py-0.5 border-solid border-[rgb(104,109,114)] text-[rgb(52,55,58)] border-[1px] rounded hover:bg-[rgb(104,109,114)] hover:text-white ${!isChangePhoneNumber ? 'hidden' : ''}`}
                                onClick={() => setIsChangePhoneNumber(!isChangePhoneNumber)}>Hủy</button>
                        <button className="px-2 py-0.5 border-solid border-[rgb(11_116_229)] text-[rgb(11_116_229)] border-[1px] rounded hover:bg-[rgb(11_116_229)] hover:text-white"
                                onClick={handleChangePhoneNumber}> {!isChangePhoneNumber ? 'Cập nhật' : 'Lưu'}</button>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 px-2">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <IoMdMail />
                        </div>
                        <div className="flex flex-col col-span-1">
                            <span>Email</span>
                            <input type="email" ref={emailRef} disabled={!isChangeEmail} value={'nguyenhaiyen@gmail.com'} className="p-1 rounded w-[250px]"/>
                        </div>
                    </div>
                    <div className="flex gap-x-2">
                        <button className={`px-2 py-0.5 border-solid border-[rgb(104,109,114)] text-[rgb(52,55,58)] border-[1px] rounded hover:bg-[rgb(104,109,114)] hover:text-white ${!isChangeEmail ? 'hidden' : ''}`}
                                onClick={() => setIsChangeEmail(!isChangeEmail)}>Hủy</button>
                        <button className="px-2 py-0.5 border-solid border-[rgb(11_116_229)] text-[rgb(11_116_229)] border-[1px] rounded hover:bg-[rgb(11_116_229)] hover:text-white"
                                onClick={handleChangeEmail}> {!isChangeEmail ? 'Cập nhật' : 'Lưu'}</button>
                    </div>
                </div>
                <div className="text-[rgb(100_100_109)] mb-4">
                    Bảo mật
                </div>
                <div className="flex justify-between items-center px-2">
                    <div className="flex items-center gap-x-2">
                        <IoIosLock />
                        <span>Đổi mật khẩu</span>
                    </div>
                    <div>
                        <button className={`px-2 py-0.5 border-solid border-[rgb(11_116_229)] text-[rgb(11_116_229)] border-[1px] rounded hover:bg-[rgb(11_116_229)] hover:text-white`} onClick={handleChangePassword}>Thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;