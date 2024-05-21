import React, { useEffect, useState } from "react";
import BackpackImg from "../../../images/backpacks.png";
import BackpackImg2 from "../../../images/backpacks_1.png";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../redux/reducer/ProductSlice.jsx";
const Laptop = () => {
  const dispatch = useDispatch()
  var laptop = useSelector(state => state.product.laptop)
  useEffect(() => {
    dispatch(fetchProduct({ brandId: "", categoryId: "", key: "" }))
  }, [dispatch])



  return (
    <div className="relative mt-[100px]">
      <div className="w-full max-w-[1230px] mx-auto px-[15px]">
        <div className="flex items-center gap-2 justify-between">
          <h2 className="text-[40px] font-[700] text-[#031230]">
            Máy tính xách tay
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
          <div className="flex mx-[-7px] max-sm:flex-wrap">
            {/* left */}
            <div className="px-[7px] w-[30%] max-sm:w-full">
              <div className="h-full max-[800px]:h-auto">
                <div className="h-full rounded-[12px] overflow-hidden max-sm:hidden">
                  <img
                    className="hover:scale-105 h-full w-full duration-300 max-w-full"
                    height="780"
                    width="380"
                    src={BackpackImg}
                    alt=""
                  />
                </div>
                <div className="h-full rounded-[12px] overflow-hidden sm:hidden mb-3">
                  <img
                    className="hover:scale-105 h-full w-full duration-300 max-w-full"
                    height="730"
                    width="1524"
                    src={BackpackImg2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-[70%] px-[7px] max-sm:w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                  laptop.map(item => {
                    return <ProductCard key={item.id} details={item} />
                  })
                }
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;