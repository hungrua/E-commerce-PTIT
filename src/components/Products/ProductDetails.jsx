import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCheck, FaTimes, FaRegHeart, FaMinus, FaPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";


import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/reducer/ProductSlice";
const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [select, setSelect] = useState(0);
  const [active, setActive] = useState(1);
  const [displayProduct, setDisplayProduct] = useState({})
  const product = useSelector(state => state.product.currentSetProduct)
  const images = product.images.map(img => img.path)
  const [rating, setRating] = useState(3.5);


  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch,id])
  useEffect(() => {
    let priceArray = product.itemDetails.map(item => {
      return item.price
    })
    let tmpProduct = {
      ...product,
      isAvailable: product.itemDetails.some(item => item.isAvailable == true),
      minPrice: formatCurrency(Math.min(...priceArray)),
      maxPrice: formatCurrency(Math.max(...priceArray))
    }
    console.log(tmpProduct)
    setDisplayProduct(tmpProduct)
  }, [product])
  const formatCurrency = (value) => {
    if (typeof value !== 'number') {
      return value; // Trả về giá trị gốc nếu không phải là số
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });

    const formattedValue = formatter.format(value);

    return formattedValue.replace(/₫/g, 'đ');
  }
  // const images = [
  //   "https://cdn.shopvnb.com//uploads/gallery/ao-cau-long-yonex-nu-den-ma-836_1703549899.webp",
  //   "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-lining-axforce-90-do-dragon-max-ma-jp-5_1697394984.webp",
  //   "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-lining-axforce-90-do-dragon-max-ma-jp-4_1697394989.webp",
  // ];
  return (
    <div className="my-[100px]">
      <div className="w-full max-w-[1230px] h-full mx-auto px-[15px]">
        <div className="flex mx-[-12px] flex-wrap">
          {/* left */}
          <div className="w-[41.6666667%] px-[12px] max-[850px]:w-full">
            <div>
              <div className="relative">
                <div className="mx-auto relative overflow-hidden z-1">
                  <div className="w-full relative max-[850px]:w-[65%] max-[600px]:w-full mx-auto cursor-pointer duration-300 ease-in-out">
                    <img
                      className="w-full h-full object-cover max-w-full rounded-[5px]"
                      src={`${images[select]}`}
                      alt=""
                    />
                    <div className="flex absolute min-w-[48px] top-[20px] left-[10px] z-1 items-center justify-center">
                      <div className="absolute w-full min-h-[48px] top-[-10px] -z-1 left-[0px] bg-no-repeat bg-contain bg-sale"></div>
                      <div className="font-[700] text-[#fff] mt-[2px]">
                        -12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[12px]">
                <div className="w-full flex justify-center">
                  {images &&
                    images.map((i, index) => (
                      <div key={index}
                        className={`w-[100px] mr-[10px] border border-solid cursor-pointer bg-[#fff] h-full ${select === index
                          ? "border-[#f66315]"
                          : "border-[#ebebeb]"
                          }`}
                      >
                        <div className={`pb-[100%] h-0 relative`}>
                          <img
                            src={`${i}`}
                            alt=""
                            height="80"
                            width="80"
                            onClick={() => setSelect(index)}
                            className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-full max-h-full w-auto h-auto"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* tình trạng */}
            <div className="mt-[20px]">
              <div className="flex justify-between gap-2">
                <div className="mb-0"></div>
                {displayProduct.isAvailable ? (
                  <div className="bg-[#dcf3d8] py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] text-[#1d9d06] text-[14px]">
                    <FaCheck />
                    <div className="font-[500]">Còn hàng</div>
                  </div>
                ) : (
                  <div className="bg-[#feefe8] py-1 px-4 min-w-[120px] flex items-center justify-center gap-[6px] rounded-[36px] text-[#f63e15] text-[14px]">
                    <FaTimes />
                    <div className="font-[500]">Hết hàng</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[58.3333333%] px-[12px] max-[850px]:w-full">
            <div>
              <div className="flex gap-2 items-center justify-between">
                <h1 className="max-[1200px]:text-[35px] text-[40px] font-[700] text-[#031230]">
                  {displayProduct.name}
                </h1>
              </div>
              <div className="flex gap-[28px]">
                <div className="flex items-center gap-1">
                  <span className="font-[700] text-[#f6af15]">4</span>
                  <div className="flex">
                    {
                      Array.from({length: parseInt(rating)}, (_, index) => (
                        <FaStar color="orange"/>
                      ))
                    }
                    {
                      (rating - parseInt(rating) >= 0.5 ? <FaStarHalfAlt color="orange"/> : '')
                    }
                    {
                      Array.from({length: 5 - Math.round(rating)}, (_, index) => (
                        <FaStar color="rgb(209,209,211)"/>
                      ))
                    }
                  </div>
                </div>
                <div className="flex items-center gap-1 relative">
                  <div className="absolute h-4 w-[1px] bg-[#000] top-[50%] left-[-1rem] translate-x-[-50%] translate-y-[-50%]"></div>
                  <span className="font-[700]">3</span>
                  <span className="text-[14px] mt-[1px]"> đánh giá</span>
                </div>
                <div className="flex items-center gap-1 relative">
                  <div className="absolute h-4 w-[1px] bg-[#000] top-[50%] left-[-1rem] translate-x-[-50%] translate-y-[-50%]"></div>
                  <span className="font-[700]">492</span>
                  <span className="text-[14px] mt-[1px]"> lượt mua</span>
                </div>
                <div className="w-[30px] h-[30px] relative rounded-[50%] flex items-center justify-center text-[#f66315] bg-[#feefe8] text-[13px] duration-300 cursor-pointer hover:text-white hover:bg-[#f66315]">
                  <FaRegHeart />
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="flex gap-[20px] items-center">
                  <div className="leading-[1] flex items-center gap-[10px] p-1">
                    <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">
                      {displayProduct.minPrice} 
                    </span>
                    <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">
                      - {displayProduct.maxPrice}
                    </span>
                  </div>
                </div>
                <div className="mt-0">
                  <span className="inline-block text-[#f66315]">
                    Chọn thuộc tính:
                  </span>
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-3">
                      <span className="min-w-[80px] font-[500]">Màu sắc</span>
                      <div className="flex mx-[-8px] flex-wrap">
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              Đen
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              Trắng
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Nếu mà giày có kích cớ / áo*/}
                  <div className="mt-[20px]">
                    <div className="flex items-center gap-3">
                      <span className="min-w-[80px] font-[500]">Size giày</span>
                      <div className="flex mx-[-8px] flex-wrap">
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              37
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              38
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              39
                            </span>
                          </div>
                        </div>
                        <div className="px-[5px]">
                          <div className="min-w-[32px] h-[32px] rounded-[6px] border-[2px] border-solid border-[#fbc1a1] flex items-center justify-center font-[500] duration-300 ease-in-out text-[#444545] cursor-pointer flex-col gap-[6px]">
                            <span className="p-[7px] text-[#031230] text-[14px] duration-300 ease-in-out">
                              40
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] flex items-center gap-[30px]">
                  <div className="flex items-center gap-[10px]">
                    <span className="min-w-[80px] font-[500]">Số lượng:</span>
                    <div className="flex mt-auto">
                      <div className="flex gap-[20px] p-[6px] rounded-[30px] border border-solid border-[#eee]">
                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                          <FaMinus className="text-[14px]" />
                        </div>
                        <p className="text-[14px] text-[#031230]">01</p>
                        <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]">
                          <FaPlus className="text-[14px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] pr-[20px] flex gap-[10px]">
                  <div className="bg-[#fff] hover:bg-[#f66315] text-[#031230]  hover:text-[white] border border-solid border-[#f66315] min-w-[180px] cursor-pointer relative overflow-hidden transition-all my-0  rounded-[40px] flex items-center justify-center">
                    <span className="flex items-center justify-center py-[10px] px-[20px]">
                      <span className="leading-[1.2] text-[16px] font-[700] ">
                        Thêm vào giỏ
                      </span>
                    </span>
                  </div>

                  <div className="hover:bg-[#fff] bg-[#f66315] hover:text-[#031230] text-white border border-solid border-[#f66315] min-w-[180px] cursor-pointer relative overflow-hidden transition-all my-0 rounded-[40px] flex items-center justify-center">
                    <span className="flex items-center justify-center py-[10px] px-[20px] gap-[6px]">
                      <FaCartShopping className="text-[16px]" />
                      <span className="leading-[1.2] text-[16px] font-[700] ">
                        Mua ngay
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[15px]">
              <div className="relative">
                <div className="absolute w-[15%] bottom-0 right-0">
                  <img
                    className="block w-full max-w-full h-auto"
                    src="/static/images/web-images/bot.png"
                    alt=""
                  />
                </div>
                <span className="inline-block py-1 px-5 text-[#f66315] font-[500] text-[14px] rounded-t-[12px] border border-solid border-[rgb(11,116,229)] border-b-0 relative z-1 bg-[#fff] translate-y-[1px]">
                  Ưu đãi
                </span>
                <div className="flex flex-col gap-[10px] p-5 rounded-b-[12px] rounded-r-[12px] border border-solid border-[rgb(11,116,229)] relative overflow-hidden min-h-[100px]">
                  <div className="absolute w-full pt-[55%] bottom-0 right-0 z-0 bg-6 translate-x-[42%] rotate-[328deg]"></div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src='/static/images/step-icon.webp'
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Freeship khi chuyển khoản trước với đơn hàng trên 1 triệu
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src='/static/images/ft-pay-icon.webp'
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Yên tâm với quy trình nhận hàng kiểm tra trước thanh toán
                      sau
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src='/static/images/icon-cate-new.webp'
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Bảo hành 3 tháng lỗi 1 đổi 1 lỗi nhà sản xuất
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src='/static/images/icon-cate-tag.webp'
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Cơ hội nhân voucher cho các đơn hàng tiếp theo
                    </span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                      <img
                        src='/static/images/cart-icon.webp'
                        alt=""
                        className="max-w-full h-auto"
                      />
                    </span>
                    <span className="text-[#444545] text-[16px] font-[400]">
                      Vô vàn dịch vụ hỗ trơ miễn phí khác
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mô tả */}
        <div className="mt-[100px]">
          <div className="flex flex-nowrap gap-[30px] ">
            <div
              onClick={() => setActive(1)}
              className=" relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 1 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315]">Mô tả sản phẩm</span>
                </div>
              ) : (
                <span className="text-[#031230]">Mô tả sản phẩm</span>
              )}
            </div>
            <div
              onClick={() => setActive(3)}
              className="relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 3 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315] flex">
                    Đánh giá 4{" "}
                    <img
                      src="https://fbshop.vn/template/assets/images/Star.svg"
                      alt=""
                      className="w-[18px] h-[18px] max-w-full mt-[8px]"
                    />
                  </span>
                </div>
              ) : (
                <span className="text-[#031230] flex">
                  Đánh giá 4{" "}
                  <img
                    src="https://fbshop.vn/template/assets/images/Star.svg"
                    alt=""
                    className="w-[18px] h-[18px] max-w-full mt-[8px]"
                  />
                </span>
              )}
            </div>
          </div>
          {active === 1 ? (
            <div className="p-[30px] rounded-b-[12px] bg-[#feefe8] relative z-1">
              <div className="px-[15px] w-full text-[#000]">
                <h2 className="text-[30px] my-[10px] font-[700]">
                  {displayProduct.name}
                </h2>
                <p className="font-[400] text-[16px]">
                  {displayProduct.description}
                </p>
              </div>
            </div>
          ) : null}
          {active === 3 ? (
            <Reviews />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
