import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, fetchCartItem } from '../../../redux/reducer/CartSlice'
import {
    FaMinus,
    FaPlus
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../basicFunction';
export const HeaderCartItem = (props) => {
    const { itemInfo } = props
    const [quantity, setQuantity] = useState(itemInfo.quantity)
    const renderName = (name, categoryId) => {
        if (categoryId === 1) {
            return `${name} ( ${itemInfo.details.ram} - ${itemInfo.details.diskSize} - ${itemInfo.details.screenSize} )`
        }
        else if (categoryId === 2) {
            return `${name} ( ${itemInfo.details.color} - ${itemInfo.details.ram} - ${itemInfo.details.diskSize} )`
        }
        return `${name} ( ${itemInfo.details.color} )`
    }
    const handleChangeQuantity =(value)=>{
        if(quantity<2 && value==1) return
        setQuantity((prev)=> prev - value )
    }

    return (
        <div className="pb-5 pr-[12px] max-h-[400px] flex flex-col gap-y-[30px] overflow-y-auto overflow-x-hidden">
            <div className="flex gap-[12px]">
                <div className="w-[77px] h-[77px] shrink-0 rounded-[6px] overflow-hidden">
                    <img
                        className="h-full object-cover max-w-[100%]"
                        src={itemInfo.image}
                        alt=""
                        width="300"
                        height="372"
                    />
                </div>
                <div className="flex flex-col">
                    <Link
                        to={`/san-pham/${itemInfo.itemId}`}
                        className="no-underline text-[16px]"
                    >
                        {renderName(itemInfo.name, itemInfo.categoryId)}
                    </Link>
                    <div className="flex mt-auto">
                        <div className="flex gap-[20px] p-[6px] rounded-[30px] border border-solid border-[#eee]">
                            <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]"
                                onClick={()=>handleChangeQuantity(1)}
                            >
                                <FaMinus className="text-[14px]" />
                            </div>
                            <p className="text-[14px] text-[#031230]">
                                {quantity}
                            </p>
                            <div className="w-6 h-6 flex items-center justify-center cursor-pointer text-[#444545]"
                                onClick={()=>handleChangeQuantity(-1)}
                            >
                                <FaPlus className="text-[14px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[16px] text-[#f66315] mt-auto ml-auto font-[700]">
                    <span>{formatCurrency(quantity*itemInfo.totalPrice)}</span>
                </div>
            </div>
        </div>
    )
}
