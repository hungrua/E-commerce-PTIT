import React from 'react'
import { RecommendProduct } from './RecommendProduct'
import { useSelector } from 'react-redux'

export const Recommender = ({ searchValue }) => {
    const products = useSelector(state => state.product.fullProducts)
    const listProduct = products.filter((item)=> item.name.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 5)
    console.log(products)
    return (
        listProduct.length!==0?(listProduct.map((item)=>{
            return(
                <RecommendProduct details={item} />
            )
        })):(<div className='my-8 text-center'>Không có sản phẩm khớp</div>)
    )
}
