import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-removebg.png";
import {
  FaAngleDown,
  FaRegHeart,
  FaUser,
  FaTimes,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProductList, setOpenProductList] = useState(false);
  const [openCartList, setOpenCartList] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenMenu(false);
      }
    };

    // Thêm sự kiện lắng nghe resize khi component mount
    window.addEventListener("resize", handleResize);

    // Xóa sự kiện lắng nghe khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <header class=" w-full fixed top-0 z-10">
        <nav class="bg-[#fff] shadow-headerShadow border-b-[0.1rem] border-b-solid border-[#fff] py-2">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto relative">
            <Link to="/" class="flex items-center">
              <img
                src={logo}
                class="w-11 mx-3 h-auto"
                alt="BadmintonShop Logo"
              />
            </Link>
            <div class="flex items-center lg:order-2">
              <div className="flex gap-[0.8rem] items-center">
                <div className="flex gap-[0.8rem] items-center">
                  <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border-[1px] border-solid border-[#7f8080] cursor-pointer text-[#444545] transition-all">
                    <IoIosSearch className="text-[20px] hover:text-[#f66315]" />
                  </div>
                </div>
                <div className="flex gap-[0.8rem] items-center">
                  <div>
                    <a
                      href="/san-pham-yeu-thich"
                      className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border-[1px] border-solid border-[#7f8080] cursor-pointer text-[#444545] transition-all"
                    >
                      <FaRegHeart className="text-[16px] hover:text-[#f66315]" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="/trang-ca-nhan"
                      className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] border-[1px] border-solid border-[#7f8080] cursor-pointer text-[#444545] transition-all"
                    >
                      <FaUser className="text-[16px] hover:text-[#f66315]" />
                    </a>
                  </div>
                </div>
                <div className="border border-solid border-[#f66315] rounded-[4rem] relative">
                  <div className="text-[#fff] cursor-pointer relative bg-[#f66315] hover:bg-[#fff] hover:text-[#031230] mx-auto rounded-[4rem] items-center justify-center flex duration-300 ease-in-out">
                    <div
                      onClick={() => setOpenCartList(true)}
                      className="py-[8px] px-[10px] flex items-center justify-center gap-[6px]"
                    >
                      <FaCartShopping className="text-[16px]" />
                      <span className="text-[16px] font-[500] leading-[1.2]">
                        Giỏ hàng
                      </span>
                    </div>
                  </div>
                  <div className="absolute w-[20px] h-[20px] rounded-[50%] border border-solid border-[#feefe8] bg-[#e10600] text-[#fff] text-[10px] font-[500] flex items-center justify-center top-0 left-full translate-x-[-55%] translate-y-[-50%] z-1">
                    <span>1</span>
                  </div>
                  {/* gio hang detail */}
                  {openCartList === true ? (
                    <div className="fixed z-50 right-0 w-[550px] top-[58px] translate-x-0 translate-y-0 opacity-[1] max-w-[90%] bottom-0 overflow-y-auto bg-[#fff] transition-all shadow-3">
                      <div className="h-full flex flex-col">
                        <div className="py-[40px] pl-[40px] pr-[30px] flex flex-col h-full relative overflow-hidden">
                          <div
                            onClick={() => setOpenCartList(false)}
                            className="absolute top-[20px] right-[20px] w-[30px] h-[30px] border border-solid border-[#031230] flex items-center justify-center cursor-pointer"
                          >
                            <FaTimes className="text-[18px] font-[400] text-[#444545] hover:text-[#f66315] transition-all" />
                          </div>
                          <p className="text-center mb-[20px] md:text-[35px] font-[700] text-[#031230] text-[27px]">
                            Giỏ hàng
                          </p>
                          <div className="pr-[12px] max-h-[400px] flex flex-col gap-y-[30px] overflow-y-auto overflow-x-hidden">
                            <div className="flex gap-[12px]">
                              <div className="w-[77px] h-[77px] shrink-0 rounded-[6px] overflow-hidden">
                                <img
                                  className="h-full object-cover max-w-[100%]"
                                  src="https://cdn.shopvnb.com/img/300x300/uploads/san_pham/quan-cau-long-yonex-nam-trang-ma-038-1.webp"
                                  alt=""
                                  width="300"
                                  height="372"
                                />
                              </div>
                              <div className="flex flex-col">
                                <a
                                  href="/san-pham/id"
                                  className="no-underline text-[16px]"
                                >
                                  Quần Cầu Lông Yonex Nam Trắng
                                </a>
                                <div className="flex mt-auto">
                                  <div className="flex gap-[20px] p-[6px] rounded-[30px] border border-solid border-[#eee]">
                                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                                      <FaMinus className="text-[14px]" />
                                    </div>
                                    <p className="text-[14px] text-[#031230]">
                                      01
                                    </p>
                                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                                      <FaPlus className="text-[14px]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-[16px] text-[#f66315] mt-auto ml-auto font-[700]">
                                <span>5.150.000đ</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between gap-[12px] pr-[20px] mt-[50px] text-[16px] font-[700]">
                            <span className="text-[#000]">Tổng cộng</span>
                            <span className="text-[#f66315]">5.150.000đ </span>
                          </div>

                          <div className="mt-auto pr-[20px] flex gap-6">
                            <a
                              href="/gio-hang"
                              className="bg-[#fff] hover:bg-[#f66315] text-[#031230]  hover:text-[white] border border-solid border-[#f66315] w-full cursor-pointer relative overflow-hidden transition-all my-0 mx-auto rounded-[40px] flex items-center justify-center"
                            >
                              <span className="flex items-center justify-center py-[10px] px-[20px]">
                                <span className="leading-[1.2] text-[16px] font-[700] ">
                                  Xem giỏ hàng
                                </span>
                              </span>
                            </a>

                            <a
                              href="/thanh-toan"
                              className="hover:bg-[#fff] bg-[#f66315] hover:text-[#031230] text-white border border-solid border-[#f66315] w-full cursor-pointer relative overflow-hidden transition-all my-0 mx-auto rounded-[40px] flex items-center justify-center"
                            >
                              <span className="flex items-center justify-center py-[10px] px-[20px] gap-[6px]">
                                <FaCartShopping className="text-[16px]" />
                                <span className="leading-[1.2] text-[16px] font-[700] ">
                                  Đặt mua
                                </span>
                              </span>
                            </a>
                          </div>

                          <div className="absolute w-[40%] bottom-0 right-0 -z-1 translate-y-[15%]">
                            <div className="opacity-100 transition-all">
                              <img
                                className="block w-full max-w-full h-auto"
                                src="https://fbshop.vn/template/assets/images/cart-dcor.webp"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-[#e95221] rounded-lg lg:hidden bg-gray-100"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {openMenu === true ? (
              <div
                class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 fixed z-50 right-0 top-[58px] bg-[#fff]"
                id="mobile-menu"
              >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="/"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] rounded lg:bg-transparent hover:text-[#fff] lg:p-0"
                      aria-current="page"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/san-pham"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] hover:text-[#fff] lg:p-0"
                    >
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cua-hang"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] hover:text-[#fff] lg:p-0"
                    >
                      Cửa hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tra-don-hang"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] hover:text-[#fff] lg:p-0"
                    >
                      Tra đơn hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] hover:text-[#fff] lg:p-0"
                    >
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a
                      href="/lien-he"
                      class="block uppercase py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-[#f66315] hover:text-[#fff] lg:p-0"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div
                class="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
                id="web-navbar"
              >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="/"
                      class="block uppercase py-2 pl-3 pr-4 text-black bg-[#f66315] rounded lg:bg-transparent lg:hover:text-[#f66315] lg:p-0 "
                      aria-current="page"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li className="relative cursor-pointer">
                    <span
                      onClick={() => setOpenProductList(!openProductList)}
                      class="flex flex-nowrap justify-center text-center uppercase py-2 pl-3 pr-4 text-black  lg:hover:text-[#f66315] lg:p-0 "
                    >
                      Sản phẩm
                      <FaAngleDown className="mt-[5px]" />
                    </span>
                    {openProductList ? (
                      <div className="w-[200px] lg:bg-white lg:mt-1 lg:py-[4px] lg:pl-[10px] lg:pr-[15px] lg:absolute lg:top-[150%] lg:left-[-32px] lg:z-[999] lg:shadow-1">
                        <div className="mx-[-10px] flex flex-wrap ">
                          <div className="lg:overflow-hidden">
                            <ul className="lg:flex lg:flex-wrap my-0 pl-0 list-none ">
                              <li className="lg:w-full lg:py-[4px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <span className="text-[16px] mb-0 text-[#444545] font-[700] uppercase block leading-normal  w-full pb-[5px] no-underline">
                                  Danh mục sản phẩm
                                </span>
                              </li>
                              <li className="lg:w-full lg:py-[4px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <a
                                  href="/"
                                  className="text-[16px] mb-0 text-[#444545] hover:text-[#f66315] font-[600] block leading-normal  w-full pb-[5px] no-underline"
                                >
                                  Vợt cầu lông
                                </a>
                              </li>
                              <li className="lg:w-full lg:py-[4px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <a
                                  href="/"
                                  className="text-[16px] mb-0 text-[#444545] hover:text-[#f66315] font-[600] block leading-normal  w-full pb-[5px] no-underline"
                                >
                                  Giày cầu lông
                                </a>
                              </li>
                              <li className="lg:w-full lg:py-[4px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <a
                                  href="/"
                                  className="text-[16px] mb-0 text-[#444545] hover:text-[#f66315] font-[600] block leading-normal  w-full pb-[5px] no-underline"
                                >
                                  Túi vợt cầu lông
                                </a>
                              </li>
                              <li className="lg:w-full lg:py-[4px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <a
                                  href="/"
                                  className="text-[16px] mb-0 text-[#444545] hover:text-[#f66315] font-[600] block leading-normal  w-full pb-[5px] no-underline"
                                >
                                  Balo cầu lông
                                </a>
                              </li>
                              <li className="lg:w-full lg:pt-[5px] lg:pr-[4px] lg:pl-[8px] lg:float-left">
                                <a
                                  href="/"
                                  className="md:block text-[16px] mb-0 text-[#444545] hover:text-[#f66315] font-[600] block leading-normal w-full pb-[5px] no-underline"
                                >
                                  Phụ kiện cầu lông
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                  <li>
                    <a
                      href="/cua-hang"
                      class="block uppercase py-2 pl-3 pr-4 text-gray-700  lg:hover:text-[#f66315] lg:p-0 "
                    >
                      Cửa hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tra-don-hang"
                      class="block uppercase py-2 pl-3 pr-4 text-gray-700  lg:hover:text-[#f66315] lg:p-0 "
                    >
                      Tra đơn hàng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc"
                      class="block uppercase py-2 pl-3 pr-4 text-gray-700  lg:hover:text-[#f66315] lg:p-0 "
                    >
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a
                      href="lien-he"
                      class="block uppercase py-2 pl-3 pr-4 text-gray-700  lg:hover:text-[#f66315] lg:p-0 "
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
