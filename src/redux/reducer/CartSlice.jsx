import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP } from "../../config/const";

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("authorization")).token
    return token
}
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        resetAlert: (state, action) => {
            state.alert = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItem.fulfilled, (state, action) => {
                const cartItems = action.payload
                state.cartItems = cartItems.map(item => {
                    let tmpStructure = {
                        cartItemId: item.id,
                        itemDetailsId: item.itemDetail.id,
                        quantity: item.quantity,
                        totalPrice: item.price,
                        name: item.itemDto.name,
                        categoryId: item.itemDto.categoryDto.id,
                        image: item.itemDto.images[0].path,
                        price: item.itemDetail.price,
                        details: item.itemDetail,
                        itemId: item.itemDto.id
                    }
                    return tmpStructure
                })
            })
            .addCase(addItemToCart.fulfilled, (state, action) => {

                const cartItem = {
                    cartItemId: action.payload.itemInfo.id,
                    itemDetailsId: action.payload.itemInfo.itemDetail.id,
                    quantity: action.payload.itemInfo.quantity,
                    totalPrice: action.payload.itemInfo.price,
                    name: action.payload.itemInfo.itemDto.name,
                    categoryID: action.payload.itemInfo.itemDto.categoryDto.id,
                    image: action.payload.itemInfo.itemDto.images[0].path,
                    price: action.payload.itemInfo.itemDetail.price,
                    details: action.payload.itemInfo.itemDetail,
                    itemId: action.payload.itemInfo.itemDto.id
                }
                const index = state.cartItems.findIndex(item => item.itemDetailsId === cartItem.itemDetailsId)
                if (index === -1) state.cartItems.push(cartItem)
                else state.cartItems[index] = cartItem
                state.alert = action.payload.alert
            })

    }
})

export const fetchCartItem = createAsyncThunk("cart/fetchCartItem", async () => {
    console.log("do Fetch")
    const token = getToken()
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const res = await fetch(`${IP}/customer/api/carts`, options)
    const data = await res.json()
    return data
})
export const addItemToCart = createAsyncThunk("cart/addItemToCart", async (cartItem) => {
    const token = getToken()
    console.log(cartItem)
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartItem)
    }
    const res = await fetch(`${IP}/customer/api/cart`, options)
    const data = await res.json()
    return {
        alert: {
            code: data.code,
            message: data.message
        },
        itemInfo: data.item
    }
})

export default cartSlice