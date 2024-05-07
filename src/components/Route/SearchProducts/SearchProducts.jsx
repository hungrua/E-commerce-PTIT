import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const SearchProducts = (props) => {
    const query  = props.query;
    

    return (
        <div className='mt-[53px] px-[62px] pt-2.5 pb-4'>
            <div className="flex justify-between gap-x-5">
                <div className="pt-2 pb-2">
                    <ul className="flex list-none flex-wrap">
                        <li><Link to="/">Trang chủ / </Link></li>
                        <li>Tìm kiếm</li>
                    </ul>
                </div>
            </div>
            <div class="text-lg ">
                <div>TÌM THẤY <span className='font-bold'>187</span> SẢN PHẨM PHÙ HỢP VỚI TỪ KHOÁ "{query}"</div>
            </div>
            <div class="grid grid-cols-5 gap-5 relative pt-5">
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

    );
};

export default SearchProducts;