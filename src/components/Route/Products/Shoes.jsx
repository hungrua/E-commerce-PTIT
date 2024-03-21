import React from "react";
import ShoesImg from "../../../images/shoes.png";
import ShoesImg1 from "../../../images/shoes_1.png";
import ProductCart from "../ProductCart/ProductCart.jsx";
const Shoes = () => {
  return (
    <div className="relative mt-[100px]">
      <div className="w-full max-w-[1230px] mx-auto px-[15px]">
        <div className="flex items-center gap-2 justify-between">
          <h2 className="text-[40px] font-[700] text-[#031230]">
            Giày cầu lông
          </h2>
          <div className="border border-solid border-[#f66315] w-fit mr-6 min-w-[120px] rounded-[4rem] relative">
            <div className="text-[#fff] cursor-pointer relative bg-[#f66315] hover:bg-[#fff] hover:text-[#031230] duration-300 mx-auto rounded-[4rem] items-center justify-center flex">
              <a
                href="/vot-cau-long"
                className="py-[10px] px-[10px] flex items-center justify-center gap-[6px]"
              >
                <span className="text-[16px] font-[500] leading-[1.2]">
                  Xem tất cả
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <div className="flex mx-[-7px] max-sm:flex-wrap max-sm:flex-col-reverse">
            {/* left */}
            <div className="w-[69.333333333%] px-[7px] max-sm:w-full">
              <div className="flex flex-wrap mx-[-7px] gap-y-[24px]">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
              </div>
            </div>
            {/* right */}
            <div className="px-[7px] w-[31.666666667%] max-sm:w-full">
              <div className="h-full max-[800px]:h-auto">
                <div className="h-full rounded-[12px] overflow-hidden max-sm:hidden">
                  <img
                    className="hover:scale-105 h-full w-full duration-300 max-w-full"
                    height="780"
                    width="380"
                    src={ShoesImg}
                    alt=""
                  />
                </div>
                <div className="h-full rounded-[12px] overflow-hidden sm:hidden mb-3">
                  <img
                    className="hover:scale-105 h-full w-full duration-300 max-w-full"
                    height="730"
                    width="1524"
                    src={ShoesImg1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes;
