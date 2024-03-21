import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../images/logo-removebg.png";
const SignUp = () => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="overflow-hidden bg-cover bg-no-repeat h-[100vh] p-12 bg-[url('https://t4.ftcdn.net/jpg/04/86/39/87/360_F_486398788_gAOGBgemxkzJ6JHUJD7vN5A0ayQ2FLxF.jpg')]">
      <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
          <Link to="/" class="flex items-center mb-4 text-2xl font-semibold">
            <img class="w-12 h-12 mr-2 mt-1" src={logo} alt="logo" />
            <span className="text-white">BadmintonShop</span>
          </Link>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#e95221] md:text-2xl">
                Đăng ký tài khoản
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border-[2px] border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 block w-full p-2.5 "
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border-[2px] border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 block w-full p-2.5 "
                    placeholder="badmintonshop@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phoneNumber"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    class="bg-gray-50 border-[2px] border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 block w-full p-2.5 "
                    placeholder="0988887777"
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Mật khẩu
                  </label>
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border-[2px] border-orange-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 block w-full p-2.5"
                    required
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-[40px] cursor-pointer text-orange-500"
                      size={20}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-[40px] cursor-pointer text-orange-500"
                      size={20}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-[#ff5a3d] focus:bg-sky-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Đăng ký
                </button>
                <p class="text-sm font-[400] text-gray-700">
                  Bạn đã có tài khoản?{" "}
                  <Link
                    to="/login"
                    class="font-[600] text-primary-600 hover:underline"
                  >
                    Đăng nhập ngay
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
