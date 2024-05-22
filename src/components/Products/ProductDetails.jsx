import React, { useEffect, useState } from "react";
import { FaBatteryHalf, FaCartShopping } from "react-icons/fa6";
import { FaCheck, FaTimes, FaRegHeart, FaMinus, FaPlus, FaStar, FaStarHalfAlt, FaUsb, FaWeight, FaSimCard } from "react-icons/fa";
import { MdWarehouse, MdOutlineFolderSpecial } from "react-icons/md";
import { FiCpu } from "react-icons/fi";
import { GiLightningFrequency } from "react-icons/gi";
import { AiFillWindows } from "react-icons/ai";
import { RiPhoneCameraLine, RiPhoneCameraFill } from "react-icons/ri";
import { IoMdWifi } from "react-icons/io";


import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/reducer/ProductSlice";
import ItemDetail from "./ItemDetail";
const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [selectImage, setSelectImage] = useState(0);
  const [active, setActive] = useState(1);
  const [displayProduct, setDisplayProduct] = useState({})
  const product = useSelector(state => state.product.currentSetProduct)
  const images = product.images.map(img => img.path)
  const [rating, setRating] = useState(3.5);
  const [selectItemDetail, setSelectItemDetail] = useState(null);

  // console.log(product)
  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch])
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
    // console.log(tmpProduct)
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
                      src={`${images[selectImage]}`}
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
                        className={`w-[100px] mr-[10px] border border-solid cursor-pointer bg-[#fff] h-full ${selectImage === index
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
                            onClick={() => setSelectImage(index)}
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
                  <span className="font-[700] text-[#f6af15]">{rating}</span>
                  <div className="flex">
                    {
                      Array.from({ length: parseInt(rating) }, (_, index) => (
                        <FaStar key={index} color="orange" />
                      ))
                    }
                    {
                      (rating - parseInt(rating) >= 0.5 ? <FaStarHalfAlt color="orange" /> : '')
                    }
                    {
                      Array.from({ length: 5 - Math.round(rating) }, (_, index) => (
                        <FaStar color="rgb(209,209,211)" />
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
                  <span className="font-[700]">{selectItemDetail ? selectItemDetail.soldNumber : 492}</span>
                  <span className="text-[14px] mt-[1px]"> lượt mua</span>
                </div>
                <div className="w-[30px] h-[30px] relative rounded-[50%] flex items-center justify-center text-[#f66315] bg-[#feefe8] text-[13px] duration-300 cursor-pointer hover:text-white hover:bg-[#f66315]">
                  <FaRegHeart />
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="flex gap-[20px] items-center">
                  <div className="leading-[1] flex items-center gap-[10px] p-1">
                    {
                      selectItemDetail ? (
                        <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">{formatCurrency(selectItemDetail.price)}</span>
                      ) : (
                        <div>
                          <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">
                            {displayProduct.minPrice}
                          </span>
                          <span className="max-[1200px]:text-[29px] font-[700] text-[#f66315] text-[34px]">
                            - {displayProduct.maxPrice}
                          </span>
                        </div>
                      )
                    }

                  </div>
                </div>
                <div className="mt-4 flex gap-x-4 cursor-pointer">
                  {
                    product.itemDetails?.map((detail, index) => (
                      <ItemDetail
                        key={index}
                        data={detail}
                        selectItemDetail={selectItemDetail}
                        setSelectImage={setSelectImage}
                        setSelectItemDetail={setSelectItemDetail}
                      />
                    ))
                  }

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
                <div className="absolute w-[15%] top-[15%] right-0">
                  <img
                    className="block w-full max-w-full h-auto"
                    src="/static/images/web-images/bot.png"
                    alt=""
                  />
                </div>
                <span className="inline-block py-1 px-5 text-[#f66315] font-[500] text-[14px] rounded-t-[12px] border border-solid border-[rgb(11,116,229)] border-b-0 relative z-1 bg-[#fff] translate-y-[1px]">
                  Thông tin sản phẩm
                </span>
                <div className="flex flex-col gap-[10px] p-5 rounded-b-[12px] rounded-r-[12px] border border-solid border-[rgb(11,116,229)] relative overflow-hidden min-h-[100px]">
                  <div className="absolute w-full pt-[55%] top-0 right-0 z-0 bg-6 translate-x-[42%] rotate-[220deg]"></div>

                  {
                    displayProduct.vendor && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <MdWarehouse color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400]">
                        Nhà cung cấp: <span className="font-bold">{displayProduct.vendor}</span>
                      </span>
                    </div>
                  }

                  {
                    displayProduct.cpu && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <FiCpu color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400]">
                        CPU: <span className="font-bold">{displayProduct.cpu}</span>
                      </span>
                    </div>
                  }

                  {
                    displayProduct.frequencyScreen && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <GiLightningFrequency color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400]">
                        Tần số quét: <span className="font-bold">{displayProduct.frequencyScreen}</span>
                      </span>
                    </div>
                  }

                  {
                    displayProduct.os && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <AiFillWindows color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400]">
                        Hệ điều hành: <span className="font-bold">{displayProduct.os}</span>
                      </span>
                    </div>
                  }

                  {
                    displayProduct.weight && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <FaWeight color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Khối lượng: <span className="font-bold">{displayProduct.weight} kg</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.batteryCapacity && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <FaBatteryHalf color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Dung lượng pin: <span className="font-bold">{displayProduct.batteryCapacity}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.frontCamera && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <RiPhoneCameraLine color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Camera trước: <span className="font-bold">{displayProduct.frontCamera}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.rearCamera && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <RiPhoneCameraFill color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Camera sau: <span className="font-bold">{displayProduct.rearCamera}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.usbNumber && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <FaUsb color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap text-ellipsis overflow-hidden">
                        Cổng kết nối: <span className="font-bold">{displayProduct.usbNumber}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.simNumber && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <FaSimCard color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Số lượng khe sim: <span className="font-bold">{displayProduct.simNumber}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.connectType && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <IoMdWifi color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Loại kết nối: <span className="font-bold">{displayProduct.connectType}</span>
                      </span>
                    </div>
                  }
                  {
                    displayProduct.specialProperties && <div className="flex items-center gap-[10px]">
                      <span className="flex w-[14px] h-[14px] items-center justify-center shrink-0">
                        <MdOutlineFolderSpecial color="red" />
                      </span>
                      <span className="text-[#444545] text-[16px] font-[400] whitespace-nowrap">
                        Thuộc tính đặc biệt: <span className="font-bold">{displayProduct.specialProperties}</span>
                      </span>
                    </div>
                  }
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
              className="relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 1 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315] flex items-center">
                    Đánh giá {rating}{" "}
                    <FaStar color="orange"/>
                  </span>
                </div>
              ) : (
                <span className="text-[#031230] flex items-center">
                  Đánh giá {rating}{" "}
                  <FaStar color="orange"/>
                </span>
              )}
            </div>
            <div
              onClick={() => setActive(2)}
              className=" relative p-[20px] pt-[10px] duration-300 ease-in-out cursor-pointer rounded-t-[12px] text-[24px] font-[700]"
            >
              {active === 2 ? (
                <div>
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f66315]"></div>
                  <span className="text-[#f66315]">Mô tả sản phẩm</span>
                </div>
              ) : (
                <span className="text-[#031230]">Mô tả sản phẩm</span>
              )}
            </div>
          </div>

          {active === 2 ? (

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
          {active === 1 ? (
            <Reviews />
          ) : null}
        </div>
      </div>
    </div >
  );
};

export default ProductDetails;
