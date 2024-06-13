import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP } from "../../config/const";

const getUser = () => {
    const user = JSON.parse(localStorage.getItem("authorization"))
    return user
}
const reviewSlice = createSlice({
    name: "review",
    initialState: {
        comments: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentOfProduct.fulfilled, (state, action) => {
                state.comments = action.payload
            })
    }
})

export const fetchCommentOfProduct = createAsyncThunk('review/fetchCommentOfProduct',
    async(id) => {
        const token = getUser().token
        console.log(token)
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        const res = await fetch(`${IP}/api/comments?itemId=${id}`,options)
        const data = await res.json()
        console.log(data)
        return data
    }
)

export const addComment = createAsyncThunk('review/addComment',
    async ({id,comment}) => {
        const token = getUser().token
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(comment)
        }
        const res = await fetch(`${IP}/api/comment?itemId=${id}`,options)
        const data = res.json()
        return data
    }
)
export default reviewSlice