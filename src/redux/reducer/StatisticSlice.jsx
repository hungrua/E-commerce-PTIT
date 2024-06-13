import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { IP } from "../../config/const";
const getUser = () => {
  const user = JSON.parse(localStorage.getItem("authorization"))
  return user
}
const StatisticSlice = createSlice({
  name: "statistic",
  initialState: {
    statisticNumber:{},
    top10BestSeller: []
  },
  reducers: {
  },
  extraReducers:(buider)=>{
    buider
    .addCase(fetchStatisticInMonth.fulfilled,(state,action)=>{
      state.statisticNumber = action.payload
    })
    .addCase(getTop10BestSeller.fulfilled,(state,action) =>{
        state.top10BestSeller = action.payload
    })
  }
});

export const fetchStatisticInMonth = createAsyncThunk('statistic/fetchStatisticInMonth',
  async(time)=>{
    const token = getUser().token
    const res = await fetch(`${IP}/admin/api/statistic/month`,{
      method:"POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(time)
    })
    const data = await res.json()
    return data
  }
)
export const getTop10BestSeller = createAsyncThunk("statistic/getTop10BestSeller",
    async()=>{
        const token = getUser().token
        const res = await fetch(`${IP}/admin/api/statistic/top/product`,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
          },
        })
        const data = await res.json()
        return data
      }
)
export default StatisticSlice;