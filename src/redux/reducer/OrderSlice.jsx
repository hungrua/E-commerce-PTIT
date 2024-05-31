import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP } from "../../config/const";
const getUser = () => {
  const user = JSON.parse(localStorage.getItem("authorization"))
  return user
}
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders : []
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orderStatus = action.payload
      })
      .addCase(fetchOrderOfUser.fulfilled, (state, action) => {
        state.orders = action.payload
        console.log(action.payload)
      })
  },
});

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ orderParams, orderBody }) => {
    orderBody = { ...orderBody, totalPrice: orderParams.vnp_Amount }
    console.log(orderParams.voucher)
    const token = getUser().token
    const res = await fetch(`${IP}/api/order?vnp_BankTranNo=${orderParams.payment === 1 ? `shipcode` : orderParams.vnp_BankTranNo}&vnp_OrderInfo=${orderParams.vnp_OrderInfo}&vnp_ResponseCode=${orderParams.vnp_ResponseCode}&vnp_TransactionStatus=${orderParams.vnp_TransactionStatus}&shipmentId=${parseInt(orderParams.shipment)}&paymentId=${orderParams.payment}&voucherId=${orderParams.voucher??""}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(orderBody)
    });
    const data = await res.json();
    return data;
  }
);
export const fetchOrderOfUser = createAsyncThunk(
  "order/fetchOrderOfUser",
  async () => {
    const token = getUser().token
    const res = await fetch(`${IP}/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
    });
    const data = await res.json();
    return data;
  }
);
export default orderSlice;
