import React from "react";
import ProductCard from "../ProductCard/ProductCard";


const ProductsGrid = (props) => {
    return (
        <div class="p-[25px] pt-[10px] flex-[4]">
            <div class="header__products">
                <h1 className="font-normal py-2.5 text-2xl">PC / Máy Bộ</h1>
                <div class="flex items-center py-2.5">
                    <div class="flex gap-x-5">
                        Sắp xếp:
                        <button class="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 a_z" onclick="">Tên A -{`>`} Z</button>
                        <button class="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 z_a" onclick="">Tên Z -{`>`} A</button>
                        <button class="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 inc" onclick="">Giá tăng dần</button>
                        <button class="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 dec" onclick="">Giá giảm dần</button>
                        <button class="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 new-product" onclick="">Hàng mới</button>
                    </div>
                </div>

            </div>
            <div class="grid grid-cols-4 gap-5 relative pt-5">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default ProductsGrid;