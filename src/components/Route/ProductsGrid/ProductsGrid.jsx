import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../redux/reducer/ProductSlice";


const ProductsGrid = (props) => {
    const {categoryId} = props
    const dispatch = useDispatch()
    var products = useSelector(state => state.product.products)
    useEffect(()=>{
        dispatch(fetchProduct({ brandId: "", categoryId: categoryId, key: "" }))
    },[dispatch,categoryId])
    
    const handleFunction =()=>{

    }
    return (
        <div className="p-[25px] pt-[10px] flex-[4]">
            <div className="header__products">
                <h1 className="font-normal py-2.5 text-2xl">PC / Máy Bộ</h1>
                <div className="flex items-center py-2.5">
                    <div className="flex gap-x-5">
                        Sắp xếp:
                        <button className="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 a_z" onClick={handleFunction()}>Tên A -{`>`} Z</button>
                        <button className="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 z_a" onClick={handleFunction()}>Tên Z -{`>`} A</button>
                        <button className="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 inc" onClick={handleFunction()}>Giá tăng dần</button>
                        <button className="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 dec" onClick={handleFunction()}>Giá giảm dần</button>
                        <button className="bg-transparent text-[#898989] text-sm hover:cursor-pointer hover:text-green-600 new-product" onClick={handleFunction()}>Hàng mới</button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-4 gap-5 relative pt-5">
                { products.map(item=>{
                    return <ProductCard details={item} key={item.id}/>
                }) 
               }
            </div>
        </div>
    )
}

export default ProductsGrid;